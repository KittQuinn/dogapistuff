function getDogImage(numberOfDogs){
  fetch(`http://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
  .then(response => response.json())
  .then(responseJson =>
    displayResults(responseJson));
    .catch(error => alert('something went wrong.'));
}

