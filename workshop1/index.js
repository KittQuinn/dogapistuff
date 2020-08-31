function main(){
  let url = "http://api.giphy.com/v1/gifs/search?q=batman&limit=25&api_key=XOKsMA7H9h4mW9E6JAGYEzipI7u6sUEQ"
  

  /*
Hey javascript, who's the puppy? go to this url. fetch this information, 
THEN, once you've fetched it, and you give me a response, 
console log the response, then take that response and put it into a json object.
THEN, once our javascript puppy is done fetching and converting that for us, 
then we get our json object, and we have our data. 
  */

  fetch(url).then(function(response){
    console.log(response);
    return response.json();
  }).then(function(json){
    console.log(json);
    for(let i=0; i <json.data.length;i++){
      let image = json.data[i].images.original.url
    }
  });
  const startMsg = "hiyaWorld"
}

/*
const startMsg = $('<p>hello world</p>');
$('#root').append(startMsg)
*/

$(main);