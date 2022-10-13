// requiring route bits

const router = require('express').Router();
const { response } = require('express');
const donorDash = require('./donorDash');
const donorRoutes = require('./donorRoutes');






// Declaring variables for buttons on dashboard

var viewdetailsBtn = document.getElementById('view-details');
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

    const id = document.createElement('li');
    const donorNum = document.createElement('li');
    const firstName = document.createElement('li');
    const lastName = document.createElement('li');
    const location = document.createElement('li');
    const contactNum = document.createElement('li');
    const sex = document.createElement('li');
    const dob = document.createElement('li');
    const age = document.createElement('li');
    const email = document.createElement('li');
    const bloodType = document.createElement('li');

    id.textContent = data[i].textContent;
    donorNum.textContent = data[i].donor_num;
    firstName.textContent = data[i].firstName;
    lastName.textContent = data[i].lastName;
    location.textContent = data[i].location;
    contactNum.textContent = data[i].contactNum;
    sex.textContent = data[i].sex;
    dob.textContent = data[i].dob;
    age.textContent = data[i].age;
    email.textContent = data[i].email;
    bloodType.textContent = data[i].bloodType;

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
            })}};

            
        
    



updateDetails = () => {
if (updatedetailsBtn.clicked === true) {
    fetch ('/api/donorRoutes/', {
        method: 'PUT',
        body: JSON.stringify({
            donor_num,
            first_name,
            last_name,
            location,
            contact_num,
            sex,
            dob,
            age,
            email,
            blood_type,
        }),
        headers: { 'Content-Type': 'application/json' },
        
    }).then((response) => {
        return response.json();    
    })
    .then((data) => {
        for 
    })
}};

function apptHistory () {
    if (appthistoryBtn.clicked === true) {
        fetch ('./api/appointmentHist')
        .then((response) => {
            response.json();
        console.log(response)
    })
    .then((data) => {
        console.log(data);
    })}}


function viewnextAppt () {
    if (viewnextapptBtn.clicked === true) {
        fetch ('./appointmentNext')
        .then((response) => {
            response.json();
            console.log(response)

        })}};
        
    


function bloodRecord ()  {
    if (bloodrecordBtn.clicked === true) {
        fetch ('./bloodHist')
        .then((response) => {
            response.json();
            console.log(response)
        }
        
    )}}};
