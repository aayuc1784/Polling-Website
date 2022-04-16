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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();
 
 
 
 //signOut

 function signout(){
    auth.signOut();
    alert("SignOut Successfully from System!!");
    window.location.replace("index.html");    
  }
