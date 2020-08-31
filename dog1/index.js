

function getDogImage(numberOfDogs) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson));
.catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson){
  for (let i = 0; i < responseJson.message.length; i++){
    $('.results-img').append(
      `<img src="${responseJson.message[i]}" class="results-img">` 
    );
  }
}

/*
function displayResults(responseJson) {
  console.log(responseJson.message);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}
*/

function needAName(){
  // takes images supplied from getDogImage and loads each image on the page

}


function returnNumberOfDogs(){
  $('form').submit(event => {
    event.preventDefault();
    let totalImages = $('.dog-list-entry').val();
    getDogImage(totalImages);
  });

}
$(returnNumberOfDogs);


//console.log(convertedURL)
console.log($('.dog-list-entry').val());


