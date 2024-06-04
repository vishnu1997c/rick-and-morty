var urlParams = new URLSearchParams(window.location.search);

$(document).ready(function() {
    $.get(`http://localhost:3000/get-weather?q=${urlParams.get("q")}`, (obj) => {
        const array = obj.days;
    })
});