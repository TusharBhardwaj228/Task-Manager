const arr = ['name', 'contactNumber', 'username', 'emailId', 'password' ];
document.querySelector('.js-register-btn').addEventListener('click', async () => {
  const name = document.querySelector('.js-name').value;
  const contactNumber = document.querySelector('.js-contactNumber').value;
  const username = document.querySelector('.js-username').value;
  const emailId = document.querySelector('.js-emailId').value;
  const password = document.querySelector('.js-password').value;

  document.querySelector('.js-name').value = '';
  document.querySelector('.js-contactNumber').value = '';
  document.querySelector('.js-username').value = '';
  document.querySelector('.js-emailId').value = '';
  document.querySelector('.js-password').value = '';

  document.querySelector('.js-name-error').innerHTML = '';
  document.querySelector('.js-contactNumber-error').innerHTML = '';
  document.querySelector('.js-username-error').innerHTML = '';
  document.querySelector('.js-emailId-error').innerHTML = '';
  document.querySelector('.js-password-error').innerHTML = '';
  try {
      const response = await fetch('/homepage/registration', {
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
      else if(data.msg){
        arr.forEach((element)=>{
          if(data.msg[element]){
            document.querySelector(`.js-${element}-error`).innerHTML = data.msg[element];
            console.log(data.msg[element]);
          }
          
        })
      }     
     
  } catch (error) {
      console.error('Error:', error);
      // Optionally, display error message to user
      document.querySelector('.js-good-rslt').innerText = "Registration failed. Please try again.";
  }
});
