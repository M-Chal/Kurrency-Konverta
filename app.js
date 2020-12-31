var apiKey = "https://v6.exchangerate-api.com/v6/0e852c950a67b01e63e1d9e5/latest/";

var from = document.getElementById("from");
var to = document.getElementById("to");

var inValue = document.getElementById("in");
var outValue = document.getElementById("ans");

var but = document.getElementById("conv");

var foot =  document.getElementById("footer");

outValue.innerHTML = "0";

but.addEventListener("click", getConversion);

function getConversion(){
  $.getJSON(apiKey+from.value, function(data) {
        outp = data.conversion_rates[to.value];
        var result = outp * inValue.value;
        outValue.innerHTML = `${result.toFixed(2)}<br>`;
        foot.innerHTML = 'Last Updated: ' + data.time_last_update_utc;
    });
}
