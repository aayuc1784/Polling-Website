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

  //signup function
  function register(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const promise = auth.createUserWithEmailAndPassword(email,password);
    //
    promise.catch(e=>alert(e.message));
    alert("User Account created successfully!!");
  }

  //signIN function
  function  login(event){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password  = document.getElementById("password").value;
    console.log(email, password)
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch(e=>alert(e.message));
    promise.then(res => alert(res));
  }

  //signOut

  function signout(){
    auth.signOut();
    alert("SignOut Successfully from System!!");
    window.location.replace("index.html");    
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      console.log("user active")
      window.location.replace("form1.html");    
    }else{
      console.log("No user found")
    }
  })

  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email) ==true){
      return true
    } else{
      return false
    }
  }
function validate_password(password) {
    if(password < 6) {
      return false
    } else{
      return true
    }
  }
function validate_field(field){
    if(field==null){
      return false
    }
    if(field.length <= 0){
      return false
    } else {
      return true
    }
}