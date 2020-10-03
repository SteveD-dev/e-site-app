
// utility functions allow us to keep our files clean and organize functions that we may need in multiple files in one location 


export const addItemToCart = (existingCartItem, addedCartItem) => {
    const newExistingCart = existingCartItem.find(el => el.id === addedCartItem.id);

    if(newExistingCart) {
        return existingCartItem.map(el => el.id === addedCartItem.id  ? 
            { ...el, quantity: el.quantity + 1  } 
            : el)
    }

    return  [ ...existingCartItem, {...addedCartItem, quantity: 1}]
}