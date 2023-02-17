import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [imageList, setImageList] = useState([]);

  const fetchImages = () => {
    axios
      .get('/gallery')
      .then((response) => {
        setImageList(response.data);
      })
      .catch((error) => {
        alert('error getting shopping list');
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  console.log('imageList', imageList);

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

      {imageList.map((item) => (
        <div key={item.id}>
          <img  src={item.path} />
          <button className="Like-button" onClick={() => handleLike(item.id)}>Like</button>
          <p>{item.likes} People love this!</p>
        </div>
      ))}
    </div>
  );
}

export default App;
