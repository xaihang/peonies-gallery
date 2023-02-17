CREATE TABLE "images" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR(300) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "likes" INTEGER);


INSERT INTO "images" ("url", "description", "likes" )
VALUES 
('https://images.unsplash.com/photo-1557926005-012bd4382a0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb25pZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60
', 'pink peonies', 0),
('https://plus.unsplash.com/premium_photo-1664471481538-17c0f0d8847a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvbmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60
', 'blush peonies', 0),
('https://images.unsplash.com/photo-1560256608-43f0b6f7588e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVvbmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60
', 'light pink peonies', 0),
('https://images.unsplash.com/photo-1435783459217-ee7fe5414abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb25pZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60
', 'summer peonies', 0),
('https://images.unsplash.com/photo-1593501712755-a488ed71e96b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlb25pZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60
', 'afternoon peonies', 0),
('https://images.unsplash.com/photo-1594001220757-b5c4fdbd3978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHBlb25pZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60
', 'morning peonies', 0);


-- GET and organized by id
SELECT * FROM "images" ORDER BY "id";







