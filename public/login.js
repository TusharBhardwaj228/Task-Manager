const arr = ['username','password' ];
document.querySelector('.js-login-btn').addEventListener('click', async () => {
  const username = document.querySelector('.js-username').value;
  const password = document.querySelector('.js-password').value;

  document.querySelector('.js-username').value = '';
  document.querySelector('.js-password').value = '';

  document.querySelector('.js-username-error').innerHTML = '';
  document.querySelector('.js-password-error').innerHTML = '';
  try {
      const response = await fetch('/homepage/loginPage', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username: username,
              password: password
          })
      });

      const data = await response.json();
      // Optionally, display success message to user
      const {id} = data;
      if(id){
        document.querySelector('.js-good-rslt').innerText = "login successful!";
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
    
      // Optionally, display error message to user
      document.querySelector('.js-good-rslt').innerText = "Login failed. Please try again.";
  }
});

