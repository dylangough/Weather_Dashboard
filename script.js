var weatherKey = "c5fbb84da689821daa1431f435ac953d"

function getForecast() {
    let queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" + weatherKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(response => {
        pushForecast(response);
        console.log(response);
    });
}