// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAgMTkWrGmJ_clPsIY5tjuetBuXve13OR0",
    authDomain: "polling-website-363c3.firebaseapp.com",
    databaseURL: "https://polling-website-363c3-default-rtdb.firebaseio.com",
    projectId: "polling-website-363c3",
    storageBucket: "polling-website-363c3.appspot.com",
    messagingSenderId: "717957251165",
    appId: "1:717957251165:web:7cef99b342200b5864cdb4",
    measurementId: "G-J4YJV4G3JV"
  };
  
  // Initialize Firebas
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

 // pie chart 

window.onload = function()
{
    var dataPoints = [];

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Title of the Poll"
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "## Votes",
            indexLabel: "{option}{y}",
            dataPoints: dataPoints
        }]
    });
    function getData(fetchData) {
        firebase.database().ref("Votes").once('value').then(function (snapshot) {
           fetchData(snapshot.val())
       });
     }
   
     window.addEventListener("load",getData(genFunction));
     
     function genFunction(data) {
         for(var i=1; i<data.length; i++) {
             dataPoints.push({
               y: data[i].countOption,
               label: data[i].option
         });
     }
   
    chart.render();
}

}