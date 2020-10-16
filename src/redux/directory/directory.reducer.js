import shoes from'../../images/shoes.jpg';
import man from'../../images/man.jpg';
import woman from'../../images/woman.jpg';
import cap from'../../images/cap.jpg';
import jacket from'../../images/jacket.jpg';

const INITIAL_STATE = {
    sections:[
        {
            id: 1,
            title: "shoes",
            imageUrl: `${shoes}`,
            linkURL: "shop/sneakers"
           
            
        },
        {
            id: 2,
            title: "caps",
            imageUrl: `${cap}`,
            linkURL: "shop/hats"
            
        },
        {
            id: 3,
            title: "jackets",
            imageUrl: `${jacket}`,
            linkURL: "shop/jackets"
            
        },
        {
            id: 4,
            title: "women",
            imageUrl: `${woman}`,
            size: 'large',
            linkURL: "shop/women"

        },
        {
            id: 5,
            title: "men",
            imageUrl: `${man}`,
            size: 'large',
            linkURL: "shop/mens"
        }
    ]
}


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}


export default directoryReducer;