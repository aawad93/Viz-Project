// Canvas Chart: https://canvasjs.com/html5-javascript-bubble-chart/
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "CO2 Emissions, Population and Energy Production by Country (2017)",
		fontFamily: "calibri",
	},
	axisX: {
		title:"Population (millions)"
	},
	axisY: {
		title:"CO2 Emissions"
	},
	legend:{
		horizontalAlign: "left"
	},
	
	data: [{
		type: "bubble",
		showInLegend: true,
		legendText: "Size of Bubble Represents Energy Production",
		legendMarkerType: "circle",
		legendMarkerColor: "blue",
		toolTipContent: "<b>{name}</b><br/>Pop: {x} mil<br/> Emissions: {y} MT<br/> Energy: {z} Mtoes",
		dataPoints: [
			// x= population, y=emissions, z=energy, Country
			{ x: 24.6, y: 413.09, z:407, name: "Australia" },
			{ x: 207.83, y: 476.07, z:292, name: "Brazil" },
			{ x: 36.54, y: 572.78, z:504, name: "Canada" },
			{ x: 1386.4, y: 9838.75, z:2448, name: "China" },
			{ x: 48.9	, y: 81.23, z:123, name: "Colombia" },
			{ x: 96.44, y: 218.66, z:72, name: "Egypt" },
			{ x: 66.87, y: 356.3, z:130, name: "France" },
			{ x: 82.66, y: 799.37, z:115, name: "Germany" },
			{ x: 1338.66, y: 2466.77, z:567, name: "India" },
			{ x: 264.65, y: 486.84, z:438, name: "Indonesia" },
			{ x: 80.67, y: 672.31, z:419, name: "Iran" },
			{ x: 31.11, y: 254.58, z:102, name: "Malaysia" },
			{ x: 124.78, y: 490.29, z:165, name: "Mexico" },
			{ x: 190.87, y: 107.3, z:246, name: "Nigeria" },
			{ x: 5.28, y: 44.79, z:214, name: "Norway" },
			{ x: 144.5, y: 1692.79, z:1429, name: "Russian Federation" },
			{ x: 33.1	, y: 635.01, z:653, name: "Saudi Arabia" },
			{ x: 57, y: 456.33, z:164, name: "South Africa" },
			{ x: 66.06, y: 384.71, z:120, name: "United Kingdom" },
			{ x: 325.15, y: 5269.53, z:2007, name: "United States of America" },
			{ x: 29.39, y: 159.57, z:149, name: "Venezuela" },
		]
	}]
});

chart.options.axisX.maximum = 1500;
chart.options.axisY.maximum = 12000;
chart.render();

}

