import { useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import DeleteItem from '../DeleteItem/DeleteItem';

function GalleryItem ({item, handleLike, deleteItem, showDescriptionList, toggleDescription}) {
    // const [showDescription, setShowDescription] = useState(false)

    // const toggleDescription = (id) => {
    //     setImageList((prevList) =>
    //       prevList.map((item) =>
    //         item.id === id ? { ...item, showDescription: !item.showDescription } : item
    //       )
    //     );
    //   };

    const handleImageClick = () => {
        toggleDescription();
    }

    return (
        <div className="gallery-item">
            <img src={item.url} alt={item.description} onClick={handleImageClick} />
            {showDescriptionList[item.id] && <p>{item.description}</p>}
            <button className="like-button" onClick={() => handleLike(item.id)}>
                <MdFavorite />
            </button>
            <p>{item.likes} people love this!</p>
            <DeleteItem id={item.id} deleteItem={deleteItem} />
        </div>
    )
}

export default GalleryItem;
