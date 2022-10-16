

/*****************************Donor logout******************************************************* */


const donorLogout = async () => {
    const response = await fetch('/api/donor/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      //render homepage
      console.log("Donor has been logged out");
      alert("Logout Successful");
      document.location.replace('/');
      
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', donorLogout);
  /********************************************************************************************** */
/*****************************Delete Donor******************************************************* */


const donorDelete = async () => {
    const response = await fetch('/api/donorDash/remove', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      //render homepage
      console.lHrog("Donor account has been deleted");
      alert("Your account has been deleted.  Thank you for donating");
      document.location.replace('/');
      
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#deleteAccount').addEventListener('click', donorDelete);
  /********************************************************************************************** */
      
  const baseUrl = "http://localhost:3001/api/donorDash";
  const userDataExtention = "/data";
  const userNextAppointmentExtention = "/nextappointment";
  const userAppointmentHistoryExtention = "/appointmentHist";
  const userBloodDonatedExtention = "/bloodDonated";
  
// let donorData = baseUrl + userDataExtention;
  let donorAppointment = baseUrl + userNextAppointmentExtention;
  let donorHistory = baseUrl + userAppointmentHistoryExtention;
  let donorBlood = baseUrl + userBloodDonatedExtention;

  const appointmentHist = async () => {
    const response = await fetch('/api/donorDash/appointmentHist', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' ,},
    })
    .then((response) => response.json())
    .then((data) =>
    const donorFrame  )
  
    if (response.ok) {
      //render homepage
      res.render('donor', { donors });
      console.log("Data");
      console.log(response);
      console.log(response.statusText);
      console.log(response.donorData);
      alert(response.message);     
      console.log(response.user);
      
      
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#History').addEventListener('click', appointmentHist);
  
  


  








/*!!!!!!!these are not used here they're for the controller section  !!!!!
  // requiring route bits

const router = require('express').Router();
const { response } = require('express');
const donorDash = require('./donorDash');
const donorRoutes = require('./donorRoutes'); */






// Declaring variables for buttons on dashboard

/*var viewdetailsBtn = document.getElementById('view-details');
var updatedetailsBtn = document.getElementById('update-details');
var appthistoryBtn = document.getElementById('appt-history');
var viewnextapptBtn = document.getElementById('view-next-appt');
var bloodrecordBtn = document.getElementById('blood-donor-record');
var userdetailsList = document.getElementById('user-details-list');

// Adding event listeners to buttons

viewdetailsBtn.addEventListener('click', viewDetails());
updatedetailsBtn.addEventListener('click', updateDetails());
appthistoryBtn.addEventListener('click', apptHistory());
viewnextapptBtn.addEventListener('click', viewnextAppt());
bloodrecordBtn.addEventListener('click', bloodRecord());

// functions for fetch requests


const viewDetails = () => {
    if (viewdetailsBtn.clicked === true) {
        fetch('/api/donorDash/data')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    if (items[i] === data.id || data.date_created){
                        continue;
                    }

    let id = document.createElement('li');
    let  donorNum = document.createElement('li');
    let  firstName = document.createElement('li');
    let  lastName = document.createElement('li');
    let  location = document.createElement('li');
    let  contactNum = document.createElement('li');
    let  sex = document.createElement('li');
    let  dob = document.createElement('li');
    let  age = document.createElement('li');
    let  email = document.createElement('li');
    let  bloodType = document.createElement('li');

    id.textContent = data[i].id;
    donorNum.textContent = data[i].donor_num;
    firstName.textContent = data[i].first_name;
    lastName.textContent = data[i].last_name;
    location.textContent = data[i].location;
    contactNum.textContent = data[i].contact_num;
    sex.textContent = data[i].sex;
    dob.textContent = data[i].dob;
    age.textContent = data[i].age;
    email.textContent = data[i].email;
    bloodType.textContent = data[i].blood_type;

    userdetailsList.append(donorNum);
    userdetailsList.append(firstName);
    userdetailsList.append(lastName);
    userdetailsList.append(location);
    userdetailsList.append(contactNum);
    userdetailsList.append(sex);
    userdetailsList.append(dob);
    userdetailsList.append(age);
    userdetailsList.append(email);
    userdetailsList.append(bloodType);
                }
            })}};*/

            
        
    

// Prelim as yet to be made

// updateDetails = () => {
// if (updatedetailsBtn.clicked === true) {
//     fetch ('/api/donorRoutes/', {
//         method: 'PUT',
//         body: JSON.stringify({
//             first_name,
//             last_name,
//             location,
//             contact_num,
//             sex,
//             dob,
//             age,
//             email,
//             blood_type,
//         }),
//         headers: { 'Content-Type': 'application/json' },
        
//     }).then((response) => {
//         return response.json();    
//     })
//     .then((data) => {
//         console.log(data);
//         for (var i = 0; i < data.length; i++) {

//             let  donorNum = document.createElement('li');
//             let  firstName = document.createElement('li');
//             let  lastName = document.createElement('li');
//             let  location = document.createElement('li');
//             let  contactNum = document.createElement('li');
//             let  sex = document.createElement('li');
//             let  dob = document.createElement('li');
//             let  age = document.createElement('li');
//             let  email = document.createElement('li');
//             let  bloodType = document.createElement('li');
        
//             id.textContent = data[i].textContent;
//             donorNum.textContent = data[i].donor_num;
//             firstName.textContent = data[i].firstName;
//             lastName.textContent = data[i].lastName;
//             location.textContent = data[i].location;
//             contactNum.textContent = data[i].contactNum;
//             sex.textContent = data[i].sex;
//             dob.textContent = data[i].dob;
//             age.textContent = data[i].age;
//             email.textContent = data[i].email;
//             bloodType.textContent = data[i].bloodType;
        
//             userdetailsList.append(donorNum);
//             userdetailsList.append(firstName);
//             userdetailsList.append(lastName);
//             userdetailsList.append(location);
//             userdetailsList.append(contactNum);
//             userdetailsList.append(sex);
//             userdetailsList.append(dob);
//             userdetailsList.append(age);
//             userdetailsList.append(email);
//             userdetailsList.append(bloodType);
//        }


//     })
// }};

/*function apptHistory () {
    if (appthistoryBtn.clicked === true) {
        fetch ('/api/donorDash/appointmentHist')
        .then((response) => {
            response.json();
        console.log(response)
    })
    .then((data) => {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            if (items[i] === data.id || data.donor_id || data.date_created){
                continue
            };

    let id = document.createElement('li');
    let  donorNum = document.createElement('li');
    let  firstName = document.createElement('li');
    let  lastName = document.createElement('li');
    let  location = document.createElement('li');
    let  contactNum = document.createElement('li');
    let  sex = document.createElement('li');
    let  dob = document.createElement('li');
    let  age = document.createElement('li');
    let  email = document.createElement('li');
    let  bloodType = document.createElement('li');

    id.textContent = data[i].id;
    donorNum.textContent = data[i].donor_num;
    firstName.textContent = data[i].first_name;
    lastName.textContent = data[i].last_name;
    location.textContent = data[i].location;
    contactNum.textContent = data[i].contact_num;
    sex.textContent = data[i].sex;
    dob.textContent = data[i].dob;
    age.textContent = data[i].age;
    email.textContent = data[i].email;
    bloodType.textContent = data[i].blood_type;

    userdetailsList.append(donorNum);
    userdetailsList.append(firstName);
    userdetailsList.append(lastName);
    userdetailsList.append(location);
    userdetailsList.append(contactNum);
    userdetailsList.append(sex);
    userdetailsList.append(dob);
    userdetailsList.append(age);
    userdetailsList.append(email);
    userdetailsList.append(bloodType);
    })}}


  function viewnextAppt () {
    if (viewnextapptBtn.clicked === true) {
        fetch ('/api/donorDash/appointmentNext')
        .then((response) => {
            response.json();
            console.log(response);
        }).then((data) => {
            for (var i = 0; i < data.length; i++) {
        if (items[i] === data.id || data.donor_id || data.date_created){
            continue
        };

        let date = document.createElement('li');
        let time = document.createElement('li');
        let attended = document.createElement('li');
        let amountDonated = document.createElement('li');

        date.textContent = date

    }};

        
    


function bloodRecord ()  {
    if (bloodrecordBtn.clicked === true) {
        fetch ('./bloodHist')
        .then((response) => {
            response.json();
            console.log(response)
        }
        
      }
    }*/