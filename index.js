 // Import the functions you need from the SDKs you need

//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
    apiKey: "AIzaSyAgMTkWrGmJ_clPsIY5tjuetBuXve13OR0",
    authDomain: "polling-website-363c3.firebaseapp.com",
    projectId: "polling-website-363c3",
    storageBucket: "polling-website-363c3.appspot.com",
    messagingSenderId: "717957251165",
    appId: "1:717957251165:web:7cef99b342200b5864cdb4",
    measurementId: "G-J4YJV4G3JV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = firebase.auth()
  // const database = firebase.database()
  // set up our register function


    // get all input
    email = document.getElementById('email').value
    first_name = document.getElementById('first_name').value
    last_name = document.getElementById('last_name').value
    password = document.getElementById('password').value
     
    // validate input field

    if (validate_email(email) == false || validate_password(password) == false){
      alert('Email or Password is outta line!!')
      // dont run the code
    }

    if (validate_field(first_name)==false || validate_field(last_name)==false){
      alert('Name is outta line!!')
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then(function(){
      var user = auth.currentUser
      var database_ref = database.ref()

      var user_data = {
        email : email,
        first_name : first_name,
        last_name : last_name, 
        last_login : Date.now()

      }

      datebase_ref.child('users/'+user.uid).set(user_data)




      alert('Successfully created user account!!')

    })
    
      .catch (function(error){
      var error_code = error.code
      var error_message = error.message
      alert(error_message)
    })
  

  // set up login function
  function login () {
    // get all input
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    // validate input field
    if (validate_email(email) == false || validate_password(password) == false){
      alert('Email or Password is outta line!!')
      return
      // dont run the code
  } 

  auth.SignInWithEmailAndPassword (email,password)
  .then(function(){
    var user = auth.currentUser

      var database_ref = database.ref()

      var user_data = {
        
        last_login : Date.now()

      }

      datebase_ref.child('users/'+user.uid).update(user_data)




      alert('Logged in Successfully!!')

    })


  .catch(function(error){
      var error_code = error.code
      var error_message = error.message
      alert(error_message)
    })
}


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