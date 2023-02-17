import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({imageList, handleLike, deleteItem}) {
    return (
        <div className="gallery-list">
            {imageList.map((item) => (
                <GalleryItem 
                    key={item.id} 
                    item={item} 
                    handleLike={handleLike}
                    deleteItem={deleteItem}/> 
            ))}
        </div>
    )
}

export default GalleryList;
