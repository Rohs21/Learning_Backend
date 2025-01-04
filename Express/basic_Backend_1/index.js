 const express  =  require('express');
const app = express();

const port = 3500;   

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//start your server
app.listen(port, ()=>{
    console.log("Application Started");
})