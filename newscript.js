var searchButton = $("#searchButton");
var apiKey = "42d9910c0bcc018a50ba4f26eb2e6e41";
var city;

//city history
var searchHistory = localStorage.getItem("searchHistory");
searchHistory = JSON.parse(searchHistory)
if (searchHistory) {
for (var i = 0; i < searchHistory.length; i++) {

    city = searchHistory[i];
    var cityName = $(".list-group").addClass("list-group-item");
    cityName.append("<li>" + city + "</li>");
    console.log(city)
}}

$("#searchButton").click(function() {
    //getting value from search box
    var search = $(".searchInput").val()
    console.log(search);
    //string
    var searchHistory = localStorage.getItem("searchHistory");
    if (searchHistory) {
        //object
        console.log(searchHistory)
        console.log(typeof searchHistory)
        searchHistory = JSON.parse(searchHistory)
        searchHistory.push(search)
        //string
        searchHistory = JSON.stringify(searchHistory)
    }
    else {
        searchHistory = JSON.stringify([search]);
    }
    localStorage.setItem("searchHistory", searchHistory)

//api call
var urlCurrent = "https://api.openweathermap.org/data/2.5/forecast?q=" + search + "&Appid=" + apiKey + "&units=imperial"
$.ajax({
    url: urlCurrent,
    method: "GET"
    })
    .then(function (response) {
           //definitely use this for UV!!!!;
        console.log(urlCurrent)
        console.log(response)

         $(".humidity").text("Humidity: " + response.list[i].main.humidity + "%");
         $(".temperature").text("Temperature: " + response.list[i].main.temp + " F");
         $(".wind").text("Wind Speed: " + response.list[i].wind.speed + " mph");  
        })


//UV


//5day
var urlFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + search + "&Appid=" + apiKey + "&units=imperial"
$.ajax({
    url: urlFiveDay,
    method: "GET"
}).then(function (response) {
    // Array for 5-days 
    var day = [0, 8, 16, 24, 32];
    var fiveDayCard = $(".fiveDayCard").addClass("card-body");
    var fiveDayDiv = $(".fiveDayOne").addClass("card-text");
    fiveDayDiv.empty();
    // For each for 5 days
    day.forEach(function (i) {
        var FiveDayTimeUTC1 = new Date(response.list[i].dt * 1000);
        FiveDayTimeUTC1 = FiveDayTimeUTC1.toLocaleDateString("en-US");

        fiveDayDiv.append("<div class=fiveDayColor>" + "<p>" + FiveDayTimeUTC1 + "</p>" + `<img src="https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png">` + "<p>" + "Temperature: " + response.list[i].main.temp + "</p>" + "<p>" + "Humidity: " + response.list[i].main.humidity + "%" + "</p>" + "</div>");
    })


});
})