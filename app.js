const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'homepage.html'))
 })

 app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','homepage.html'))
})

app.get('/calculator', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calculator.html'))
})

app.listen(PORT, () => {
    console.log('server is listening')
})
