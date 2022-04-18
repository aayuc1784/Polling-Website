// Your web app's Firebase configuration
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
    // firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
    function submit(event){
    event.preventDefault();
    firebase.database().ref("polls").push().set({
      title: document.getElementById("title"),
      option1: document.getElementById("option1"),
      option2: document.getElementById("option2"),
      option3: document.getElementById("option3"),
      option4: document.getElementById("option4")
    })
    alert("Please check for spelling mistakes. Once created you will not be able to change the texts of this poll. Proceed?");
    // window.location.replace("sharePoll.html");
  }
    
  //      function share(){
  //      window.location.replace("sharePoll.html");
  //  }

  