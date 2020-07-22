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
                    imageUrl: `${shoes}`,
                    linkURL: ""
                   
                    
                },
                {
                    id: 2,
                    title: "cap",
                    imageUrl: `${cap}`,
                    linkURL: "caps"
                    
                },
                {
                    id: 3,
                    title: "books",
                    imageUrl: `${books}`,
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
    }

    render(){
        return(
        <div className="directory-menu">
            {
                this.state.sections.map(({id, title, imageUrl, size, linkURL}) => (
                    <MenuItem
                    key={id}
                    tit={title}
                    imgUrl={ imageUrl}
                    theSize={size}
                    linkUr={linkURL}
                     />
                ))
            }
        </div>);
    }
}


export default Directory;