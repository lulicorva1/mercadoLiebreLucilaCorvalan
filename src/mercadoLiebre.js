const path = require('path');

const express = require('express');
const app = express();

const pathToPublic = path.join(__dirname, '../public');
const static = express.static(pathToPublic);
app.use(static);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "views/home.html")) 
});

const PORT = 3001;
app.listen(PORT, () =>{
    console.log(`Server ${PORT} funcionando`)
});
