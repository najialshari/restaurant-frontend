import React from "react";
import "./MealDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { addItem } from "../../redux/actions/cart";
import { getCategoryMealsByIdAction } from "../../redux/actions/menu";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, IconButton, InputBase, Rating } from "@mui/material";
import { Add, Remove, Share } from "@mui/icons-material";

function MealDetails() {
  let { id } = useParams();

  const categoryMeal = useSelector((state) => state?.menu?.categoryMealsById);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const getCategoryMealsById = async () => {
    await dispatch(getCategoryMealsByIdAction(id)).catch((err) => {
      console.error("getCategoryMealsByIdAction", err);
    });
  };
  useEffect(() => {
    getCategoryMealsById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const subTotal = () => {
    return (
      (categoryMeal.price -
        categoryMeal.price * (categoryMeal.discount / 100)) *
      qty
    ).toFixed(2);
  };
  const newPriceValue = () => {
    return (
      categoryMeal.price -
      (categoryMeal.price * (categoryMeal.discount / 100)).toFixed(2)
    );
  };
  const handleDecrease = () => {
    qty > 1 && setQty(qty - 1);
  };
  const handleAdd = () => {
    setQty(qty + 1);
  };
  return (
    <div className="MealContainer">
      {categoryMeal?.id ? (
        <div key={categoryMeal.id} className="MealCard">
          <div className="leftCardPart">
            <img className="mealImage" alt="" src={categoryMeal.image} />
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
            <div className="price">
              {categoryMeal.discount > 0 ? (
                <div>
                  <span
                    style={{
                      marginRight: ".5rem",
                      lineHeight: "1rem",
                      color: "gray",
                      marginTop: "auto",
                    }}
                  >
                    <s>{categoryMeal.price}$</s>
                  </span>
                  <span className="priceInteger">
                    {Math.floor(newPriceValue())}
                  </span>
                  <span className="priceFraction">
                    {((newPriceValue() * 100) % 100).toString().padEnd(2, "0")}$
                  </span>
                </div>
              ) : (
                <div>
                  <span className="priceInteger">
                    {Math.floor(newPriceValue())}
                  </span>
                  <span className="priceFraction">
                    {((newPriceValue() * 100) % 100).toString().padEnd(2, "0")}$
                  </span>
                </div>
              )}
            </div>
            <div>
              <IconButton
                aria-label="decrease"
                sx={{
                  width: 25,
                  height: 25,
                  backgroundColor: "#f7f7f7",
                }}
                onClick={handleDecrease}
              >
                <Remove />
              </IconButton>
              <InputBase
                onChange={(e) =>
                  !isNaN(Number(e.target.value)) &&
                  Number(e.target.value) > 0 &&
                  setQty(Number(e.target.value))
                }
                value={qty}
                inputProps={{
                  style: {
                    textAlign: "center",
                    width: "40px",
                    height: "20px",
                    border: "1px solid #e1e1e1",
                    borderRadius: "5px",
                    margin: "0 5px",
                    color: "black",
                  },
                }}
              />
              <IconButton
                aria-label="add"
                sx={{
                  width: 25,
                  height: 25,
                  backgroundColor: "#f7f7f7",
                }}
                onClick={handleAdd}
              >
                <Add />
              </IconButton>
              <IconButton
                aria-label="share"
                sx={{
                  width: 25,
                  height: 25,
                  backgroundColor: "#f7f7f7",
                  marginLeft: "auto",
                }}
              >
                <Share fontSize="small" />
              </IconButton>
            </div>
            <div>
              <button
                className="addToCart"
                onClick={() =>
                  dispatch(
                    addItem(
                      categoryMeal.id,
                      qty,
                      categoryMeal.price,
                      subTotal(),
                      categoryMeal.discount,
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
              <button className="orderNow" onClick={() => null}>
                {" "}
                Order Now
              </button>
              <button className="addToFav" onClick={() => null}>
                {" "}
                Add to favorite
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">
          Loading... <CircularProgress size={"2rem"} />
        </div>
      )}
    </div>
  );
}

export default MealDetails;
