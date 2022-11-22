const { fetchBreedDescription } = require('./breedFetcher');

//Taking the breed name input from the user

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.error(error);
  } else {
    console.log(description);
  }
});