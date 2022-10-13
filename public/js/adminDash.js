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