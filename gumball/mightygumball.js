var url = "http://someserver.com/data.json"
var request = new HMLHttpRequest();

window.onload = function() {
	var url = "http://localhost/sales.json";
	var request = new XMLHttpRequest();

	request.open("GET", url);
	request.onload = function() {
		if (request.status == 200)
		{
			updateSales(request.responseText);
		}
	};
	request.send(null);
}

/////////// REQUEST /////////////////////
request.open("GET", url);

request.onload = function() {
	if (request.status == 200)
	{
		alert("Data received!");
	}
};

//se pasa null porque no mandamos ningun dato.
request.send(null);
//////////////////////////////////////////////////////

function updateSales(responseText) {
	var salesDiv = document.GetElementById("sales");
	
	salesDiv.innerHTML = responseText;
}