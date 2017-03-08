var config = {
    apiKey: "AIzaSyD9qth9IjpvqZTYou6hce8lTQ1pls7KfJk",
    authDomain: "cse-134b-b2127.firebaseapp.com",
    databaseURL: "https://cse-134b-b2127.firebaseio.com",
    storageBucket: "cse-134b-b2127.appspot.com",
    messagingSenderId: "298947904638"
};
var listOfFavs = [];
var app = firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
    	if(window.location == "file:///Users/TheShire/Google%20Drive/UCSD/Winter%202017/CSE%20134B/cse134/public/assignment4/framework/hw4/wireframes/favorites.html")
      		myFavs(firebaseUser.uid); //dont call if on presidents
      console.log(firebaseUser.email + " is logged in!" );
    } else {
      console.log('not logged in');
    }
});
// var listoffavorites = [];

function addFavoritePresident(userId, president) {
	//reveal unfav button
	document.getElementById('favBtn').style.zIndex = 0;
	alert(president.presidentname + " was favorited.");
    var favListRef = firebase.database().ref('users/' + userId + '/listoffavorites');
    var newFav = favListRef.push();
    newFav.set(president);
}
function removeFavoritePresident(userId, president) {
	
	document.getElementById('favBtn').style.zIndex = 2;
	alert("unfav: " + president.presidentname);
	// alert(president.presidentname + " was favorited.");
 //    var favListRef = firebase.database().ref('users/' + userId + '/listoffavorites');
 //    var newFav = favListRef.push();
 //    newFav.set(president);
}


function myFavs(userId){
	var ref = firebase.database().ref('users/' + userId+ '/listoffavorites');
	
	ref.on("child_added", function(data, prevChildKey) {
		var newFavPres = data.val();
		console.log("profile_link: " + newFavPres.profile_link);
		console.log("image_source: " + newFavPres.image_source);
		console.log("presidentname: " + newFavPres.presidentname);

		document.getElementById('favBtn').style.zIndex = 0;
		
		var div = document.createElement('div');
		div.className += ('pure-u-1 pure-u-md-1-3');
        div.innerHTML += '<section align="center"> <a href="presidentprofiles/' + newFavPres.profile_link + '" > ' +
        '<img src="pres_images/'+  newFavPres.image_source +'" ' +  'alt="' + newFavPres.presidentname + '">'+ '</a><p>' + newFavPres.presidentname+ '</p></section>';

		document.getElementById('list').appendChild(div);


	});
}










