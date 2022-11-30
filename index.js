const API_URL = "https://api.covid19api.com/summary";

async function displayData() {
    try {
        var rawdata = await fetch(API_URL)
        data = await rawdata.json();

        dataarr = data.Countries
        var l = dataarr.length;
        var dropdown = document.getElementById("dropdown")
        for (let i = 0; i < l; i++) {
            let newOption = document.createElement('option');
            newOption.innerHTML = data.Countries[i].Country
            newOption.value = data.Countries[i].Country
            dropdown.appendChild(newOption);
        }
    }
    catch (error) {
        alert("Something went wrong! Refresh after some time")
        console.log("Something went wrong")
        console.log(error);
    }
}
displayData()
function createTable() {
    var x = dropdown.selectedIndex;
    // console.log(x)
    var countryname = document.getElementById("countryname")
    countryname.innerHTML = data.Countries[x].Country
    var dated = document.getElementById("date")
    dated.innerHTML = "Dated: " + data.Countries[x].Date.slice(0,10)
    var table = document.getElementById("table")
    table.style.visibility = "visible"
    table.rows[0].cells[1].innerHTML = data.Countries[x].NewConfirmed
    table.rows[1].cells[1].innerHTML = data.Countries[x].TotalConfirmed
    table.rows[2].cells[1].innerHTML = data.Countries[x].NewDeaths
    table.rows[3].cells[1].innerHTML = data.Countries[x].TotalDeaths
    table.rows[4].cells[1].innerHTML = data.Countries[x].NewRecovered
    table.rows[5].cells[1].innerHTML = data.Countries[x].TotalRecovered

}