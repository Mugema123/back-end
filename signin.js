var firebaseConfig = {
    apiKey: "AIzaSyCSowyLOaWbzEkrDpqfxOsltEmj6PD7uNU",
    authDomain: "personal-web-cbe9c.firebaseapp.com",
    databaseURL: "https://personal-web-cbe9c.firebaseio.com",
    projectId: "personal-web-cbe9c",
    storageBucket: "personal-web-cbe9c.appspot.com",
    messagingSenderId: "822165723878",
    appId: "1:822165723878:web:49d84b415625d58847f927",
    measurementId: "G-YW30PXMQS4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  // Reference messages collection
  let db = firebase.firestore();


  // authentication
  document.querySelector('#form2').addEventListener('submit', (e) => {
	e.preventDefault();
	let email = document.querySelector('#emailsignin').value;
	let password = document.querySelector('#passwordsignin').value;
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((user) => {
			window.location.href = 'admin.html';
		})
		.catch((error) => {
			console.log(error);
		});
});

// check auth state
firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		window.location.href = 'admin.html';
	}
});