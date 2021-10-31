# Project Title
Car Service
---
## Requirements

For development, you will need Node.js and MongoDB installed in your system a node global package, npm , installed in your environment.
- #### Install Node.js in your system
   You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
---

## Install
    $ cd YOUR_PATH/backend
    $ npm install
## Running the project

    $ npm start

## Testing the project

    $ npm test

## Service Overview

1. This Car service is a node (with Express) microservice that runs on port 8080

2. It is built with Service architecture wherein the Layers are segregated into Controller, Service and
   external service to get information outside of application

3. Overall One API's is exposed from this service which is of method get and endpint is 'car/model' 

4. Any junk endpoints apart from the one exposed (get: "api/car/model") will throw error asking the user to request      
   for valid endpoint

5. Since only get operation is supported by this API, a middleware validation is also put in place.
   This will ensure no 

6. The crawler and web scraping is achieved by cheerio package

7. Both Promises and Async/await operations are used in this service

8. Code is linted using eslint to enforce consistency and styling. The linting is adopted as per Airbnb standards




















