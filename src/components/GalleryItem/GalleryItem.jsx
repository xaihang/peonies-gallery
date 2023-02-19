import React, { useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import DeleteItem from '../DeleteItem/DeleteItem';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';

function GalleryItem({
  item,
  deleteItem,
  showDescriptionList,
  toggleDescription,
  handleLike,
  imageList,
}) {

  const handleImageClick = () => {
    toggleDescription();
  };

  

let url = ''

if(item.url.includes('https')){
  url = item.url
}else{
  url = `/images/${item.url}`
}

  return (
    <div className="gallery-item">
      <ImageListItem key={item.id}>
        <img
          src={url}
          alt={item.description}
          onClick={() => toggleDescription(item.id)}
          loading="lazy"
        />
        <ImageListItemBar
          title={
            <Typography className="image-list-item-title" variant="subtitle1" component="div"
            sx={{ fontFamily: "'Dancing Script', cursive" }}>
              {showDescriptionList[item.id] ? item.description : ''}
            </Typography>
          }
          position="top"
          actionIcon={
            <>
              <button
                className="like-button"
                onClick={() => handleLike(item.id)}
              >
                <MdFavorite />
              </button>
              <p className="love-this-counter">{item.likes} people love this!</p>
              <DeleteItem id={item.id} deleteItem={deleteItem} />
            </>
          } 
          sx={{ ".image-list-item-title": { fontSize: 30 } }}
        />
      </ImageListItem>
    </div>
  );
}

export default GalleryItem;
