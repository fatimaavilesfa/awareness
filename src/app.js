const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3333

const public = path.join(__dirname, '../public')
const view = path.join(__dirname, '../templates/views')
const partial = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', view)
hbs.registerPartials(partial)

app.use(express.static(public))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Diabetes',
        subTitle: 'What is Diabetes',
        name: 'Fatima Aviles',
        info: 'For more information visit : '
        
    })
})
app.get('/consequences', (req, res) => {
    res.render('consequences', {
        title: 'Diabetes',
        subTitle: 'Consequences',
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

app.get('*', (req, res) => {
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