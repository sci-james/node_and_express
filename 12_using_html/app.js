// include modules
const express = require("express");
const path = require("path");
// const pug = require("pug");

const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static_files')); // For serving static files

//PUG SPECIFIC STUFF
app.set('view engine','pug'); // set the view engine as pug
app.set('views', path.join(__dirname,'views')); // set the views directory



// ENDPOINTS
app.get('/', (req,res)=>{
    const con = "This is the content"
    const params = {title: 'this is swag',content: con};
    res.status(200).render('index.pug',params);
});



//START THE SERVER
app.listen(port,()=>{
    console.log(`The application is running on the port ${port}`);
});

