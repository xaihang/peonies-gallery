function GalleryItem ({item, handleLike}) {
    return (
        <>
            <img  src={item.path} />
            <button className="Like-button" onClick={() => handleLike(item.id)}>Like</button>
            <p>{item.likes} People love this!</p>
        </>
    )
}

export default GalleryItem; 