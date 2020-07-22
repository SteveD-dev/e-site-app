import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import shoes from'../../images/shoes.jpg';
import man from'../../images/man.jpg';
import woman from'../../images/woman.jpg';
import cap from'../../images/cap.jpg';
import books from'../../images/books.jpg';




import './directory.styles.scss';


class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections:[
                {
                    id: 1,
                    title: "shoes",
                    imageUrl: `${shoes}`
                    
                },
                {
                    id: 2,
                    title: "cap",
                    imageUrl: `${cap}`
                    
                },
                {
                    id: 3,
                    title: "books",
                    imageUrl: `${books}`
                    
                },
                {
                    id: 4,
                    title: "women",
                    imageUrl: `${woman}`,
                    size: 'large'
        
                },
                {
                    id: 5,
                    title: "men",
                    imageUrl: `${man}`,
                    size: 'large'
                }
            ]
        }
    }

    render(){
        return(
        <div className="directory-menu">
            {
                this.state.sections.map(({id, title, imageUrl, size}) => (
                    <MenuItem
                    key={id}
                    tit={title}
                    imgUrl={ imageUrl}
                    theSize={size}
                     />
                ))
            }
        </div>);
    }
}


export default Directory;