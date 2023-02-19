import React, { useState, useEffect } from 'react';

export default function GalleryMutlerForm({ uploadImage }) {
  const [file, setFile] = useState();
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) {
      alert('Do not leave input fields blank!');
      return;
    }

    uploadImage(file, description);
    setFile(null);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        filename={file}
        onChange={(e) => setFile(e.target.files[0])}
        type="file"
        accept="image/*"
      ></input>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder={'upload image description'}
      ></input>
      <button type="submit">upload image</button>
    </form>
  );
}
