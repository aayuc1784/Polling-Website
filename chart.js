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

 // reading title from realtime database

let title = firebase.database().ref("Polls/-N0C_ia8x6zfwXqpOrUs").get("value",(snapshot)=>{
snapshot.val().title});

// reading options from realtime database

let option1= firebase.database().ref("Polls/-N0C_ia8x6zfwXqpOrUs").get("value",(snapshot)=>{snapshot.val().option1});

let option2= firebase.database().ref("Polls/-N0C_ia8x6zfwXqpOrUs").get("value",(snapshot)=>{snapshot.val().option2});

let option3= firebase.database().ref("Polls/-N0C_ia8x6zfwXqpOrUs").get("value",(snapshot)=>{snapshot.val().option3});

let option4= firebase.database().ref("Polls/-N0C_ia8x6zfwXqpOrUs").get("value",(snapshot)=>{snapshot.val().option4});

// reading optionscount from realtime database

let optionCount1= firebase.database().ref("Polls/-N0C_ia8x6zfwXqpOrUs").get("value",(snapshot)=>{snapshot.val().optionCount1});

let optionCount2= firebase.database().ref("Polls/-N0C_ia8x6zfwXqpOrUs").get("value",(snapshot)=>{snapshot.val().optionCount2});

let optionCount3= firebase.database().ref("Polls/-N0C_ia8x6zfwXqpOrUs").get("value",(snapshot)=>{snapshot.val().optionCount3});

let optionCount4= firebase.database().ref("Polls/-N0C_ia8x6zfwXqpOrUs").get("value",(snapshot)=>{snapshot.val().optionCount4});



// coloumn chart

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: title
        },
        axisY: {
            title: "No of Votes"
        },
        data: [{        
            type: "column",  
            showInLegend: true, 
            legendMarkerColor: "grey",
            dataPoints: [      
                { y: optionCount1, label: option1 },
                { y: optionCount2,  label: option2 },
                { y: optionCount3,  label: option3 },
                { y: optionCount4,  label: option4 }
                
            ]
        }]
    });
    
    chart.render();

    }
    
