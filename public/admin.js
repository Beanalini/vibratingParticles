const selectedAction = async (event) => {
    event.preventDefault();
  
    const action = document.querySelector('#actionList').value;
  
    if ('Search for donor') {
      const response = await fetch('/api/donor', {
        method: 'GET',
        body: JSON.stringify({ 
            id,
            donor_num,
            first_name,
            last_name,
            contact_num,
            email, 
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
      if ('Search for blood type') {
        const response = await fetch('/api/donor', {
          method: 'GET',
          body: JSON.stringify({ 
              id,
              donor_num,
              first_name,
              last_name,
              contact_num,
              email,
              blood_type 
          }),
          headers: { 'Content-Type': 'application/json' },
        });
      }

      if ('Blood statistics by location') {
        const response = await fetch('/api/donor', {
          method: 'GET',
          body: JSON.stringify({ 
            location,
            blood_type,
            amount_donated
          }),
          headers: { 'Content-Type': 'application/json' },
        });
      }

      if ('Add appointment') {
        const response = await fetch('/api/donor', {
          method: 'POST',
          body: JSON.stringify({ 
            first_name,
            last_name,
            date,
            location 
          }),
          headers: { 'Content-Type': 'application/json' },
        });
      }

      if ('Update donor account') {
        const response = await fetch('/api/donor', {
          method: 'UPDATE',
          body: JSON.stringify({ 
            id,
            donor_num,
            first_name,
            last_name,     
            location,
            password,
            contact_num,
            sex,      
            dob,
            age,
            email,
            blood_type
          }),
          headers: { 'Content-Type': 'application/json' },
        });
      }
    
  };