// coloumn chart

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Title of the Poll"
        },
        axisY: {
            title: "No of Votes"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            dataPoints: [      
                { y: 20, label: "Option 1" },
                { y: 23,  label: "Option 2" },
                { y: 34,  label: "Option 3" },
                { y: 18,  label: "Option 4" }
                
            ]
        }]
    });
    
    chart.render();

    }
    
