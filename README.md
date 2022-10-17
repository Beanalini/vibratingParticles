# Project 2: Interactive Full-Stack Project [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
  
  ## Table of Contents
  * [Set Project Requirements](#set-project-requirements)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Screen Shots](#screen-shots)
  * [Tests](#tests)
  * [Ideas for future development] (#Ideas for future development)
  * [Technologies Used](#technologies-used)  
  * [Questions](#questions)
  * [How to Contribute](#How-to-Contribute)   
  * [License](#license)
  * [Deployment](#deployment)
  
  # Bleed for me
  
  ## Set Project Requirements
  
  - Use Node.js and Express.js to create a RESTful API.
  - Use Handlebars.js as the templating engine.
  - Use MySQL and Sequelize ORM for the database.
  - Have both GET and POST routes for retrieving and adding new data.
  - Be deployed using Heroku (with data).
  - Use at least one new library, package or technology not yet discussed on the course.
  - Have a polished UI.
  - Be responsive.
  - Be interactive.
  - Have a folder structure that meets the MVC paradigm.
  - Protect API keys and sensitive information with environment variables.
  - Have a clean repository that meets quality coding standards.
  - Have a quality README.
   
  ## Project Description
  
  ### MVP 
  
  - We want to provide a prospective blood donor (User 1) with the ability to sign up for a blood bank providing details such as blood type, location, name, email         address, telephone, age, gender and blood type.
  - User 1 will be able to view and update all of the above mentioned details on a dashboard which is displayed following registration or login.
  - Additionally, we want to be able to provide the blood bank's administrative staff (User 2) with the ability to retrieve information regarding blood donors' blood type, last time they gave blood, age and location.
  - User 2 will also be able to update information regarding donors' appointments such as whether they attended the appointment.
 

  #### User Story

User 1 - Given that I want to donate blood to help save lives, I want to be able to sign up to a central blood donor database so that I can be contacted about donating in my area when required so I can help save lives.

User 2 - Given my position as a member of a blood bank's staff, I want to be able to quickly retrieve data regarding people who want to give blood and be able to contact them to donate blood so that I can help to save lives.

 

#### Acceptance Criteria

User 1 - GIVEN I am interested in giving blood,
WHEN I open the application,
THEN I am presented with a selection of information regarding blood donation and I am given the option to sign up to donate blood
WHEN I select the 'register now' button, 
THEN I am redirected to a registration page allowing me to input my data such as name, location, password, contact number, date of birth, age, email and blood type.
WHEN I am redirected to my donor dashboard after signing up,
THEN I want to be presented with my user information such as personal information, appointment history and next appointments, as well as my blood donation record.

User 2 - GIVEN I am part of the staff at a blood bank,
WHEN I open the application I want to be able to 



  ## Installation
  
  - To install the required packages required to run the application, firstly run "npm i" or npm install" in the terminal command line at the root of the directory. This will install all of the required packages for the application including dotenv, express, mysql2, sequelize and handlebars.
  
  ## Usage

- Following installation of the required npm packages, the user should connect to MySQL. To do this, run "mysql -u root [name of user here (usually will be 'root)] -p" in the terminal command line to open up mysql. The user will then be prompted for their mysql password which they need to input in and hit enter. Folowing this, the user will have entered mysql and then should create the database by running "source db/schema.sql". After this the user should get a screenshot like the below. Then run "exit" to exit the mysql interface back to the terminal.

- Once back in the terminal, the user should then run "npm run seed" to feed in the data from the seeds folder into the database.

- Following this, the user should run "npm start" to start the server.

- Following this navigate to http://localhost:3001/ and begin exploring the application. Here you will find you can create a donor account and will then be greeted with the donor dashboard.
  
 - Alternatively, you can use a hard coded donor log in using the seed data in the donorData.json to log in as a donor which is found in the adminData.json in the seeds folder of the repository. 
 
 - The application also provides the support to log in as an administrator - to do this you can use the hard coded administrator data in the "adminData.json" file in the seeds folder of the repository.
 


   

  ## Screenshots

![image](https://user-images.githubusercontent.com/88617634/195981870-0f748b16-0d65-412c-a416-3c2f90cfbb61.png)

![image](https://user-images.githubusercontent.com/88617634/195981885-e1cd7b55-2a7c-477b-bf6f-5847545cd549.png)

 ![image](https://user-images.githubusercontent.com/88617634/196269246-24a5a26e-53f4-44cd-be92-dc2b7d62fcfd.png)
 
 ![image](https://user-images.githubusercontent.com/88617634/196271038-62c90e93-ab0a-459f-919f-a3b583bcf6dc.png)
 
 ![image](https://user-images.githubusercontent.com/88617634/196272239-bd840656-5a37-4671-afcf-96565d5b48d1.png)
 
 ![image](https://user-images.githubusercontent.com/88617634/196272807-350c8d51-858d-45f8-acd6-831529f060f5.png)




  ## Tests
  
  No testing has been enabled for this application.

  ## Technologies Used
  - JavaScript
  - espress JS
  - Node JS
  - MySQL
  - Sequelize ORM
  - MySQL
  - Insomnia REST Client
  - Heroku
  - dotenv npm package
  - express-handlebars
  - handlebars
  - mustache
  - bcrypt
  
  ## Ideas for future development
  
  - If we had more time to implement more features we would implement the following: 
  
  - Integrate a booking system.
  
  - We would secure our administrator access using security tokens
  
  - We would give administrators the ability to generate an automated email to email a donor for the timing of their next donation.
  
    
 
  ## Questions
  If you have any questions regarding this project or contents of this repository, please contact us via:
  
  
  - Debra: https://github.com/Beanalini
  - Joseph: https://github.com/JospehBalshaw
  - Michael: https://github.com/munnos
  - Amal: https://github.com/AmalHirsi
  - Haruka: https://github.com/Haruka08



  
  ## Contributing
  If you would like to contribute to this project you can contact us  at: 
  - Debra: https://github.com/Beanalini
  - Joseph: https://github.com/JospehBalshaw
  - Michael: https://github.com/munnos
  - Amal: https://github.com/AmalHirsi
  - Haruka: https://github.com/Haruka08
  
  

  ## License
  This project is covered under the MIT License 
  
  This project has been generated under license from MIT.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright 2022 Debra Constantinou, Joseph Balshaw, Haruka Hashimoto, Amal Hirsi and Michael Munn
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
  
## Deployment
  
 Github repo - https://github.com/Beanalini/vibratingParticles
 
 Heroku deployment - https://morning-spire-90802.herokuapp.com/

  
