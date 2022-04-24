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

// import { idOfThePoll } from './form.js';



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


// Poll Count in DataBase

function getData1(fetchData1) {
  firebase.database().ref("Votes/1").once('value').then(function (snapshot) {
     fetchData1(snapshot.val().countOption)
 });
}
window.addEventListener("load",getData1(genFunction1));
function genFunction1(data1)
{
  countOption1=data1
}

function getData2(fetchData2) {
  firebase.database().ref("Votes/2").once('value').then(function (snapshot) {
     fetchData2(snapshot.val().countOption)
 });
}

window.addEventListener("load",getData2(genFunction2));
function genFunction2(data2)
{
  countOption2=data2
}

function getData3(fetchData3) {
  firebase.database().ref("Votes/3").once('value').then(function (snapshot) {
     fetchData3(snapshot.val().countOption)
 });
}
window.addEventListener("load",getData3(genFunction3));
function genFunction3(data3)
{
  countOption3=data3
}

function getData4(fetchData4) {
  firebase.database().ref("Votes/4").once('value').then(function (snapshot) {
     fetchData4(snapshot.val().countOption)
 });
}
window.addEventListener("load",getData4(genFunction4));
function genFunction4(data4)
{
  countOption4=data4
}


function option1()
{
  firebase.database().ref("Polls/-N0GgEfjQiZF5JF868Kw").update(
    {
      countOption1: countOption1++
    }
  )
firebase.database().ref("Votes/1").update(
  {
    countOption: countOption1 ++
  }
)
alert("You have voted for Option 1");
window.location.replace("sharePollResult.html");
}

function option2()
{
  firebase.database().ref("Polls/-N0GgEfjQiZF5JF868Kw").update(
    {
      countOption2: countOption2 ++
    }
  )
  firebase.database().ref("Votes/2").update(
    {
      countOption: countOption2++
    }
  )
alert("You have voted for Option 2");
window.location.replace("sharePollResult.html");
}

function option3()
{
  firebase.database().ref("Polls/-N0GgEfjQiZF5JF868Kw").update(
    {
      countOption3: countOption3 ++
    }
  )
  firebase.database().ref("Votes/3").update(
    {
      countOption: countOption3 ++
    }
  )
alert("You have voted for Option 3");
window.location.replace("sharePollResult.html");
}

function option4()
{
  firebase.database().ref("Polls/-N0GgEfjQiZF5JF868Kw").update(
    {
      countOption4: countOption4++
    }
  )
  firebase.database().ref("Votes/4").update(
    {
      countOption: countOption4 ++
    }
  )
alert("You have voted for Option 4");
window.location.replace("sharePollResult.html");
}


// View Result

// function result()
// {
//   // event.preventDefault();
//   window.location.replace("chart.html");
// }
// closing the poll

function confirm (event)
{   
    event.preventDefault();
    alert("Do you want to close this poll?");
    window.location.replace('form1.html');
}


   