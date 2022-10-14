// List all the Donors
const fetchDonorBtn = document.querySelector('#fetchdonor')
const result = document.querySelector('#donorresults')
const fetchhistoryBtn = document.querySelector('#fetchhistory')
const appointmentHistory = document.querySelector('#appointmenthist')

const donorData = function () {
  console.log('inside donordata function')
  fetch('/api/adminDash/donorId', {
    method: 'GET',
    body: JSON.stringify,
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
      console.log(error)
      console.error('Error:', error);
    });
}

fetchDonorBtn.addEventListener('click', donorData)

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

const appointmentHist = function () {
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
      console.log(error);
      console.error('Error:', error);
    });
}

// Update donor account to show that they attended appointment


// Get donors by blood type and location

const bloodtype = function () {
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

async function deleteDonor(donor_number) {
  const deleted = await fetch('/deleteAccount', {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },

  })

  async function removeDonor() {
    ocument.getElementById("delete-donor-account").addEventListener("click", removeDonor)

    renderTodo()
  };
}