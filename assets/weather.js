
let textBox = document.querySelector(".textBox");
document.addEventListener("keypress", function(event){
    if(event.key === 'Enter' || event.key === 'Return'){
        event.preventDefault();
        let cityName = document.getElementById("citySearch");
        queryCity = cityName.value;
console.log(queryCity);
let apiKey = "&appid=fb68c99f07b370fbd902b21d6ce4f201";
let daysReq = "16";
let unitDisplay = "&units=Imperial"
let queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + queryCity + "&cnt="+ daysReq + apiKey + unitDisplay;
let currentQueryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + queryCity + apiKey;
let dateEvent;
         //document.write("getDay() : " + dt.getDay() ); 


 /////////CURRENT WEATHER ///////////////

    
 $.ajax({ //
    url: currentQueryURL, 
    method: "GET"
}).then(function(response){
    console.log("current Weather Response: " + response);   
})

//////// FORECAST WEATHER //////////

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log("forecast response: "+ response);


    $(cityName).text(response.city.name).prepend("weather in ");


 

    /// FOR LOOP TO PULL DATA ////
    for( i = 0; i < response.list.length; i++){
    let iconEvent = response.list[i].weather[0].icon;
    let weatherIcon = "http://openweathermap.org/img/wn/" + iconEvent + "@2x.png";
    let timeEvent = response.list[i].dt_txt;
    let dayinWeek;
    let hourlyWeather;
    response.list[i].forEach(function date() {
         timeEvent = response.list[i].dt_txt;
        let  weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
        let d = new Date(timeEvent);
        let n = d.getDay();
        dayinWeek = weekday[n];
        weatherDescription = response.list[i].weather[0].description;
        let hourlyWeatherRaw = (response.list[i].main.temp);//- 273.15) * 1.80 +32;
        let hourlyWeather = hourlyWeatherRaw.toFixed(2);//+ "°F";
        
///// OBJECT FOR THE WEATHER ///
//weekday.forEach(index+1);
    })
    date();
            
//     if (dayinWeek == "Monday"){
//     mondayWeather = new ForecastWeather(dayinWeek, hourlyWeather, weatherDescription,weatherIcon );}
// console.log("mondayWeahter: " + mondayWeather);
//     }

    // if(dayinWeek == "Monday"){
    //     dayMonday = new ForecastWeather(hourlyWeather, weatherDescription, weatherIcon);
    //     console.log("day in week- Monday: " + dayMonday.weatherDescription);
    // }
    // if(dayinWeek == "Tuesday"){
    //     dayTuesday = new ForecastWeather(hourlyWeather, weatherDescription, weatherIcon);
    //     console.log("day in week-Tuesday: " + dayTuesday.weatherDescription);
    // }
    // if(dayinWeek == "Wednesday"){
    //     dayWednesday = new ForecastWeather(hourlyWeather, weatherDescription, weatherIcon);
    //     console.log("day in week-Wednesday: " + dayWednesday.weatherDescription);
    // }
    // if(dayinWeek == "Thursday"){
    //     dayThursday = new ForecastWeather(hourlyWeather, weatherDescription, weatherIcon);
    //     console.log("day in week-Thursday: " + dayThursday.weatherDescription);
    // }
    // if(dayinWeek == "Friday"){
    //     dayFriday = new ForecastWeather(hourlyWeather, weatherDescription, weatherIcon);
    //     console.log("day in week-Friday: " + dayFriday.weatherDescription);
    // }
    // if(dayinWeek == "Saturday"){
    //     daySaturday = new ForecastWeather(hourlyWeather, weatherDescription, weatherIcon);
    //     console.log("day in week-Saturday: " + daySaturday.weatherDescription);
    // }
    // if(dayinWeek == "Sunday"){
    //     daySunday = new ForecastWeather(hourlyWeather, weatherDescription, weatherIcon);
    //     console.log("day in week-Sunday: " + daySunday.weatherDescription);
    // }

//     for(maxSpan = 0; maxSpan < 60; maxSpan++){
//     let WeatherAvg = hourlyWeather[maxSpan].reduce((a, b) => a + b, 0);
// }

   // console.log("weather avg: " + WeatherAvg + " , day in week " + dayinWeek);
    console.log(dayinWeek);
    console.log(weatherDescription); 
    console.log(hourlyWeather);
    console.log(timeEvent);
    console.log(weatherIcon);
    }
    

})
}
})