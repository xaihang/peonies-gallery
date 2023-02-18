const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//! GET Route - stretch mode:
router.get("/", (req, res) => {
    const sqlText = `SELECT * FROM gallery ORDER BY id DESC;`;
    pool
      .query(sqlText)
      .then((result) => {
          console.log("here are the gallery from the database:", result);
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
      });
  });

//! PUT Route - stretch mode:
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    const sqlText = `UPDATE gallery SET likes = likes + 1 WHERE id = $1`;
    pool.query(sqlText, [galleryId])
        .then(result => {
            console.log('gallery item updated:', result);
            res.sendStatus(200);
        })
        .catch(error => {
            console.log(`Error updating gallery item ${galleryId}`, error);
            res.sendStatus(500);
        });
}); 


//! DELETE - by ID (delete button per specific item)
router.delete("/:id", (req, res) => {
    const idToDelete = req.params.id;
    const sqlText = `DELETE FROM gallery WHERE id=$1;`;
  
    pool
      .query(sqlText, [idToDelete])
      .then((result) => {
        console.log(`Delete image with id=${idToDelete} from the database`);
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
      });
  });

//! POST - stretch mode for form inputs
router.post("/", (req, res) => {
  const item = req.body;
  const sqlText = `INSERT INTO gallery ("url", "description")
  VALUES ($1, $2)`;

  pool
    .query(sqlText, [item.url, item.description])
    .then((dbRes) => {
    res.sendStatus(201);
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })    
})


module.exports = router;


// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// // GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route