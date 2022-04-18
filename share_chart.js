// Your web app's Firebase configuration

import { func } from "prop-types";

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDocgi7fDUPxuerhGrl0dcoVCtowM9jGVs",
    authDomain: "login-page-mini-insta.firebaseapp.com",
    projectId: "login-page-mini-insta",
    storageBucket: "login-page-mini-insta.appspot.com",
    messagingSenderId: "634135320881",
    appId: "1:634135320881:web:3c4de66a75e06531c3f810",
    measurementId: "G-5L3R0FMEJ6"
  };
     
    const database = firebase.database(); 
    import './style5.css'; 
    const {user} = user();
    const uid = user.uid;
   function addDataToPollPage(){
       var title = document.getElementById('title');
       var option1 = document.getElementById('option1');
       var Option2 = document.getElementById('option2');
       var Option3 = document.getElementById('option3');
       var Option4 = document.getElementById('option4');
   }
    
//    fetch data from firebase

function fetchAllData(){
    firebase.firestore().ref('polls').once('value', function(snapshot){
        snapshot.forEach(
            function(childSnapshot){
                let title = childSnapshot.val().Title;
                let option1 = childSnapshot.val().Option1;
                let option2 = childSnapshot.val().Option2;
                let option3 = childSnapshot.val().Option3;
                let option4 = childSnapshot.val().Option4;
                addDataToPollPage(title,option1,option2,option3,option4);
            }
    )
    });
    
}
window.onload(fetchAllData);




// POLL COUNT 
const data ={
    option1 : 0,
    option2 : 0,
    option3 : 0,
    option4 : 0
}

[{
    "label" : "Option 1",
    "count" : "0"
},

{
    "label" : "Option 2",
    "count" : "0"
},

{
    "label" : "Option 3",
    "count" : "0"
},

{
    "label" : "Option 4",
    "count" : "0"
}]

const totalVotes = Object.entries(data).reduce((total,n) => total +=n, 0);
data = Object.entries(data).map(([label, votes]) => {
    return {
        label,
        percentage: (((100*votes)/totalVotes ))
    }
});

   