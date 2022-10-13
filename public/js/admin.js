// List all the Donors
const fetchDonorBtn = document.querySelector('#fetchdonor')
const result = document.querySelector('#donorresults')
const fetchhistoryBtn = document.querySelector('#fetchhistory')
const appointmentHistory = document.querySelector('#appointmenthist')

const donorData = function() {
  console.log('inside donordata function')
fetch('/api/adminDash/donorId', {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let div = document.createElement('div')
    let newContent = document.createTextNode(JSON.stringify(data))
    div.appendChild(newContent)
    result.appendChild(div)

  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
  fetchDonorBtn.addEventListener('click', donorData)

  //Add new appointment using Donor number.
  const addAppointment = (appointment) =>
 
  fetch('/api/adminDash/newAppointment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appointment),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);
      return data;
    })
    .catch((error) => {
      console.error('Error in POST request:', error);
    });

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  
  const addAppointment = {
    donor_num: userNameInput.value.trim(),
    date: productInput.value.trim(),
    time: reviewInput.value.trim(),
  };

  postAppointment(newAppointment)
    .then((data) => alert(`New appointment added!`))
    .catch((err) => console.error(err));
});

// List all donors and appointment history



const appointmentHist = function() {
fetch('/api/adminDash/histLoc', {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let div = document.createElement('div')
    let newContent = document.createTextNode(JSON.stringify(data))
    div.appendChild(newAppointment)
    result.appendChild(div)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

//fetchhistoryBtn.addEventListener('click', appointmentHist)

// List all Donors using bloodtype and location 

//const fetchhistoryBtn = document.querySelector('#fetchhistory')
//const appointmentHistory = document.querySelector('#appointmenthist')

const bloodtype = function() {
fetch('/adminData/bloodType', {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let div = document.createElement('div')
    let newContent = document.createTextNode(JSON.stringify(data))
    div.appendChild(alldonors)
    result.appendChild(div)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

// Delete Donor

const deleteMethod = function() {
  fetch('/api/adminDash/donorId',{
  method: 'DELETE',
  headers: {
   'Content-type': 'application/json; charset=UTF-8' 
  },

 })

 fetch(url, deleteMethod) 
 .then(response => response.json())
 .then(data => console.log(data)) 
 .catch(err => console.log(err)) 
}
  //    // if ('Search for blood type') {

  //       const response = await fetch('/api/donor', {
  //         method: 'GET',
  //         body: JSON.stringify({ 
  //             id,
  //             donor_num,
  //             first_name,
  //             last_name,
  //             contact_num,
  //             email,
  //             blood_type 
  //         }),
  //         headers: { 'Content-Type': 'application/json' },
  //       });
  //     }

  //     if ('Blood statistics by location') {
  //       const response = await fetch('/api/donor', {
  //         method: 'GET',
  //         body: JSON.stringify({ 
  //           location,
  //           blood_type,
  //           amount_donated
  //         }),
  //         headers: { 'Content-Type': 'application/json' },
  //       });
  //     }

  //     if ('Add appointment') {
  //       const response = await fetch('/api/donor', {
  //         method: 'POST',
  //         body: JSON.stringify({ 
  //           first_name,
  //           last_name,
  //           date,
  //           location 
  //         }),
  //         headers: { 'Content-Type': 'application/json' },
  //       });
  //     }

  //     if ('Update donor account') {
  //       const response = await fetch('/api/donor', {
  //         method: 'UPDATE',
  //         body: JSON.stringify({ 
  //           id,
  //           donor_num,
  //           first_name,
  //           last_name,     
  //           location,
  //           password,
  //           contact_num,
  //           sex,      
  //           dob,
  //           age,
  //           email,
  //           blood_type
  //         }),
  //         headers: { 'Content-Type': 'application/json' },
  //       });
  //     }
    
  // }


