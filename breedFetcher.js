const request = require('request');

//Implemented fetchBreedDescription function
const fetchBreedDescription = function(breed, callback) {
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {

    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      callback(`Response status: ${response.statusCode}`, null);
    }

    const data = JSON.parse(body);

    const breedInfo = data[0];

    if (breedInfo) {
      callback(null, breedInfo.description);
    } else {
      callback(`Couldn't find a ${breed} breed`, null);
    }
  });
  
};

//Taking the breed name input from the user

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.error(error);
  } else {
    console.log(description);
  }
});