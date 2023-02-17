import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({imageList, handleLike}) {
    return (
        <div className="gallery-list">
            {imageList.map((item) => (
                <GalleryItem 
                    key={item.id} 
                    item={item} 
                    handleLike={handleLike}/> 
            ))}
        </div>
    )
}

export default GalleryList;
