$(document).ready(function() {

	 $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ cities +,country +"/json/?callback=?", function(dados) {






function toCelsius(fahren){
    return 5 * (fahrenheit - 32) / 9;
}


function toFahrenheit(celsius) {
    return celsius / 5 * 9 + 32;
}