import express from 'express';
import path from 'path';
import _ from 'underscore'

const app = express();
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
// app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})