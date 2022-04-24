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

    function register(event){
        event.preventDefault();
        var email = document.getElementById("email");
        var password = document.getElementById("password");
    
        const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
        promise.catch(e=>alert(e.message));
        alert("Congratulations!! Account Created Successfully");
      }

  //signIN function
  function  login(event){
    event.preventDefault();
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
  }

  //signOut

  function signOut(){
    auth.signOut();
    alert("Sign Out Successfully from the Polling Website!!");
    window.location.replace("index.html");    
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Welcome to the Polling Website "+email);
      window.location.replace("sharePoll.html");    
    }else{
      alert("No Active user Found")
    }
  })
  function create()
  {
      window.location.replace("signInbeforePoll.html");
  }