
// utility functions allow us to keep our files clean and organize functions that we may need in multiple files in one location 


export const addItemToCart = (cartItems, cartToAdd) => {
    const newCartItem = cartItems.find(el => el.id === cartToAdd.id);

    if(newCartItem) {
        return cartItems.map(el => el.id === cartToAdd.id  ? 
            { ...el, quantity: el.quantity + 1  } 
            : el)
    }

    return  [ ...cartItems, {...cartToAdd, quantity: 1}]
};





export const removeItemFromCart = (cartItems , cartItemToRemove) => {
    const removeItem = cartItems.find(el => el.id === cartItemToRemove.id);

    if(removeItem.quantity === 1){
        return cartItems.filter(el => el.id !== cartItemToRemove.id)
    }

    return cartItems.map(el => el.id === cartItemToRemove.id ? {...el, quantity: el.quantity - 1} : el)
}