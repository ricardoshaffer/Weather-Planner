




let textBox = document.querySelector(".textBox");
document.addEventListener("keypress", function(event){
    if(event.key === 'Enter' || event.key === 'Return'){
        event.preventDefault();
        let cityName = document.getElementById("citySearch");
        queryCity = cityName.value;
console.log(queryCity);
let apiKey = "&appid=fb68c99f07b370fbd902b21d6ce4f201";
let daysReq = "5";
let unitDisplay = "&units=Imperial"
let queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + queryCity + "&cnt="+ daysReq + apiKey + unitDisplay;
let dateEvent;
         //document.write("getDay() : " + dt.getDay() ); 

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    $(cityName).text(response.city.name).prepend("weather in ");
    for( i = 0; i < response.list.length; i++){
    let iconEvent = response.list[i].weather[0].icon;
    let weatherIcon = "http://openweathermap.org/img/wn/" + iconEvent + "@2x.png";
    let timeEvent = response.list[i].dt_txt;
    let dayinWeek;
    function date() {
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
        let dayinWeek = weekday[n.getDay()];
        
    }
    console.log(dayinWeek);
    let weatherDescription = response.list[i].weather[0].description;
    let hourlyWeatherRaw = (response.list[i].main.temp);//- 273.15) * 1.80 +32;
    let hourlyWeather = hourlyWeatherRaw.toFixed(2)+ "°F";
    let iconHolder = document.createElement("img");
    let dateHolder = document.createElement("li");
    let weatherHolder = document.createElement("p");

    $("#time-events").append(dateHolder).append(dayinWeek).append(iconHolder).append(weatherHolder);
    $(weatherHolder).text("temperature : " + hourlyWeather + ", " + weatherDescription);
    $(iconHolder).attr("src", weatherIcon);
    $(dateHolder).text(timeEvent);
    console.log(timeEvent);
    console.log(weatherIcon);
    }
})
}
})