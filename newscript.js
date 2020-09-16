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
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&Appid=" + apiKey + "&units=imperial",
    method: "GET"
    })
    .then(function(response) {
           //definitely use this for UV!!!!;
            console.log(response)
        })
          

})