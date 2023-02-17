import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList ({imageList, handleLike}) {
    return (
        <>
            {imageList.map((item) => (
            <GalleryItem 
                key={item.id} 
                item={item} 
                handleLike={handleLike}/> 
             ))}
        </>
    )
}

export default GalleryList; 