import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
// import { getCategoryMealsAction } from "../../redux/actions/menu";
import { getCategoriesAction } from "../../redux/actions/categories";
import { useState } from "react";

function Menu() {
  // const categoryTypes = ["Breackfast",
  //  "Dinner",
  //  "Launch",
  //  "Meat",
  //  "Drinks"];
  // const categoryTypes = [{name:"Breackfast",description:""},
  // {name: "Dinner",description:""},
  // {name: "Launch",description:""},
  // {name: "Meat",description:""},
  // {name: "Drinks",description:""}];

  const dispatch = useDispatch();
  const getCategories = async () => {
    await dispatch(getCategoriesAction())
      .then(() => {
        console.log("getCategory", "success");
      })
      .catch((err) => {
        console.error("getCategory", err);
      });
  };

  useEffect(() => {
    getCategories();
    //eslint-disable-next-line
  }, []);

  const [categories, setCategories] = useState();
  const TempCategories = useSelector(
    (state) => state?.categories.categoriesDate
  );

  useEffect(() => {
    setCategories(TempCategories);
  }, [TempCategories]);

  console.log("get Categories", categories);
  // const categories = [
  //   {id:"0",category:"Breackfast",price:"105.95",discount:"10",description:"Nestle leeks, potato and capers around salmon fillets to make this easy traybake for two. It's great as an midweek meal, or for a more romantic occasion",meal:"Fish1",type:"person",image:"https://pngimage.net/wp-content/uploads/2018/06/mariscada-png-2.png",rating:{rate:3.9,"count":120}},
  //   {id:"1",category:"Dinner",price:"120.85",discount:"0",description:"Nestle leeks, potato and capers around salmon fillets to make this easy traybake for two. It's great as an midweek meal, or for a more romantic occasion",meal:"Fish2",type:"person",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aO8yNH-p1gxE2IXCggBXCJrk16GsLkzY8qsK04B4ogdlQoK387oj55MCzuOcYEm5D6Q&usqp=CAU",rating:{rate:3.9,"count":120}},
  //   {id:"2",category:"Launch",price:"50",discount:"0",description:"Nestle leeks, potato and capers around salmon fillets to make this easy traybake for two. It's great as an midweek meal, or for a more romantic occasion",meal:"Fish3",type:"person",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8p04VZEuStLPP5qnNFr0MfbOGSGfDxS4LyNbmxdQHdHTNKLsK2xoORajNBny7mu06yc&usqp=CAU",rating:{rate:3.9,"count":120}},
  //   {id:"3",category:"Drinks",price:"80.9",discount:"20",description:"Nestle leeks, potato and capers around salmon fillets to make this easy traybake for two. It's great as an midweek meal, or for a more romantic occasion",meal:"Fish4",type:"person",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquz_9qGbLANmt1hXrRSVW7pzjqD5j0v7LFND5-Zvepcif-KgMBq5ZiS_CjhNxO88OaBI&usqp=CAU",rating:{rate:3.9,"count":120}},

  // const PriceAfterDiscount=(price,discount)=>{
  //   const newPrice=(price-(price*(discount/100)));
  //   return parseFloat(newPrice).toFixed(2)
  // }
  return (
    <div className="categories" id="menuCategories">
      <ul>
        {categories?.map((item) => (
          <li key={item.id}>
            <a id="categoriesType" href={`#${item.name}`}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="categories-container">
        {categories?.map((item) => (
          <div className="category-container" key={item.id}>
            <h2 className="category-title" id={`${item.name}`}>
              {item.name}:
            </h2>

            <div className="category-description">
              <p>{item.description}</p>
            </div>
            <div className="category-cards">
              {item.CategoryMeals?.map((itemType) => (
                <motion.div
                  initial={{
                    x: "150vw",
                    transition: { type: "spring", duration: 2 },
                  }}
                  animate={{
                    x: 0,
                    transition: { type: "spring", duration: 2 },
                  }}
                  key={itemType.id}
                  className="mealsCard"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link to={`/meals/${itemType.id}`} className="linkToMeal">
                    <img className="mealsImage" alt="" src={itemType.image} />
                    <div className="cardDetails">
                      <h2 className="mealName">{itemType.Meal?.name[0].toUpperCase() + itemType.Meal?.name.substr(1)}</h2>
                      <label>{itemType.MealType?.name}</label>
                      {itemType.discount > 0 ? (
                        <p className="mealsprice">
                          <span className="oldPrice">{itemType.price} $ </span>{" "}
                          <span>
                            {" "}
                            {/* <b> {PriceAfterDiscount(itemType.price)} $</b></span></p>: */}
                            <b>
                              {" "}
                              {parseFloat(
                                itemType.price -
                                  itemType.price * (itemType.discount / 100)
                              ).toFixed(2)}{" "}
                              $
                            </b>
                          </span>
                        </p>
                      ) : (
                        <p className="mealsprice">
                          <b>{itemType.price} $</b>
                        </p>
                      )}
                    </div>
                    {/* <br /> */}
                    <p className="moreDetailsButton">More details</p>
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
