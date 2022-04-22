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



firebase.database().ref("Polls/-N0GgEfjQiZF5JF868Kw").on("value",(snapshot)=>{
    document.getElementById("title").innerHTML =""+
    snapshot.val().title;
})
firebase.database().ref("Polls/-N0GgEfjQiZF5JF868Kw").on("value",(snapshot)=>{
  document.getElementById("option1").innerHTML =""+
snapshot.val().option1;
})
firebase.database().ref("Polls/-N0GgEfjQiZF5JF868Kw").on("value",(snapshot)=>{
  document.getElementById("option2").innerHTML =""+
snapshot.val().option2;
})
firebase.database().ref("Polls/-N0GgEfjQiZF5JF868Kw").on("value",(snapshot)=>{
  document.getElementById("option3").innerHTML =""+
snapshot.val().option3;
})

firebase.database().ref("Polls/-N0GgEfjQiZF5JF868Kw").on("value",(snapshot)=>{
  document.getElementById("option4").innerHTML =""+
snapshot.val().option4;
})

firebase.database().ref("Polls/-N0GgEfjQiZF5JF868Kw").on("value",(snapshot)=>{
  document.getElementById("title1").innerHTML =""+
snapshot.val().title;
})



// POLL COUNT 
// const data ={
//     option1 : 0,
//     option2 : 0,
//     option3 : 0,
//     option4 : 0
// }

// [{
//     "label" : "Option 1",
//     "count" : "0"
// },

// {
//     "label" : "Option 2",
//     "count" : "0"
// },

// {
//     "label" : "Option 3",
//     "count" : "0"
// },

// {
//     "label" : "Option 4",
//     "count" : "0"
// }]

// const totalVotes = Object.entries(data).reduce((total,n) => total +=n, 0);
// data = Object.entries(data).map(([label, votes]) => {
//     return {
//         label,
//         count
//     }
// });

// function result(event)

// {
//     event.preventDefault();
//     var count = 0;
//     var poll = document.form.options.value;
   
//     if(poll=="Option 1"){count++
//         document.write("You have voted for Option 1 and poll count for options is Option 1= ",(count),
//         " ,Option 2=0, Option 3=0, Option 4=0");}

//     else if (poll=="Option 2"){count++
//         document.write("You have voted for Option 2 and poll count for options is Option 2= ",(count),
//         " ,Option 1=0, Option 3=0, Option 4=0");}

//     else if(poll=="Option 3"){count++
//         document.write("You have voted for Option 3 and poll count for options is Option 3= ",(count),
//         " ,Option 1=0, Option 2=0, Option 4=0");}

//     else if(poll=="Option 4"){count++
//         document.write("You have voted for Option 4 and poll count for options is Option 4= ",(count),
//         " ,Option 1=0, Option 2=0, Option 3=0");}
    
//     else {
//         document.write("You haven't voted. Please make sure to vote");
//     }
// }
// Poll Count in DataBase


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


   