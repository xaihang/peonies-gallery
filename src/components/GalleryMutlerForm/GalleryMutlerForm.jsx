import React, { useState, useEffect } from 'react';


export default function GalleryMutlerForm({uploadImage}) {
    const [file, setFile] = useState()
    const [showDescriptionList, setShowDescriptionList] = useState([]);

  return (
    <form onSubmit={() => uploadImage(file)}>
    <input
      filename={file} 
      onChange={e => setFile(e.target.files[0])} 
      type="file" 
      accept="image/*"
    ></input>
    <input
      value={description}
      onChange={e => setDescription(e.target.value)} 
      type="text"
    ></input>
    <button type="submit">Submit</button>
  </form>   
  )
}
