const register = document.getElementById('register');

const postNewDonor = (newDonor) => 

    fetch('/register', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(newDonor),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log('Successful POST request:', data);
        return data;
      })
      .catch((error) => {
        console.error('Error in POST request:', error);
      });

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
  
    // Call our `postReview` method to make a POST request with our `newReview` object.
    postNewDonor(newDonor)
      .then((data) => alert(`New donor registered! Donor ID: ${data.body.donor_num}`))
      .catch((err) => console.error(err));
  });