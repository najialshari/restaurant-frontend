import {
  GET_CATEGORIES
  
} from "../constants";

let initialState = {
  // data:{
  // categories:[],
  categoriesDate:[]
// }
    
};

const categoriesReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case GET_CATEGORIES:
      console.log("reducer categories :",action?.payload?.data)
      return {
        
          ...state,
          // categories:action?.payload?.data?.name,
          categoriesDate:action?.payload?.data,

        };
      
    default:
      return state;
  }
};

export default categoriesReducer;
