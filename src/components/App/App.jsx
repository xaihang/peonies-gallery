import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

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
    axios
      .put(`/gallery/like/${id}`)
      .then(() => {
        fetchImages();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addImage = (item) => {
    console.log('in addImage...', item)
    axios
      .post("/gallery", item)
      .then(() => {
        fetchImages();
      })
      .catch((err) => {
       console.error(err)
      })
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Petals of Perfection: A Breathtaking Gallery of Peonies</h1>
      </header>
      <GalleryForm addImage={addImage}/>
      <p></p>
      <GalleryList 
        handleLike={handleLike} 
        imageList={imageList}
        deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
