// REMEMBER: return a promise for async and await to work. otherwise it has no effect.

/* 
For random integer between min and max(inclusive)
Math.floor(Math.random() * (max - min + 1)) + min
*/

function user_login(){
  //
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 2)); // get either 0 or 1 i.e.,  login fail / login success
    }, 1_000);
  })
}


async function start_user_auth(){
  //
  let user_logged_in = await user_login();

  if(!user_logged_in){
    console.log("FAILURE: user login failed!");
    return;
  }
  
  console.log("SUCCESS: user logged in!");
}

//
start_user_auth();
