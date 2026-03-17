const axios = require('axios')


async function fetchData() {
  try {
    const response = await
      axios.get('https://api.example.com/data');
    // json 
    console.log(response.data); // The actual data is in the 'data' property
  } catch (error) {
    //1000
    // api key 
    // connection timeout 10000 retry 
    // cancel 
    console.log('Error fetching data:', error);
  }
}
fetchData();
