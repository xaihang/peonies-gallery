import { useState } from 'react';
import { MdFavorite } from 'react-icons/md';

function GalleryItem ({item, handleLike}) {
    const [showDescription, setShowDescription] = useState(false)

    const toggleDescription = () => {
        setShowDescription(!showDescription)
    }

    return (
        <div className="gallery-item">
            <img src={item.url} onClick={toggleDescription} alt={item.description} />
            {showDescription && <p onClick={toggleDescription}>{item.description}</p>}
            <button className="like-button" onClick={() => handleLike(item.id)}>
                <MdFavorite />
            </button>
            <p>{item.likes} people love this!</p>
        </div>
    )
}

export default GalleryItem;
