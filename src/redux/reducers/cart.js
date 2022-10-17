

const cartReducer = (state = [], action) => {
    switch (action.type) {

        case 'ADD_ITEM':
            const indexItem = state.findIndex((item) => item.categoryMealsId === action.payload.categoryMealsId)
            if (indexItem !== -1) {
                state[indexItem].count += action.payload.count
                state[indexItem].subTotal += parseFloat(action.payload.price)
                state[indexItem].qty += parseInt(action.payload.qty)
                return [...state]
            } else {
                return [
                    ...state, {
                        // orderId: action.payload.orderId, 
                        categoryMealsId: action.payload.categoryMealsId, 
                        qty: parseInt(action.payload.qty),
                        price: parseFloat(action.payload.price),
                        subTotal: parseFloat(action.payload.price), 
                        discount: action.payload.discount, 
                        count: action.payload.count,
                        image: action.payload.image,
                        name: action.payload.name,
                        type: action.payload.type
                    }
                ]
            }

        case 'DELETE_ITEM':
            const newArr = state.filter((item) => item.categoryMealsId !== action.payload)
            state = newArr
            return state

        case 'DELETE_ALL':
            return []

        case 'DECREASE_COUNT':
            const decItemIndex = state.findIndex((item) => item.id === action.payload)
            state[decItemIndex].count--
            return [...state]

        case 'INCREASE_COUNT':
            const incItemIndex = state.findIndex((item) => item.id === action.payload)
            state[incItemIndex].count++
            return [...state]

        default:
            return state

    }

}

export default cartReducer