import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [imageList, setImageList] = useState([]);

  const fetchImages = () => {
    axios
      .get("/gallery")
      .then((response) => {
        setImageList(response.data);
        console.log('RESPONSE ==', response)
      })
      .catch((error) => {
        alert("error getting shopping list");
        console.log(error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  console.log('imageList', imageList);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/goat_small.jpg"/> */}
        {imageList.map((item) => (
          <img 
            key={item.id} 
           src={item.path} />
        ))}
      </div>
    );
}

export default App;
