var config = {
    apiKey: "AIzaSyD9qth9IjpvqZTYou6hce8lTQ1pls7KfJk",
    authDomain: "cse-134b-b2127.firebaseapp.com",
    databaseURL: "https://cse-134b-b2127.firebaseio.com",
    storageBucket: "cse-134b-b2127.appspot.com",
    messagingSenderId: "298947904638"
};

var app = firebase.initializeApp(config);

var listoffavorites = [];

function addFavoritePresident(userId, president) {
    firebase.database().ref('users/' + userId).set({
        listoffavorites:[president]
    });
}