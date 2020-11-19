$(document).ready(function () {

    var currentDay = $("#date");
    currentDay.text(moment().format('MM-DD-YYYY'));

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

            // $("#uvindex").html(response.coord);
            $("#cityName").val(" ");


        });

        var queryURL5 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + appID;

        $.ajax({
            url: queryURL5,
            method: "GET"
        }).then(function (response5) {
            console.log(response5);

            var dayList = " ";

            for (i = 0; i < response5.list.length; i++) {
                dayList += "<div>";
                dayList += "<ul>";
                dayList += "<li>" + response5.list[i].dt_txt + "</li>";
                dayList += "<li>" + "<img src='https://openweathermap.org/img/w/" + response5.list[i].weather[0].icon + ".png'>" + "</li>";
                dayList += "<li>" + response5.list[i].main.temp + "</li>";
                dayList += "<li>" + response5.list[i].main.humidity + "</li>";
                dayList += "</ul>";
                dayList += "</div>";
            } $("#fiveDay").html(dayList);


        });



    });
});