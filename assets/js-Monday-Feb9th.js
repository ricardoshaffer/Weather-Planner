let textBox = document.querySelector(".textBox");
document.addEventListener("keypress", function(event){
    if(event.key === 'Enter' || event.key === 'Return'){
        event.preventDefault();
        let cityName = document.getElementById("citySearch");
        queryCity = cityName.value;
    console.log("searched city: " + queryCity);
    let apiKey = "&key=bb0e6846266e46b2a313d522b2b4d2dd";
    let daysReq = "16";
    let unitDisplay = "&units=I"
    let queryURL = "https://api.weatherbit.io/v2.0/forecast/daily?city=" + queryCity + "&country=US"+ unitDisplay + apiKey;
    //let currentQueryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + queryCity + apiKey;
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
