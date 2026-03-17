// Instead of normal javascript imports like
// const axios = require("axios");

// EC imports are preffered in typescript
import axios, { AxiosResponse } from "axios";

const req_url: string = "https://fake-json-api.mock.beeceptor.com/users";

// METHOD 1 - Promise
/*  >> Notes:
- Can lead to callback hell if you chain multiple async operations.
*/
let response_promise: Promise<any> = axios.get(req_url);
response_promise.then(response => {
  //
  console.log(response.data);
})
.catch(error => {
  console.log(error);
})


// METHOD 2 -
/*  >> Notes:
- Easier to read and maintain for complex sequences.
*/
async function get_data(): Promise<void>{
  try {
    const response: AxiosResponse<any> = await axios.get(req_url);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
  
}

get_data();


