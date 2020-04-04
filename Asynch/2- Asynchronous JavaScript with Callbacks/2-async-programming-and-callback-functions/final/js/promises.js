const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// This function returns a new promise obj. It handles the asynchronous call.button. 
// The executor function inside the constructor has two arguments that are passed to it,
// which arguments themselves - resolve() and reject(). Apply these functions to identify 
// the successful and unsucessful outputs of a promise. 
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        resolve(data); // success - resolved
      } else {
        reject(Error(xhr.responseText)); // unsuccessful -reject
      }
    };
    xhr.onerror = () => reject(Error('A Network Error Occured')); // unsuccessful -reject
    xhr.send();
  });
}

// Grabs Profile data from the 2nd Website.
function getProfiles(json) {
  const profiles = json.people.map( person => {
    return getJSON(wikiUrl + person.name);      // Runs the Asynchronous Data Request and Returns a Promise
  }); 
  return Promise.all(profiles); // All Promises Are Accepterd OR Rejected
}

//Formats the Data
function generateHTML(data) {
  console.log(data);
  data.map( person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    section.innerHTML = `
      <h2>${person.title}</h2>
      <p>${person.description}</p>
      <p>${person.extract}</p>
    `;
    });
}

// Promise Chain is Contained within a button event listener.
btn.addEventListener('click', (event) => {
  getJSON(astrosUrl) // Runs the first Asynch Data Request
  .then(getProfiles) // Runs the second Asynch Data Request
  .then(generateHTML) // pushes the data collected to the console
  .catch( err => {
    peopleList.innerHTML = '<h3> Error With Download</h3>'
    console.log(err)
  })
  .finally(()=>event.target.remove());
});