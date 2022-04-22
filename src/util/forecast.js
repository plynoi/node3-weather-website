const request = require('postman-request')
require('dotenv').config()



const forecast = (latitude, longitude , callback) => {
    const url = `${process.env.WEATHERSTACK_API_URL}?access_key=${process.env.WEATHERSTACK_API_KEY}&query=${latitude},${longitude}&units=m`

    //console.log(url)

    request({ url, json: true}, (error, {body})=>{
    //console.log(response.body.current)

        //console.log(body)
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error) {
            callback('Unable to find location.', undefined)
        }
        else{
            msg = `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degreess out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}`
            // callback(undefined, {
            //     data: msg
            // })
            callback(undefined, msg)
        }
    })
}

module.exports = forecast