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
const mongopw = process.env.MONGO_ATLAS_PW

console.log(process.env)
//mongoose.connect(`mongodb+srv://fatima:${mongopw}@/diabetes-x1ecb.mongodb.net/users?retryWrites=true&w=majority`, {useNewUrlParser: true});


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
app.get('/data/:data', (req, res) => {
    const userData = req.params.data.split(",");
    const relatives = userData.filter(e => e === 'mother' || e === 'father' || e ===  'siblings')
    const syntoms = userData.filter(e => e === 'blurry' || e === 'tired' || e === 'hungry' || e === 'thirst' || e === 'urination')
   
    const user = new Users({
        _id: new mongoose.Types.ObjectId(),
        date: new Date(),
        gender: userData[0],
        age: userData[1],
        active:userData[2],
        bmi: userData[3],
        pressure: userData[4],
        relatives: relatives,
        syntoms: syntoms
    });

    // user
    //     .save()
    //     .then(result => {
    //         console.log(result)
    //     })
    //     .catch(err => console.log(err));

    //     res.status(201).json({
    //         message: "Handling POST request to users",
    //         createduserData: user
    //     });
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