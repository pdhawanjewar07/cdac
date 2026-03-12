const username_el: HTMLInputElement = document.getElementById("username") as HTMLInputElement;
const password_el: HTMLInputElement = document.getElementById("password") as HTMLInputElement;


var username: string, password: string;

function check_login(): void{
  username = username_el.value;
  password = password_el.value;
  console.log(username);
  console.log(password);

  // validate username
  if (username == ""){
    alert("Username is empty!");
    return;
  }

  // validate password
  if (password == ""){
    alert("Password is empty!");
    return;
  }
  if (password.length < 8 || password.length > 12){
    alert("Password length must be between 8-12 characters!");
    return;
  }
  
  // Check username and password for access
  if (username == "iet" && password == "iet12345"){
    window.location.href = "/home";
  }
  else{
    alert("Username or password not valid!");
  }

}