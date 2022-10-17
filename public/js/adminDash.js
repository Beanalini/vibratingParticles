/*****************************admin logout******************************************************* */
console.log("inside logout admin dash")

const adminLogout = async () => {
    const response = await fetch('/api/admin/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      //render homepage
      console.log("Administrator has been logged out");
      alert("Logout Successful");
      document.location.replace('/');
      
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', adminLogout);
  /********************************************************************************************** */
  
  // List all the Donors
const donerIDInput = document.querySelector('#donerID')
const fetchDonorBtn = document.querySelector('#fetchdonor')
const fetchUpdateAppointmentBtn = document.querySelector('#update-appointment')
const fetchAddAppointmentBtn = document.querySelector('#add-appointment')
const fetchDeleteBtn = document.querySelector('#delete-donor-account')
const result = document.querySelector('#donorresults')
const fetchhistoryBtn = document.querySelector('#fetchhistory')
const appointmentHistory = document.querySelector('#appointmenthist')

const donorData = function () {
  console.log(donerIDInput.value);

  fetch(`/api/adminDash/donor/${donerIDInput.value}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const formDoner = document.querySelector('#form-doner')

      if (data.length) {
        for (let index = 0; index < data.length; index++) {
          let ul = document.createElement("ul");

          for (const key in data[index]) {
            if (Object.hasOwnProperty.call(data[index], key)) {
              let li = document.createElement('li')
              li.appendChild(document.createTextNode(`${key}: ${data[index][key]}`))
              ul.appendChild(li)
            }
          }

          formDoner.appendChild(ul);
          formDoner.appendChild(document.createElement("hr"));
        }
        }
    })
    .catch((error) => {
      console.log(error)
      console.error('Error:', error);
    });
}

fetchDonorBtn.addEventListener('click', donorData)

// Update donor account to show that they attended appointment

const updateAppointment = function () {
  const donerNumber = document.querySelector('#donerNumber').value
  const date = document.querySelector('#donerDate').value
  const attended = document.querySelector('#has_attended').checked

  fetch(`/api/adminDash/appointment/${donerNumber}`, {
    method: 'PUT',
    body: JSON.stringify({
      date: date,
      attended: attended,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      alert("The update was successful");
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

fetchUpdateAppointmentBtn.addEventListener('click', updateAppointment)


//Add new appointment using Donor number.

const newAppointment = function() {
  const donor_id = document.querySelector('#donerNumberAdd').value;
  const date = document.querySelector('#product').value;
  const time = document.querySelector('#time').value;

  fetch(`/api/adminDash/newAppointment/${donor_id}`, {
    method: 'POST',
    body: JSON.stringify({
      donor_id: donor_id,
      date: date,
      time: time,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    alert("The new appointment has been added");
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

fetchAddAppointmentBtn.addEventListener('click', newAppointment)
    

// console.log(document.querySelector("#add-appointment"));
// document.querySelector("#add-appointment").addEventListener('submit', newFormHandler);

// List all donors and appointment history

// Update donor account to show that they attended appointment


// Get donors by blood type and location


// Delete Donor
const deleteDonor = function () {
  const donorNumberinput = document.querySelector('#deleteDonorNum').value;

  fetch(`/api/adminDash/deleteAccount/${donorNumberinput}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .catch((error) => {
      console.error('Error:', error);
    });
}

fetchDeleteBtn.addEventListener('click', deleteDonor)
