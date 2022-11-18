// Initialize Firebase (ADD YOUR OWN DATA)

  var config = {
    apiKey: "AIzaSyCqYQI4PqJxnPQ8oNjvHm7WUDCkr9auIZ4",
    authDomain: "saloon-df663.firebaseapp.com",
    databaseURL: "https://saloon-df663-default-rtdb.firebaseio.com",
    projectId: "saloon-df663",
    storageBucket: "saloon-df663.appspot.com",
    messagingSenderId: "399760086777",
    appId: "1:399760086777:web:a4bbe170bea5fe8bec7428"
  };

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fullname = getInputVal('fullname');
  var email = getInputVal('email');
  var contact = getInputVal('contact');
  var time = getInputVal('time');
  

  // Save message
  saveMessage(fullname, email, contact, time);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fullname, email, contact, time){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fullname: fullname,
    email:email,
    contact:contact,
    time:time
  });
}