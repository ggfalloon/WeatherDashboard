$(document).ready(function () {

    var currentDay = $("#date").text(moment().format('MM-DD-YYYY'));

    localStorage.getItem("newCities");

    $("#searchBtn").click(function () {


        var cityName = $("#cityName").val();
        var appID = "21292f97c006ec7feb138c594d793fed";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + appID;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            $("#city").html(response.name);
            $("#weather_image").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
            $("#temperature").html(response.main.temp);
            $("#humidity").html(response.main.humidity);
            $("#wind_speed").html(response.wind.speed);


            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&appid=" + appID,
                method: "GET"
            }).then(function (responseUV) {

                $("#uvindex").html(responseUV.value);

                if (responseUV.value >= 6.5) {
                    $("#uvindex").css("background-color", "red");
                } else if (responseUV.value >= 3) {
                    $("#uvindex").css("background-color", "yellow");
                } else {
                    $("#uvindex").css("background-color", "green");
                }
            }); $("#cityName").val(" ");

        });

        var queryURL5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + appID;

        $.ajax({
            url: queryURL5,
            method: "GET"
        }).then(function (response5) {

            for (i = 0; i < response5.list.length; i++) {
                if (response5.list[i].dt_txt.split(" ")[1] === "18:00:00") {
                    var containerColumn = $("<div class='col-xs-1' id='fiveDay'>");

                    var dateEl = $("<h6>").append("Date: " + response5.list[i].dt_txt.split(" ")[0]);
                    var iconEl = $("<h6>").append("<img src='https://openweathermap.org/img/w/" + response5.list[i].weather[0].icon + ".png'>")
                    var tempEl = $("<h6>").append("Temp: " + response5.list[i].main.temp + '\u00B0');
                    var humidityEl = $("<h6>").append("Humidity: " + response5.list[i].main.humidity + "%")

                    containerColumn.append(dateEl, iconEl, tempEl, humidityEl);

                } $("#forecastRow").append(containerColumn);
            }

        });


        function createButton() {
            var cityList = $('<button>').text(cityName);
            cityList.addClass("btn btn-secondary btn-lg btn-block");

            $("#newCity").prepend(cityList);
            localStorage.setItem("newCities", cityList);

        } createButton();

    });
});