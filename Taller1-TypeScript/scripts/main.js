import { dataSeries } from "./data.js";
var seriesTbody = document.getElementById("series");
var seasonAverageElm = document.getElementById("seasons-average");
renderSeriesInTable(dataSeries);
var average = getSeasonAverage(dataSeries);
seasonAverageElm.innerHTML = "".concat(average);
function renderSeriesInTable(series) {
    console.log("Desplegando series");
    series.forEach(function (serie) {
        console.log(serie);
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                            <td>").concat(serie.name, "</td>\n                            <td>").concat(serie.channel, "</td>\n                            <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonAverage(series) {
    var seasonAverage = 0;
    series.forEach(function (serie) { return seasonAverage = seasonAverage + serie.seasons; });
    seasonAverage = seasonAverage / series.length;
    return seasonAverage;
}