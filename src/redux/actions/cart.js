export const addItem = (orderId, categoryMealsId, qty, price, subTotal, discount, count, image, name, type) => {
    return {
        type: 'ADD_ITEM',
        payload: {
            orderId,
            categoryMealsId,
            qty,
            price,
            subTotal,
            discount,
            count: count,
            image,
            name,
            type
        }

    }
}
export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}
export const deleteAll = () => {
    return {
        type: 'DELETE_ALL',
    }
}

export const addProducts = (product) => {

    return {
        type: 'ADD_PRODUCTS',
        payload: product,
    }
}

export const decreaseCount = (itemId) => {
    return {
        type: 'DECREASE_COUNT',
        payload: itemId,
    }
}
export const increaseCount = (itemId) => {

    return {
        type: 'INCREASE_COUNT',
        payload: itemId,
    }
}

