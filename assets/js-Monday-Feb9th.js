/// CREATE NEW LIST ITEM ELEMENT //////

var todoInput = document.querySelector("#citySearch");
var todoForm = document.querySelector(".textBox");
var todoList = document.querySelector(".list-group");
//var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

init();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";


  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    let locationSearched = document.createElement("a");
    $(locationSearched).attr("class","list-group-item list-group-item-action");
    $(locationSearched).attr("data-toggle", "list");
    $(locationSearched).attr("role", "tab");
    $(locationSearched).attr("id", todo);
    $(locationSearched).attr("aria-controls", todo);
    $(locationSearched).text(todo);
    $(".list-group").append(locationSearched);
    localStorage.setItem(locationSearched, todo);

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    $(button).attr("value",todo);

    $(locationSearched).append(button);
    todoList.appendChild(locationSearched);
  }
}

function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // Render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

//// START OF FORM RECORDING /////

let textBox = document.querySelector(".textBox");
document.addEventListener("keypress", function(event){
    if(event.key === 'Enter' || event.key === 'Return'){
        event.preventDefault();
        let cityName = document.getElementById("citySearch");
        queryCity = cityName.value;
    console.log("searched city: " + queryCity);
// When form is submitted...
  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();

/// END OF FORM CREATION ///
let currentApiKey = "&appid=fb68c99f07b370fbd902b21d6ce4f201";
let currentunitDisplay = "&units=Imperial"
    let apiKey = "&key=bb0e6846266e46b2a313d522b2b4d2dd";
    let daysReq = "16";
    let unitDisplay = "&units=I"
    let queryURL = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + queryCity + "&country=US"+ unitDisplay + apiKey;
    let currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + queryCity + currentunitDisplay + currentApiKey;
    $.ajax({
        url: currentQueryURL,
        method: "GET" 
    }).then(function(response){
        console.log(response)
    })
$.ajax({
    url: queryURL,
    method: "GET" 
}).then(function(response){
    console.log(response);
    console.log ("response length: " + response.data.length);
    for(fore=0 ; fore < response.data.length; fore++){

/// WEATHER ICON //////
        weatherIcon = response.data[fore].weather.icon;
        iconURL = "https://weatherbit.io/static/img/icons/" + weatherIcon + ".png";
        console.log("icon URL: " + iconURL);
        let iconHolderW = document.createElement("img");
        $(iconHolderW).attr("src", iconURL);
        $(iconHolderW).attr("alt", response.data[fore].weather.description);
        $(iconHolderW).attr("width","50px");
        $("#icon-"+[fore]).append(iconHolderW);

/// DATE EVENT ////
let timeEvent = response.data[fore].valid_date;
function date() {
     timeEvent = response.data[fore].valid_date;
    let  weekday = new Array(7);
weekday[6] = "Sunday";
weekday[0] = "Monday";
weekday[1] = "Tuesday";
weekday[2] = "Wednesday";
weekday[3] = "Thursday";
weekday[4] = "Friday";
weekday[5] = "Saturday";
    let date = new Date(timeEvent);
    let n = date.getDay();
    let dayinWeek = weekday[n];
    console.log("day in week: " + dayinWeek);
    $("#header-"+[fore]).text(dayinWeek);
}
date();
    ///// WEATHER MAX ////
        let maxDailyTemp = response.data[fore].max_temp;
        console.log("max daily: " + maxDailyTemp);
        $("#p-"+[fore]).text("Max: "+ maxDailyTemp);
    ///// WEATHER MIN ////
        let minDailyTemp = response.data[fore].low_temp;
        console.log("min daily: " + minDailyTemp);
////COMBINING TEMPERATURE /////
let weatherContainer = document.createElement("p");
$(weatherContainer).attr("id", "p-"+[fore]+"-min");
$(weatherContainer).text("Min: "+ minDailyTemp);
$("#p-"+[fore]).append(weatherContainer);

///// WEATHER DESCRIPTION ////
weatherDescription = response.data[fore].weather.description;
$("#title-" +[fore]).text(weatherDescription);
    }
})
}})
// When a element inside of the todoList is clicked...
todoList.addEventListener("click", function(event) {
    $(".image").attr("src", "");
    var element = event.target;
    // If that element is a button...
    if (element.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
      let locationSearched = element.getAttribute("value");
      console.log(locationSearched);

      queryCity = locationSearched;
      let currentApiKey = "&appid=fb68c99f07b370fbd902b21d6ce4f201";
      let currentunitDisplay = "&units=Imperial"
      console.log("previously searched city: " + queryCity);
      let apiKey = "&key=bb0e6846266e46b2a313d522b2b4d2dd";
      let daysReq = "16";
      let unitDisplay = "&units=I"
      let queryURL = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + queryCity + "&country=US"+ unitDisplay + apiKey;
      let currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + queryCity + currentunitDisplay + currentApiKey;
      $.ajax({
        url: currentQueryURL,
        method: "GET" 
    }).then(function(response){
        console.log(response)
    })
      $.ajax({
      url: queryURL,
      method: "GET" 
  }).then(function(response){
      console.log(response);
      console.log ("response length: " + response.data.length);
      for(fore=0 ; fore < response.data.length; fore++){
  
  /// WEATHER ICON //////
          weatherIcon = response.data[fore].weather.icon;
          iconURL = "https://weatherbit.io/static/img/icons/" + weatherIcon + ".png";
          console.log("icon URL: " + iconURL);
          let iconHolderW = document.createElement("img");
          $(iconHolderW).attr("src", iconURL);
          $(iconHolderW).attr("alt", response.data[fore].weather.description);
          $(iconHolderW).attr("width","50px");
          $("#icon-"+[fore]).append(iconHolderW);
  
  /// DATE EVENT ////
  let timeEvent = response.data[fore].valid_date;
  function date() {
       timeEvent = response.data[fore].valid_date;
      let  weekday = new Array(7);
  weekday[6] = "Sunday";
  weekday[0] = "Monday";
  weekday[1] = "Tuesday";
  weekday[2] = "Wednesday";
  weekday[3] = "Thursday";
  weekday[4] = "Friday";
  weekday[5] = "Saturday";
      let date = new Date(timeEvent);
      let n = date.getDay();
      let dayinWeek = weekday[n];
      console.log("day in week: " + dayinWeek);
      $("#header-"+[fore]).text(dayinWeek);
  }
  date();
      ///// WEATHER MAX ////
          let maxDailyTemp = response.data[fore].max_temp;
          console.log("max daily: " + maxDailyTemp);
          $("#p-"+[fore]).text("Max: "+ maxDailyTemp);
      ///// WEATHER MIN ////
          let minDailyTemp = response.data[fore].low_temp;
          console.log("min daily: " + minDailyTemp);
  ////COMBINING TEMPERATURE /////
  let weatherContainer = document.createElement("p");
  $(weatherContainer).attr("id", "p-"+[fore]+"-min");
  $(weatherContainer).text("Min: "+ minDailyTemp);
  $("#p-"+[fore]).append(weatherContainer);
  
  ///// WEATHER DESCRIPTION ////
  weatherDescription = response.data[fore].weather.description;
  $("#title-" +[fore]).text(weatherDescription);
      }
  
  
  
      // Store updated todos in localStorage, re-render the list
      storeTodos();
      renderTodos();
    }
)}})
