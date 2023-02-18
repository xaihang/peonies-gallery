import GalleryItem from "../GalleryItem/GalleryItem";
import { MdFavorite } from "react-icons/md";
import DeleteItem from "../DeleteItem/DeleteItem";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function GalleryList({ imageList, handleLike, deleteItem, toggleDescription, showDescriptionList}) {
  return (
    <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
      {imageList.map((item) => (
        <ImageListItem key={item.id}>
         <img src={item.url} alt={item.description} onClick={() => toggleDescription(item.id)} loading="lazy" />
        {showDescriptionList[item.id] && <p>{item.description}</p>}
          <button className="like-button" onClick={() => handleLike(item.id)}>
            <MdFavorite />
          </button>
          <p>{item.likes} people love this!</p>
          <DeleteItem id={item.id} deleteItem={deleteItem} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default GalleryList;
