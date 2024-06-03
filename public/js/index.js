var urlParams = new URLSearchParams(window.location.search);

$(document).ready(function() {
    $.get(`http://localhost:3000/get-weather?q=${urlParams.get("q")}`, (obj) => {
        const array = obj.days;

        array.forEach(element => {
            if (element.icon == "snow") {
                $(".icons-change").addClass("fa-snowflake")
            } else if (element.icon == "rain") {
                $(".icons-change").addClass("fa-cloud-showers-water")
            } else if (element.icon == "fog") {
                $(".icons-change").addClass("fa-smog")
            } else if (element.icon == "cloudy" || element.icon == "partly-cloudy-day" || element.icon =="partly-cloudy-night") {
                $(".icons-change").addClass("fa-cloud-sun")
            } else {
                $(".icons-change").addClass("fa-sun")
            }
        });
    })
});