const request = require('postman-request')
require('dotenv').config()

const geocode = (address, callback) => {
    const url = `${process.env.MAPBOX_API_BASE_URL}${process.env.MAPBOX_API_FORWARD_GEO_URL}/${encodeURIComponent(address)}.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`

    //console.log(url)

    request({ url, json: true}, (error, {body}) => {
        //console.log(body)
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.message == 'Forbidden' || body.message === 'Not Authorized - Invalid Token'){
            callback(`${body.message}. Try another search.`, undefined)
        }else if(body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        }else {
            const latitude = body.features[0].center[1]
            const longitude  = body.features[0].center[0]
            const place = body.features[0].place_name
            callback(undefined, {
                latitude,
                longitude ,
                location: place
            })
        }
    })
}

module.exports = geocode