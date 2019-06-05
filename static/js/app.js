// from data.js;
var tableData = data;

// console.log(tableData);

// Step 1: appending the data into the existing framework of the html code;

var tbody = d3.select("tbody");

tableData.forEach(function(UFO_sightings) {
    var row = tbody.append("tr");

    Object.entries(UFO_sightings).forEach(function([key, value]){
        var cell = row.append("td");
        cell.text(value);
    });
});

// Step 2: creating an event listener to track user feedback and filter by date;

var submit = d3.select("#filter-btn");

submit.on("click", function() {

    d3.event.preventDefault();

    // capture the specific html elements user will interact with to retrieve desired data

    var inputDate = d3.select("#datetime");

    var userDate = inputDate.property("value");

    var filteredData = tableData
    .filter(date => date.datetime === userDate);

    var data_tbody = d3.select("tbody");

    data_tbody.html("");

    filteredData.forEach(function(sighting) {

        var data_row = data_tbody.append("tr");

        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key, value);
            var data_cell = data_row.append('td');
            data_cell.text(value);
        });
    });
});

