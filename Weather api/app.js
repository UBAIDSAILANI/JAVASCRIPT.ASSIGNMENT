// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then((json) =>{
//     for(var i=0; i< json.length; i++){
//         let list = document.getElementById('list');
//         list.innerHTML += `<li>${json[i].albumid}</li>`
//     }
//     console.log(json)
//   })
// const apiKey = '32bd79af4e1e1c99d653c343d20e188b'
// let input = document.getElementById('city');
// let search = document.getElementsByClassName('fa-magnifying-glass');
// let main = document.getElementsByClassName('data');
// let regex = /^[a-zA-Z\s]*$/;

// window.onload = input.focus();
// let getWeather = async (city) =>{
//   main.innerHtml = `
//   <h2> Loading...</h2>`
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}lat={lat}&lon={lon}&appid=${apiKey}&unit=metric`;
//   let response = await fetch(url);
//   let data = await response.json();
//   return showWeather(data);
// }
// let showWeather = (data) =>{
//   if(data.cod == 404){
//     main.innerHtml=`
//     <h2>City Not Found<h2>`
//     return;
//   }

// }

// const apiCall = fetchData  => {
//   const getting_api = new Promise((resolve, reject){
//     fetch()
//   })

// }




// let searchClick = search.onclick = () => {
//   let extra_space_remove = input.value.replace(/\s\s+/g, "");
//   if(input.value !== "" ){
//     extra_space_remove === extra_space_remove.toLowerCase();
//     data_result(extra_space_remove);
//   }
// }
var display = document.getElementById("display");
function fetchDataOnload() {
  let lat;
  let lon;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=32bd79af4e1e1c99d653c343d20e188b`)
        .then(response => {
          return response.json();
          })
        .then(data1 => {
          console.log(data1)
          display.innerHTML = `
        <div class="card-body">
        <h1 class="card-title" >${data1.name}</br><span>${data1.sys.country}</span></h1>
  
        <h5 class="card-title" >${Math.round(data1.main.temp)} <sup>o</sup>C</h5>
        <p class="card-text"></p>
        <img src="http://openweathermap.org/img/w/${data1.weather[0].icon}.png"> 
        <p class="card-text">${data1.weather[0].main}</p>
        
          </div>
        `
        })

  })
}}
fetchDataOnload()

function getData() {
    let input = document.getElementById('city');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=32bd79af4e1e1c99d653c343d20e188b`)
      .then(res => { return res.json() })
      .then(data => {
        console.log(data)
        display.innerHTML = `
      <div class="card-body">
      <h1 class="card-title" >${data.name}</br><span>${data.sys.country}</span></h1>

      <h5 class="card-title" >${Math.round(data.main.temp)} <sup>o</sup>C</h5>
      <p class="card-text"></p>
      <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"> 
      <p class="card-text">${data.weather[0].main}</p>
      
        </div>
      `
    })
    .catch(error => {
      console.log("Current Location Not detecting....")
  })

  }
  
// var getPromise = new Promise( function  (resolve, reject){
// if(true){
//   {resolve('mil gaya')}
// }
// else{reject('nhi mila')}
// })
// console.log(getPromise)