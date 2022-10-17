

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
      console.log("Donor account has been deleted");
      alert("Your account has been deleted.  Thank you for donating");
      document.location.replace('/');
      
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#deleteAccount').addEventListener('click', donorDelete);
  /********************************************************************************************** */
      

  // const appointmentHist = async () => {
  //   const response = await fetch('/api/donorDash/nextappointment', {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  
  //   if (response.ok) {
  //     //render homepage
  //     console.log("Data");
  //     alert(response.message);     
  //     console.log(response);
      
  //   } else {
  //     alert(response.statusText);
  //   }
  // };
  
  // document.querySelector('#History').addEventListener('click', appointmentHist);

  

  /*function viewnextAppt () {
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

        date.textContent = date;
      }

  };

        
    


function bloodRecord ()  {
    if (bloodrecordBtn.clicked === true) {
        fetch ('./bloodHist')
        .then((response) => {
            response.json();
            console.log(response)
        }
        
      }
    };*/