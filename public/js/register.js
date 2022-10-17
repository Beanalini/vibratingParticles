const register = document.getElementById('register');

const postNewDonor = async (newDonor) => {

    const response = await fetch('/api/donor/', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json', 
            body: JSON.stringify(newDonor),
        },
        
      });

      if (response.ok) {
        //the donor login process was succesful
        console.log(response.id);
        document.location.replace('/donor');
        alert(response.statusText);
      }
      else {
        alert(response.statusText);
        //document.location.replace('/donor');
      }
        
    }
    

// Listen for when the form is submitted
register.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const location = document.getElementById('location');
    const pwd = document.getElementById('pwd');
    const contact = document.getElementById('contact');
    const gender = document.getElementById('gender');
    const dob = document.getElementById('dob');
    const age = document.getElementById('age');
    const email = document.getElementById('email');
    const bloodType = document.getElementById('blood-type');

    console.log(location);

    // Create a new review object from the input values
    const newDonor = {
      first_name: firstName.value.trim(),
      last_name: lastName.value.trim(),
      location: location.value.trim(),
      password: pwd.value.trim(),
      contact_num: contact.value.trim(),
      sex: gender.value.trim(),
      dob: dob.value.trim(),
      age: age.value.trim(),
      email: email.value.trim(),
      blood_type: bloodType.value.trim(),
    };
    console.log(newDonor);
    // Call our `postReview` method to make a POST request with our `newReview` object.
    postNewDonor(newDonor);
      
  });