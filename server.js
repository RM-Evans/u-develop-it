const express = require('express');
const db = require('./db/connection');
const inputCheck = require('./utils/inputCheck');
//dont need to specify index.js, is default
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//prefix allows me to cleanup my requests in apiRoutes
app.use('/api', apiRoutes);








// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});



//start server after DB connection
db.connect(err => {

    if (err) throw err;
    console.log('DATABASE CONNECTED.');

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});




