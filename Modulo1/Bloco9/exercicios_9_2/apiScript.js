// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const jokeGenerator = (data) => {
  const joke = document.getElementById('jokeContainer');
  joke.innerText = data.joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then((data) => jokeGenerator(data))
};

window.onload = () => fetchJoke();