//login page for a donor or adminstrator user
console.log("inside login JS");
/****************Donor login********************************************************/

const donorHandler = async (e) => {
    e.preventDefault();
  
    // Collect values from the login form
    const donorEmail = document.querySelector('#donor-email').value.trim();
    const donorPsw = document.querySelector('#donor-password').value.trim();
    console.log(`Inside donor login ${donorEmail} ${donorPsw}`);
    if (donorEmail && donorPsw) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/donor/login', {
        method: 'POST',
        body: JSON.stringify({ donorEmail, donorPsw }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        //The user has successfully logged in as an administrator redirect to the admin dashboard
        //console.log("sucessfuly logged in JS");
        document.location.replace('/donor');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('.donor-login').addEventListener('submit', donorHandler);
  /*********************************************************************************************/
  
  
  
  
  
  
  /****************Administrator login********************************************************/
  
  const adminHandler = async (e) => {
      e.preventDefault();
    
      // Collect values from the login form
      const adminEmail = document.querySelector('#admin-email').value.trim();
      const adminPsw = document.querySelector('#admin-password').value.trim();
      console.log(`Inside login ${adminEmail} ${adminPsw}`);
      if (adminEmail && adminPsw) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/admin/login', {
          method: 'POST',
          body: JSON.stringify({ adminEmail, adminPsw }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          //The user has successfully logged in as an administrator redirect to the admin dashboard
          
          document.location.replace('/admin');
        } else {
          alert(response.statusText);
        }
      }
    };
  
    document.querySelector('.admin-login').addEventListener('submit', adminHandler);
  /*********************************************************************************************/