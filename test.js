$("#find-city").on("click", function (event) {

    event.preventDefault();


    var City = $("#city-input").val();


    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" + City + "&apikey=c5fbb84da689821daa1431f435ac953d";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#city-view").text(JSON.stringify(response));

    });

});