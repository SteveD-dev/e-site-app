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
            linkURL: ""
           
            
        },
        {
            id: 2,
            title: "caps",
            imageUrl: `${cap}`,
            linkURL: "caps"
            
        },
        {
            id: 3,
            title: "jackets",
            imageUrl: `${jacket}`,
            linkURL: ""
            
        },
        {
            id: 4,
            title: "women",
            imageUrl: `${woman}`,
            size: 'large',
            linkURL: ""

        },
        {
            id: 5,
            title: "men",
            imageUrl: `${man}`,
            size: 'large',
            linkURL: ""
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