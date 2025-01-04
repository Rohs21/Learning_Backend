 const express  =  require('express');
const app = express();

const port = 3000;   


// app.get('/', (req, res) => {
//     res.send('Get Requeset Mil gyi bhai')
// })


app.post('/items', (req,res)=>{
    res.send("Post Request mil gyi bhai");
})

app.put('/items/:id', (req,res)=>{
    res.send("Put Request Mil gyi bhai");
})

app.delete('/items/:id', (req,res)=>{
    res.send("delete Request Mil gyi bhai");
})

// sending file in response
app.get('/', (req, res) => {
    res.sendFile('./dummy.html', {root:__dirname})
})


//start your server
app.listen(port, ()=>{
    console.log("Application Started");
})


