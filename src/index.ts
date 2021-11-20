import express from 'express';
import path from 'path';
import _ from 'underscore'

const app = express();
const port = 3000;
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/objectives', (req, res) => {
    res.render('learningObjectives')
})

app.get('/tutorial', (req, res) => {
    res.render('tutorial')
})

app.get('/history', (req, res) => {
    res.render('history')
})

app.get('/analytical', (req, res) => {
    res.render('analytical')
})

app.get('/demo', (req, res) => {
    res.render('demo')
})

app.get('/resource', (req, res) => {
    res.render('resource')
})

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
})