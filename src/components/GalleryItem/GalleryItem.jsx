import { useState } from 'react';

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
            <button className="Like-button" onClick={() => handleLike(item.id)}>Like</button>
            <p>{item.likes} People love this!</p>
        </>
    )
}

export default GalleryItem; 