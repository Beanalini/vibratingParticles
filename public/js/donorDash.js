/*****************************Donor logout******************************************************* */
console.log("inside logout donor dash")

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