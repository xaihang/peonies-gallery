import { MdFavorite } from 'react-icons/md';
import DeleteItem from '../DeleteItem/DeleteItem';

function GalleryItem ({item, handleLike, deleteItem, showDescriptionList, toggleDescription}) {

    const handleImageClick = () => {
        toggleDescription();
    }

    return (
        <div className="gallery-item">
            <img src={item.url} alt={item.description} onClick={handleImageClick} />
            <div className="description-container">
                <p className="description">{item.description}</p>
            </div>
            <button className="like-button" onClick={() => handleLike(item.id)}>
                <MdFavorite />
            </button>
            <p>{item.likes} people love this!</p>
            <DeleteItem id={item.id} deleteItem={deleteItem} />
        </div>
    )
}

export default GalleryItem;
