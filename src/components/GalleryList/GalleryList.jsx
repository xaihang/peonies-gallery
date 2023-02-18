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
        <GalleryItem key={item.id}
        item={item}
        handleLike={handleLike} 
        imageList={imageList}
        deleteItem={deleteItem}
        toggleDescription={toggleDescription}
        showDescriptionList={showDescriptionList}
        />
      ))}
    </ImageList>
  );
}

export default GalleryList;
