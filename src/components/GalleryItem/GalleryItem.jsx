import { useState } from 'react';

// import { BsFillSuitHeartFill } from "react-icons/all";
import { MdFavorite } from 'react-icons/md';

function GalleryItem ({item, handleLike}) {
    const [toggle, setToggle] = useState(true)

    // console.log('toggle', toggle)
    return (
        <>
        {toggle ? 
            <img  onClick={() => setToggle(false)}  src={item.path} />
        :
            <p onClick={() => setToggle(true)} >{item.description} </p>
        }
       
            <button className="Like-button" onClick={() => handleLike(item.id)}> <MdFavorite /></button>
            <p>{item.likes} People love this!</p>
        </>
    )
}

export default GalleryItem; 