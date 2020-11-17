$(document).ready(function () {

    var cityName = $("#city").val();
    var appID = "21292f97c006ec7feb138c594d793fed";
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + appID;



    $("#searchBtn").click(function () {

        var query_param = $(this).prev().val();

        if ($(this).prev().attr("placeholder") == "City") {
            var weather = "http://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&APPID=" + appID;
        }

        // var latLon = http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + appID;

        $.getJSON(weather, function (json) {
            $("#city").html(json.name);
            $("#main_weather").html(json.weather[0].main);
            $("#description_weather").html(json.weather[0].description);
            $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png");
            $("#temperature").html(json.main.temp);
            $("#pressure").html(json.main.pressure);
            $("#humidity").html(json.main.humidity);
            $("#wind_speed").html(json.wind.speed);
            $("#uvindex").html(json.main.value);

            $("#temperature").text((($("#temperature").text() * (9 / 5)) + 32));

        });

        var fiveDay = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + appID;




    })

    function renderCityList() {


    }




    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
});