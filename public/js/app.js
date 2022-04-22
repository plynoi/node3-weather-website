const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event)=>{

    event.preventDefault()

    const location = search.value

    if(location.length === 0){
        console.log('Please input a location')
        result.innerHTML  = 'Please input a location'
    }else{
        const url = `/weather?address=${location}` //Support both local environment and Heroku
        messageOne.textContent = 'Loading...'
        messageTwo.textContent = ''
        fetch(url).then((response)=>{
            response.json().then(({error, location, forcast} = {})=>{
                if(error){
                    console.log(error)
                    messageOne.textContent = error
                } else {
                    console.log(location)
                    console.log(forcast)
                    messageOne.textContent = `Location: ${location}`
                    messageTwo.textContent = `Forcast: ${forcast}`
                }
            })
        })
    }
   
})