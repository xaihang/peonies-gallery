import GalleryItem from "../GalleryItem/GalleryItem";
import { MdFavorite } from "react-icons/md";
import DeleteItem from "../DeleteItem/DeleteItem";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function GalleryList({ imageList, handleLike, deleteItem, toggleDescription, showDescriptionList}) {
  return (
    <ImageList sx={{ width: '100%', height: 'auto' }} variant="woven" cols={3} gap={8}>
      {imageList.map((item) => (
        <ImageListItem key={item.id}>
          <img src={item.url} alt={item.description} onClick={() => toggleDescription(item.id)} loading="lazy" />
          <ImageListItemBar title={showDescriptionList[item.id] ? item.description : ''} position="top" actionIcon={
            <>
              <button className="like-button" onClick={() => handleLike(item.id)}>
                <MdFavorite />
              </button>
              <DeleteItem id={item.id} deleteItem={deleteItem} />
            </>
          } />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default GalleryList;
