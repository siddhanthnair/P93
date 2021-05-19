
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCAqYu-GayOTESI93FFlcwWgxTaCy2DeaA",
      authDomain: "kwitter-app-11eaa.firebaseapp.com",
      databaseURL: "https://kwitter-app-11eaa-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-11eaa",
      storageBucket: "kwitter-app-11eaa.appspot.com",
      messagingSenderId: "411370353199",
      appId: "1:411370353199:web:e550e7b7704e6f48470cda"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
