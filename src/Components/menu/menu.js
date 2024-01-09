import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
// import { getCategoryMealsAction } from "../../redux/actions/menu";
import { getCategoriesAction } from "../../redux/actions/categories";
import { useState } from "react";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

  const [categories, setCategories] = useState();
  const TempCategories = useSelector(
    (state) => state?.categories.categoriesDate
  );

  useEffect(() => {
    setCategories(TempCategories);
  }, [TempCategories]);

  return (
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

      <div className="categories-container">
        {categories?.map((item) => (
          <div key={item.id}>
            <h2 className="category-title" id={`${item.name}`}>
              {item.name}
            </h2>

            {/* <div className="category-description">
              <p>{item.description}</p>
            </div> */}
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
                  <Link to={`/meals/${itemType.id}`} className="linkToMeal">
                    <img className="mealsImage" alt="" src={itemType.image} />
                    <Fab       
                      aria-label="like" sx={{ position:"absolute",top:5 , right:5, width: 20, height:20, backgroundColor:"white"}}
                    >
                      <FavoriteIcon sx={{ width: 15, height: 15 }}/>
                    </Fab>
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
                              <div className="oldPrice">{itemType.price}$</div>
                              <div>
                                <b>
                                  {parseFloat(
                                    itemType.price -
                                      itemType.price * (itemType.discount / 100)
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
        ))}
      </div>
    </div>
  );
}

export default Menu;
