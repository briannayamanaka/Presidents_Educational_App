var config = {
    apiKey: "AIzaSyD9qth9IjpvqZTYou6hce8lTQ1pls7KfJk",
    authDomain: "cse-134b-b2127.firebaseapp.com",
    databaseURL: "https://cse-134b-b2127.firebaseio.com",
    storageBucket: "cse-134b-b2127.appspot.com",
    messagingSenderId: "298947904638"
};
var app = firebase.initializeApp(config);
var finalSubmissionURL = "https://cse-134b-b2127.firebaseapp.com/assignment4/framework/hw4/wireframes/favorites.html";
var debugURL = "file:///Users/TheShire/Google%20Drive/UCSD/Winter%202017/CSE%20134B/cse134/public/assignment5/framework/hw5/wireframes/favorites.html";
//change debugURL to your URL that is displayed when you click on the my favorites tab


firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
    // 	console.log(window.location);
    if(window.location == debugURL) //only search users database if on my favorites page
      	myFavs(firebaseUser.uid); //populates users favorites
    else
    	isFav(firebaseUser.uid);
      console.log(firebaseUser.email + " is logged in!" );
    } else {
      console.log('not logged in');
    }
});

function addFavoritePresident(userId, president) {
	//reveal unfav button
	document.getElementById('favBtn').style.zIndex = 0;
	// alert(president.presidentname + " was favorited.");
    var favListRef = firebase.database().ref('users/' + userId + '/listoffavorites');
    var newFav = favListRef.push();
    newFav.set(president);
    listOfFavs.push(president);
}
function removeFavoritePresident(userId, president) {
	var currentPresName = president.presidentname; //taken from specifc_president.html script (i.e. johnadams.html has a script with his name)
	document.getElementById('favBtn').style.zIndex = 2;
	var ref = firebase.database().ref('users/' + userId+ '/listoffavorites');
	
	ref.once('value',function(snapshot){
			snapshot.forEach(function(childSnapshot) { //check each fav president if match change fav button
		    var childKey = childSnapshot.key;
		    var childData = childSnapshot.val();
		    // console.log(childKey);
		    if(childData.presidentname == currentPresName){
		    	//show unfav button ontop
		    	ref.child(childKey).remove();
		    	document.getElementById('favBtn').style.zIndex = 2;
		    	
		    	// alert("unfav: " + president.presidentname);
		    }
	  	});
	});
}
function myFavs(userId){
	var ref = firebase.database().ref('users/' + userId+ '/listoffavorites');
	ref.once('value',function(snapshot){
		snapshot.forEach(function(childSnapshot){ //check each fav president if match change fav button
		    var newFavPres = childSnapshot.val();

		    var div = document.createElement('div');
			div.className += ('pure-u-1 pure-u-md-1-3');
	        div.innerHTML += '<section align="center"> <a href="presidentprofiles/' + newFavPres.profile_link + '" > ' +
	        '<img src="pres_images/'+  newFavPres.image_source +'" ' +  'alt="' + newFavPres.presidentname + '">'+ '</a><p>' + newFavPres.presidentname+ '</p></section>';

			document.getElementById('list').appendChild(div);	
  		});
	});
}

function isFav(userId){
	var currentPresName = president.presidentname; //taken from specifc_president.html script (i.e. johnadams.html has a script with his name)
	var ref = firebase.database().ref('users/' + userId+ '/listoffavorites');
	ref.once('value',function(snapshot){
			snapshot.forEach(function(childSnapshot) { //check each fav president if match change fav button
		    var childData = childSnapshot.val();
		    // console.log(childKey);
		    if(childData.presidentname == currentPresName){
		    	//show unfav button ontop
		    	document.getElementById('favBtn').style.zIndex = 0;
		    }
	    // ...
	  	});
	});
}



