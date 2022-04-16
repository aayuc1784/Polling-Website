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


    const database = firebase.firestore();
  
    const form = document.querySelector('#form');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            database.collection('polls').add ({
            title: form.title.value,
            option1: form.option1.value,
            option2: form.option2.value,
            option3: form.option3.value,
            option4: form.option4.value
        });
        alert("Please check for spelling mistakes. Once created you will not be able to change the texts of this poll. Proceed?");
    })

  

  