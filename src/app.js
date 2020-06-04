const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3333

const public = path.join(__dirname, '../public')
const view = path.join(__dirname, '../templates/views')
const partial = path.join(__dirname, '../templates/partials')

const mongoose = require('mongoose')
const Users = require('./dbmodel')

const MONGODB_URI = process.env.MONGODB_URI.slice(1, -1)

app.use(express.json());


console.log(MONGODB_URI)
mongoose.connect(MONGODB_URI || 'mongodb://localhost/users_data');

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected')
})

app.set('view engine', 'hbs')
app.set('views', view)
hbs.registerPartials(partial)

app.use(express.static(public))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Diabetes',
        subTitle: 'What is Diabetes?',
        name: 'Fatima Aviles',
        info: 'For more information visit : '
        
    })
})
app.get('/consequences', (req, res) => {
    res.render('consequences', {
        title: 'Diabetes',
        subTitle: 'What long-term problems may affect people with diabetes?',
        name: 'Fatima Aviles',
        info: 'For more information visit : '
        
    })
})


app.get('/prevention', (req, res) => {
    res.render('prevention', {
        title: 'Diabetes',
        subTitle: 'How to prevent',
        name: 'Fatima Aviles',
        info: 'For more information visit : '
        
    })
})

app.get('/test', (req, res) => {
    res.render('test', {
        title: 'Diabetes',
        subTitle: 'Take a Test',
        name: 'Fatima Aviles',
        info: 'For more information visit : '
    })
})
app.post('/data', (req, res) => {
    console.log(req.body)
    const userData = req.body
   
    const user = new Users({
        _id: new mongoose.Types.ObjectId(),
        date: new Date(),
        ...userData
    });

    user
        .save()
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    res.end('holis')
        
})

app.get('/*', (req, res) => {
    res.render('404', {
        title: '404',
        subTitle: 'Page not found',
        name: 'Fatima Aviles',
        info: 'More information'
        
    })
})


app.listen(port, () => {
    console.log(`server is up on port ${port}`)
})