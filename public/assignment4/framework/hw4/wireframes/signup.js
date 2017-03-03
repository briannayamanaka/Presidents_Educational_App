window.onload = function(){
          // Initialize Firebase
		console.log("hi!");
	  // Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyD9qth9IjpvqZTYou6hce8lTQ1pls7KfJk",
	    authDomain: "cse-134b-b2127.firebaseapp.com",
	    databaseURL: "https://cse-134b-b2127.firebaseio.com",
	    storageBucket: "cse-134b-b2127.appspot.com",
	    messagingSenderId: "298947904638"
	  };
	  firebase.initializeApp(config);


	var txtEmail = document.getElementById('email');
	var txtPassword = document.getElementById('password');
	var signupBtn = document.getElementById('submit');
	var emailPop = document.getElementById('emailPop');
	var passPop = document.getElementById('passPop');


	signupBtn.addEventListener('click', e => {
	    const email = txtEmail.value;
	    const password = txtPassword.value;
	    emailPop.style.visibility = 'hidden';
		emailPop.style.display = 'none';	    		
		passPop.style.visibility = 'hidden';
		passPop.style.display = 'none';	    		


	    if(email == ""){
	    	console.log("Empty email.");
	    	emailPop.style.visibility = 'visible';
	    	emailPop.style.display = 'block';
	    }
	   	if(password.length < 6){
	    	console.log("Empty password.");
	    	passPop.innerHTML = "Invalid Password <br> Must be 6 characters or more";
	    	passPop.style.visibility = 'visible';
	    	passPop.style.display = 'block';

	    }

	    console.log("email: " + email + "\npassword: " + password);
	    const auth = firebase.auth();
	    const promise = auth.createUserWithEmailAndPassword(email, password);
	    promise.catch(
	    	function(e){
	    		if(e.code == "auth/email-already-in-use"){
	    			passPop.innerHTML = "Email already in use. Click Sign In link below!";
			    	passPop.style.visibility = 'visible';
			    	passPop.style.display = 'block';	    		
		    	}
		    	if(e.code == "auth/invalid-email"){
	    			emailPop.innerHTML = "Invalid Email";
			    	emailPop.style.visibility = 'visible';
			    	emailPop.style.display = 'block';	    		
		    	}
	    		console.log(e.code);
	    	}
	    );

  	});
	firebase.auth().signOut();
  	firebase.auth().onAuthStateChanged(firebaseUser => {
	    if(firebaseUser) {
	    	window.location = "after_signup.html"
	      console.log(firebaseUser);
	      console.log(firebaseUser.email + " is logged in!" );
	    } else {
	      console.log('not logged in');
	    }
  	});
 }
