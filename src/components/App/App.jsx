import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import DeleteItem from '../DeleteItem/DeleteItem';

// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

function App() {
  const [imageList, setImageList] = useState([]);

  const fetchImages = () => {
    axios
      .get('/gallery')
      .then((response) => {
        setImageList(response.data);
      })
      .catch((error) => {
        alert('error getting gallery list');
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);


  const deleteItem = (id) => {
    axios
      .delete(`/gallery/${id}`)
      .then(() => {
        fetchImages();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLike = (id) => {
    console.log("in handleLike");
    axios
      .put(`/gallery/like/${id}`)
      .then(() => {
        fetchImages();
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <GalleryList 
        handleLike={handleLike} 
        imageList={imageList}
        deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
