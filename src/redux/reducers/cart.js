const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const indexItem = state.findIndex(
        (item) => item.categoryMealsId === action.payload.categoryMealsId
      );
      if (indexItem !== -1) {
        state[indexItem].subTotal += parseFloat(action.payload.subTotal);
        state[indexItem].qty += parseInt(action.payload.qty);
        return [...state];
      } else {
        return [
          ...state,
          {
            categoryMealsId: action.payload.categoryMealsId,
            qty: parseInt(action.payload.qty),
            price: parseFloat(action.payload.price),
            subTotal: parseFloat(action.payload.subTotal),
            discount: action.payload.discount,
            image: action.payload.image,
            name: action.payload.name,
            type: action.payload.type,
          },
        ];
      }

    case "DELETE_ITEM":
      const newArr = state.filter(
        (item) => item.categoryMealsId !== action.payload
      );
      state = newArr;
      return state;

    case "DELETE_ALL":
      return [];

    case "DECREASE_ITEM":
      const decItemIndex = state.findIndex(
        (item) => item.categoryMealsId === action.payload.categoryMealsId
      );
      state[decItemIndex].subTotal -= parseFloat(action.payload.subTotal);
      state[decItemIndex].qty--;
      return [...state];

    case "INCREASE_ITEM":
      const incItemIndex = state.findIndex(
        (item) => item.categoryMealsId === action.payload.categoryMealsId
      );
      state[incItemIndex].subTotal += parseFloat(action.payload.subTotal);
      state[incItemIndex].qty++;

      return [...state];

    default:
      return state;
  }
};

export default cartReducer;
