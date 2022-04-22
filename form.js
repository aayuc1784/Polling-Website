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
    
 
    function submit ()
    {
      firebase.database().ref("Polls").push().set({
      countOption1: 0,
      countOption2: 0,
      countOption3: 0,
      countOption4: 0,
      title: document.getElementById("title").value,
      option1: document.getElementById("option1").value,
      option2: document.getElementById("option2").value,
      option3: document.getElementById("option3").value,
      option4: document.getElementById("option4").value
      
    })
    alert("Please check for spelling mistakes. Once created you will not be able to change the texts of this poll. Proceed?");
    // window.location.replace('sharePoll.html');

    const pollId = firebase.database().ref("Polls").push().key;
    console.log(pollId);
}
// closing the Poll

  function close()
  {
    alert("Do You want to close the Poll?");
    window.location.replace('form1.html');
  }


  

