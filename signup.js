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

//   function validate_email(email) {
//     expression = /^[^@]+@\w+(\.\w+)+\w$/
//     if(expression.test(email) ==true){
//       return true
//     } else{
//       return false
//     }
//   }
// function validate_password(password) {
//     if(password < 6) {
//       return false
//     } else{
//       return true
//     }
//   }
// function validate_field(field){
//     if(field==null){
//       return false
//     }
//     if(field.length <= 0){
//       return false
//     } else {
//       return true
//     }
// }