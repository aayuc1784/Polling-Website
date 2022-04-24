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
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();



firebase.database().ref("poll").on("value",(snapshot)=>{
    document.getElementById("title").innerHTML =""+
    snapshot.val().title;
})
firebase.database().ref("poll").on("value",(snapshot)=>{
  document.getElementById("option1").innerHTML =""+
snapshot.val().option1;
})
firebase.database().ref("poll").on("value",(snapshot)=>{
  document.getElementById("option2").innerHTML =""+
snapshot.val().option2;
})
firebase.database().ref("poll").on("value",(snapshot)=>{
  document.getElementById("option3").innerHTML =""+
snapshot.val().option3;
})

firebase.database().ref("poll").on("value",(snapshot)=>{
  document.getElementById("option4").innerHTML =""+
snapshot.val().option4;
})

firebase.database().ref("poll").on("value",(snapshot)=>{
  document.getElementById("title1").innerHTML =""+
snapshot.val().title;
})


// View Result

function result()
{
  // event.preventDefault();
  window.location.replace("chart.html");
}
// closing the poll

function confirm (event)
{   
    event.preventDefault();
    alert("Do you want to close this poll?");
    window.location.replace('form1.html');
}


   