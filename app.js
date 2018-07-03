const express = require('express');
const app = express();


app.use (express.static('public'));

//our first Route

// app.get('/', (request, response, next)=>{
// console.log(request);
// response.send('<h1>WElcome to Ironack.</h1><br><h2><a href="/about-us">About Us </a></h2> ');

// });


app.get('/', (request, response, next)=>{
    console.log(request);
    response.sendFile( __dirname +'/views/home.html');
    // add html ad check stuff

    
    });


app.get('/about-us', (request, response, next)=>{
    console.log(request);
    response.sendFile(__dirname + '/views/about-us.html');
    
});
        


app.listen(3000, () =>{
    console.log ('My first app is listening on port 3000!')
});