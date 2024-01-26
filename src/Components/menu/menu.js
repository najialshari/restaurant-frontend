import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
// import { getCategoryMealsAction } from "../../redux/actions/menu";
import { getCategoriesAction } from "../../redux/actions/categories";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

function Menu() {
  const dispatch = useDispatch();
  const getCategories = async () => {
    await dispatch(getCategoriesAction()).catch((err) => {
      console.error("getCategory", err);
    });
  };

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [categories, setCategories] = useState([]);
  const TempCategories = useSelector(
    (state) => state?.categories.categoriesDate
  );

  useEffect(() => {
    setCategories(TempCategories);
  }, [TempCategories]);

  return (
    <main>
      <div className="categories" id="menuCategories">
        {/* <ul>
        {categories?.map((item) => (
          <li key={item.id}>
            <a id="categoriesType" href={`#${item.name}`}>
              {item.name}
            </a>
          </li>
        ))}
      </ul> */}

        {categories.length > 0 ? (
          categories?.map((item) => (
            <div className="category" key={item.id}>
              <h2 className="category-title" id={`${item.name}`}>
                {item.name}
              </h2>
              <div className="category-cards">
                {item.CategoryMeals?.map((itemType) => (
                  <motion.div
                    initial={{
                      x: "10vw",
                      transition: { type: "spring", duration: 2 },
                    }}
                    animate={{
                      x: 0,
                      transition: { type: "spring", duration: 2 },
                    }}
                    key={itemType.id}
                    className="mealsCard"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "fit-content",
                          float: "right",
                          margin: "5px 10px",
                          borderRadius: "50%",
                          padding: "3px",
                          boxShadow: "1px 2px 4px  grey",
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="#333"
                            d="M22.45 6a5.47 5.47 0 0 1 3.91 1.64a5.7 5.7 0 0 1 0 8L16 26.13L5.64 15.64a5.7 5.7 0 0 1 0-8a5.48 5.48 0 0 1 7.82 0l2.54 2.6l2.53-2.58A5.44 5.44 0 0 1 22.45 6m0-2a7.47 7.47 0 0 0-5.34 2.24L16 7.36l-1.11-1.12a7.49 7.49 0 0 0-10.68 0a7.72 7.72 0 0 0 0 10.82L16 29l11.79-11.94a7.72 7.72 0 0 0 0-10.82A7.49 7.49 0 0 0 22.45 4"
                          />
                        </svg>
                      </div>
                    </div>

                    <Link to={`/meals/${itemType.id}`} className="linkToMeal">
                      <img className="mealsImage" alt="" src={itemType.image} />
                      <div className="mealsText">
                        <div className="cardDetails">
                          <h2>
                            {itemType.Meal?.name[0].toUpperCase() +
                              itemType.Meal?.name.substr(1)}
                          </h2>
                          <div className="mealType">
                            <div>{itemType.MealType?.name}</div>
                            {itemType.discount > 0 ? (
                              <div className="mealsPrice">
                                <div className="oldPrice">
                                  {itemType.price}$
                                </div>
                                <div>
                                  <b>
                                    {parseFloat(
                                      itemType.price -
                                        itemType.price *
                                          (itemType.discount / 100)
                                    ).toFixed(2)}
                                    $
                                  </b>
                                </div>
                              </div>
                            ) : (
                              <div className="mealsprice">
                                <b>{itemType.price}$</b>
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="moreDetailsButton">More details</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="loading">
            Loading... <CircularProgress size={"2rem"}/>
          </div>
        )}
      </div>
    </main>
  );
}

export default Menu;
