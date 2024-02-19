export const addItem = (
  categoryMealsId,
  qty,
  price,
  subTotal,
  discount,
  image,
  name,
  type
) => {
  return {
    type: "ADD_ITEM",
    payload: {
      categoryMealsId,
      qty,
      price,
      subTotal,
      discount,
      image,
      name,
      type,
    },
  };
};
export const deleteItem = (categoryMealsId) => {
  return {
    type: "DELETE_ITEM",
    payload: categoryMealsId,
  };
};
export const deleteAll = () => {
  return {
    type: "DELETE_ALL",
  };
};

export const addProducts = (product) => {
  return {
    type: "ADD_PRODUCTS",
    payload: product,
  };
};

export const decreaseItem = (categoryMealsId, subTotal) => {
  return {
    type: "DECREASE_ITEM",
    payload: { categoryMealsId, subTotal },
  };
};
export const increaseItem = (categoryMealsId, subTotal) => {
  return {
    type: "INCREASE_ITEM",
    payload: { categoryMealsId, subTotal },
  };
};
