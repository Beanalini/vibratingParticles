// List all the Donors
const donerIDInput = document.querySelector('#donerID')
const fetchDonorBtn = document.querySelector('#fetchdonor')
const fetchUpdateAppointmentBtn = document.querySelector('#update-appointment')
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
      // Succuss then show message here with js 
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

fetchUpdateAppointmentBtn.addEventListener('click', updateAppointment)


//Add new appointment using Donor number.

async function newAppointment(event) {
  event.preventDefault();

  const donorNumberinput = document.querySelector('#donor_number').value;
  const dateInput = document.querySelector('#date').value;
  const timeInput = document.querySelector('#time').value;

  const responce = await fetch('/api/adminDash/newAppointment', {
    method: 'POST',
    body: JSON.stringify({
      dish_name,
      description,
      guest_name,
      has_nuts,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

    .then((res) => res.json())
    .then((data) => {
      console.log('Successful POST request:', data);
      return data;
    })
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add appointment');
  }
}

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