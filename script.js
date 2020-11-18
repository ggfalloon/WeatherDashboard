$(document).ready(function () {

    var currentDay = $("#date");
    currentDay.text(moment().format('MM-DD-YYYY'));

    $("#searchBtn").click(function () {
        var cityName = $("#cityName").val();
        var appID = "21292f97c006ec7feb138c594d793fed";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + appID;


        // var query_param = $(this).prev().val();

        // if ($(this).prev().attr("placeholder") == "City Name") {
        //     var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + query_param + "&APPID=" + appID;
        // }

        // var latLon = http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + appID;

        // $.getJSON(weather, function (json) {
        //     
        //     $("#uvindex").html(json.main.value);

        //     $("#temperature").text((($("#temperature").text() * (9 / 5)) + 32));

        // });

        // function renderUv() {
        // }

        // var fiveDay = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + appID;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.main.temp);

            $("#city").html(response.name);
            // $("#weather_image").attr("src", "http://openweathermap.org/img/w/" + weather[0].icon + ".png");
            $("#temperature").html(response.main.temp);
            $("#humidity").html(response.main.humidity);
            $("#wind_speed").html(response.wind.speed);



        });


    })

    // function renderCityList() {
    // }





});