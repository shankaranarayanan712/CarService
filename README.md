# Project Title
Car Models
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
## Note :
   Make sure you are in main branch.
   If you are not in main branch use 
   $ git checkout main 
   to checkout to main branch.
## Install
    $ cd YOUR_PATH/backend
    $ cd YOUR_PATH/frontend
    $ npm install
## Running the project

    $ npm start

## Testing the project

    $ npm test

## FrontEnd Overview

1. The application will be started with Landing screen

2. The Landing screen Loads for a second until it gets the car  details

3. Then it is presented with Data in Table format which contains Actions, Name

4. Clicking on Action(with icon'A') will get the information about the block

5. It makes an APi call to fetch the data and opens a Modal which shows the details of the car

6. The Table provides functionalities like, sorting on columns, and searching6

7. Table Pagination is handled based on user input

8. The Table has an actionable column(1st column) . 
    This actionable column fetches the block details  based on selected row

9. Clicking on the arrow expands the accordion which inturn shows the details at the block level

10. Unit Testing is done using jest


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

9. Unit testing is created using Jest and supertest





















