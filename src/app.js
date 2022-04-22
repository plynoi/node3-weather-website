const path = require('path')
const express = require('express')
const hbs = require('hbs')
// Util for Weather APIs
const geocode = require('./util/geocode')
const forecast = require('./util/forecast')

const app = express()
const port = process.env.PORT || 3000 //Support both local environment and Heroku

// Defines paths for Express confg
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views' , viewPath)

hbs.registerPartials(partialsPath)

app.set('x-powered-by' , 'Express.js')
// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather',
        name: 'Wasin Waeosri'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About Me',
        name: 'Wasin Waeosri'
    })
})

app.get('/help/', (req, res)=>{
    res.render('help', {
        helpText: 'Help Page',
        title: 'Help',
        name: 'Wasin Waeosri'
    })
})

app.get('/weather', (req, res)=>{

    if(!req.query.address){
        return res.send({
            error:' You must provide a location via an address query!!'
        })
    }  

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error){
            //console.error(`Geocode Error: ${error}`)
            return res.send({
                error:`Geocode Error: ${error}`
            })
        }
    
        forecast(latitude, longitude, (error, forecastData)=> {
            if(error){
                //console.error(`Weather Error: ${error}`)
                return res.send({
                    error:`Weather Error: ${error}`
                })
            } 
    
            //console.log(location)
            //console.log(forecastData)
            res.send({
                forcast: forecastData,
                location, //location: location shorthand
                address: req.query.address
            })
    
        })
    
    })

    // res.send({
    //     forcast: '45 degrees',
    //     location: 'Bangkok',
    //     address: req.query.address
    // })
})

app.get('/products', (req,res)=>{

    if(!req.query.search){
        return res.send({
            error:' You must provide a search term'
        })
    }  
    res.send({
        products:[req.query.search]
    })
    
})

app.get('/help/*', (req, res)=>{
    res.render('error', {
        title: 'Error 404',
        errorMessage: 'Help article not found',
        name: 'Wasin Waeosri'
    })
})

app.get('*', (req, res)=>{
    res.render('error', {
        title: 'Error 404',
        errorMessage: 'Page not found',
        name: 'Wasin Waeosri'
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})