import React from "react";
import "./MealDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { addItem} from "../../redux/actions/cart";
import { getCategoryMealsByIdAction } from "../../redux/actions/menu";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Rating } from "@mui/material";

function MealDetails() {
  let { id } = useParams();

  const [categoryMeal, setCategoryMeal] = useState();
  const dispatch = useDispatch();

  const getCategoryMealsById = async () => {
    await dispatch(getCategoryMealsByIdAction(id)).catch((err) => {
      console.error("getCategoryMealsByIdAction", err);
    });
  };
  useEffect(() => {
    getCategoryMealsById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const tempCategoryMeal = useSelector(
    (state) => state?.menu?.categoryMealsById
  );

  useEffect(() => {
    setCategoryMeal(tempCategoryMeal);
  }, [tempCategoryMeal]);

  const PriceAfterDiscount = (price, discount = 10) => {
    const newPrice = price - price * (discount / 100);
    return parseFloat(newPrice).toFixed(2);
  };
  return (
    <div className="MealContainer">
      {/* <Link className="backButtonLink" to={"/menu"}>
        {" "}
        Back to menu
      </Link> */}
      {/* <div className="oneMealCard"> */}
      {categoryMeal?.id ? (
        <div key={categoryMeal.id} className="MealCard">
          <div className="leftCardPart">
            <img className="mealImage" alt="" src={categoryMeal.image} />
            {/* <br /> */}
          </div>
          <div className="rightCardPart">
            <div>
              <h2>
                {categoryMeal?.Meal?.name[0].toUpperCase() +
                  categoryMeal.Meal.name.slice(1)}
              </h2>
              <span>{categoryMeal?.MealType?.name}</span>
              <p>{categoryMeal.description}</p>
              <Rating
                name="size-small"
                defaultValue={2}
                readOnly
                size="small"
              />
            </div>
            <div>
              {categoryMeal.discount > 0 ? (
                <span>
                  <span className="oldPrice">{categoryMeal.price} $ </span>{" "}
                  <span>
                    {PriceAfterDiscount(
                      categoryMeal.price,
                      categoryMeal.discount
                    )}
                    $
                  </span>
                </span>
              ) : (
                <span>{categoryMeal.price} $</span>
              )}
            </div>
            <div>
              <button
                className="addButton"
                onClick={() =>
                  dispatch(
                    addItem(
                      1,
                      categoryMeal.id,
                      1,
                      categoryMeal.price,
                      categoryMeal.price,
                      1,
                      1,
                      categoryMeal.image,
                      categoryMeal?.Meal?.name,
                      categoryMeal?.MealType?.name
                    )
                  )
                }
              >
                {" "}
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="noDetails">Loading ...</div>
      )}
    </div>
  );
}

export default MealDetails;
