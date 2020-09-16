var apiKey = "42d9910c0bcc018a50ba4f26eb2e6e41";
var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?" +
"q=Milford,Connecticut&appid=" + apiKey;
var fiveDayWeatherURL = "https://api.openweathermap.org/data/2.5/weather?";
var weatherUV = "https://api.openweathermap.org/data/2.5/weather?";


for (var i = 0; i < localStorage.length; i++) {

    var city = localStorage.getItem(i);
    var cityName = $(".list-group").addClass("list-group-item");
    cityName.append("<li>" + city + "</li>");
}

$("#searchButton").click(function() {
    var search = $(".searchInput").val()
    console.log(search);

});

$.ajax({
    url: currentWeatherURL,
    method: "GET"
  })

  .then(function(response) {
    //definitely use this for UV;
    monday(response.coord)
  })

  function monday(x) {
      console.log(x);
  }



  