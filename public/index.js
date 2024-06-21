document.querySelector('.js-register-btn').addEventListener('click', async () => {
  const name = document.querySelector('.js-name').value;
  const contactNumber = document.querySelector('.js-contactNumber').value;
  const username = document.querySelector('.js-username').value;
  const emailId = document.querySelector('.js-emailid').value;
  const password = document.querySelector('.js-password').value;

  document.querySelector('.js-name').value = '';
  document.querySelector('.js-contactNumber').value = '';
  document.querySelector('.js-username').value = '';
  document.querySelector('.js-emailid').value = '';
  document.querySelector('.js-password').value = '';

  try {
      const response = await fetch('/Homepage', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              name: name,
              contactNumber: contactNumber,
              username: username,
              emailId: emailId,
              password: password
          })
      });

      const data = await response.json();
      // Optionally, display success message to user
      const {id} = data;
      if(id){
        document.querySelector('.js-good-rslt').innerText = "Registration successful!";
        setTimeout(()=>{
            document.querySelector('.js-good-rslt').innerText = "";
          },2000);
      }
      /* if(msg.name){
        console.log(msg.name);
      }  */    
     
  } catch (error) {
      console.error('Error:', error);
      // Optionally, display error message to user
      document.querySelector('.js-good-rslt').innerText = "Registration failed. Please try again.";
  }
});