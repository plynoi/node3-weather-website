# Node.js Weather Application Website Example
- version: 1.0.1
- Last update: Dec 2021
- Environment: Windows WSL
- Prerequisite: [Docker and Internet connection](#prerequisite)

## <a id="intro"></a>Introduction

This is an example project from [Udemy](https://www.udemy.com/)'s [The Complete Node.js Developer Course (3rd Edition)](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/) course.

This Node.js web application lets you request the current weather report for the input city. 

The technologies and services under the hood are as follows:
* [Mapbox APIs](https://www.mapbox.com/) for geographic location information
* [Weatherstack API](https://weatherstack.com/) for weather forecast
* [ExpressJS](https://expressjs.com/) web application framework.

## <a id="prerequisite"></a>Prerequisite
1. [Node.js](https://nodejs.org/en/) runtime with [NPM](https://www.npmjs.com/).
2. Internet connection
3. [Mapbox APIs](https://www.mapbox.com/) account
4. [Weatherstack API](https://weatherstack.com/) account.

## <a id="running"></a>How To Run 

1. Create Mapbox API Access Token. Please see more detail on these [How access tokens work](https://docs.mapbox.com/help/getting-started/access-tokens/#how-access-tokens-work) and [Tokens API](https://docs.mapbox.com/api/accounts/tokens/) pages.
2. Create Weatherstack API Access Key. Please see more detail on these [Quickstart](https://weatherstack.com/quickstart) and [API Doc](https://weatherstack.com/documentation) pages.
3. Create a file name ```.env``` with the following content:
    ```
    MAPBOX_API_KEY=<Your Mapbox API Access Token>
    WEATHERSTACK_API_KEY=<Your Weatherstack API Access Token>

    WEATHERSTACK_API_URL=http://api.weatherstack.com/current
    MAPBOX_API_BASE_URL=https://api.mapbox.com
    MAPBOX_API_FORWARD_GEO_URL=/geocoding/v5/mapbox.places
    ```
4. Install application dependencies with the following command.
    ```
    $> npm install
    ```
5. Once the installation process is successful, run the application with the following command
    ```
    $> npm run start
    ```
6. Open the **http://localhost:3000/** URL in your web browser.

## <a id="heroku"></a>Heroku Deployment

The application is hosted on [Heroku](https://www.heroku.com/) Cloud Application Platform at [https://plynoi-weather-application.herokuapp.com/](https://plynoi-weather-application.herokuapp.com/) page.

## <a id="author"></a>Author

Author: Wasin Waeosri ([plynoi.com](https://plynoi.com/))