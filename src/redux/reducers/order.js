let initialState = {
    success: false,
    data: [],
    message: "",
  };
  
  const orderReducer = (state = initialState, action) => {
    const { success, data, messages } = action?.payload || {};
    switch (action.type) {
      case 'ADD_ORDER':
        return {...state,
          success,
          data,
          messages,
        };

      case 'CLEAN_ORDER':
        return {...state,
          success: false,
          data:[],
          messages:'',
        };

      default:
        return state;
    }
  };
  
  export default orderReducer;
  