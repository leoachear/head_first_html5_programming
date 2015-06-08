var url =  "http://192.168.1.7/gumball/sales.json";
var request = new XMLHttpRequest();

window.onload = function() {

	request.open("GET", url);
	request.onload = function() {
		if (request.status == 200)
		{
			updateSales(request.responseText);
		}
	};
	request.send(null);
}

function updateSales(responseText) {
	var salesDiv = document.getElementById("sales");
	
	//salesDiv.innerHTML = responseText;
	var sales = JSON.parse(responseText);

	for (var i = 0; i < sales.length; i++)
	{
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class", "saleItem");
		div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
		salesDiv.appendChild(div);
	}
}