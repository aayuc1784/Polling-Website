// pie chart 

window.onload = function()
{

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Title of the Poll"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: 20, label: "Option 1"},
                {y: 23, label: "Option 2"},
                {y: 34, label: "Option 3"},
                {y: 18, label: "Option 4"}
            ]
        }]
    });
    chart.render();
}