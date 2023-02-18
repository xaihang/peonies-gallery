import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';


function App() {
  const [imageList, setImageList] = useState([]);
  const [showDescriptionList, setShowDescriptionList] = useState([]);

  const fetchImages = () => {
    axios
      .get('/gallery')
      .then((response) => {
        setImageList(response.data);
        setShowDescriptionList(Array(response.data.length).fill(false));
      })
      .catch((error) => {
        alert('error getting gallery list');
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const toggleDescription = (id) => {
    setShowDescriptionList((prevState) => {
      const newState = [...prevState];
      newState[id] = !newState[id];
      return newState;
    });
  };

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
        console.log('handleLike', id)
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
        <h1 className="App-title">Petals of Perfection</h1>
        <h2 className="App-title">A Breathtaking Gallery of Peonies</h2> 
      </header>
      <GalleryForm addImage={addImage}/>
      <p></p>
      <GalleryList 
        handleLike={handleLike} 
        imageList={imageList}
        deleteItem={deleteItem}
        toggleDescription={toggleDescription}
        showDescriptionList={showDescriptionList}/>
    </div>
  );
}

export default App;
