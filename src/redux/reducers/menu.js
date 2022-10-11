import {
  GET_CATEGORIES,
  GET_CATEGORY_MEALS,
  GET_MENU_CATEGORY_MEALS_BY_ID
  
} from "../constants";

let initialState = {
  categories:[],
  categoriesDate:[],
  categoryMeals:[{}],
  categoryMealsById:{}
  
};

const menuReducer = (state = initialState, action) => {
  let newState= {};
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        
          ...state.data,
          categories:action?.payload?.data.name,
          categoriesDate:action?.payload?.data,

        };
      
    case GET_CATEGORY_MEALS:
      return {
        ...state.data,
        categoryMeals:action?.payload?.data
      };

    case GET_MENU_CATEGORY_MEALS_BY_ID:
      return {
  
        // ...state.data,
        categoryMealsById:action?.payload?.data
      };
    
    default:
      return state;
  }
};

export default menuReducer;
