var firebaseConfig  = {
  apiKey: "AIzaSyCqUbFGSKEcqJvG4a_MfBuJm6ZetvCQ0zY",
  authDomain: "replacord-2337f.firebaseapp.com",
  databaseURL: "https://replacord-2337f-default-rtdb.firebaseio.com",
  projectId: "replacord-2337f",
  storageBucket: "replacord-2337f.appspot.com",
  messagingSenderId: "151127618954",
  appId: "1:151127618954:web:dd95e0973e429e87ecc473",
  measurementId: "G-SZMNGB4233"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

let name = 'name3'
let Banned = ['name1','name2']

//Ban Checker
// Says your safe
if (Banned.indexOf(name) == -1){
  
  console.log(name + ' is a good person')
  
  
}
// Says that you have been banned
else{
  
  console.log('what did you do ' + name)
  alert(name)
  
  
}