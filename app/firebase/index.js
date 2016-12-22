import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyD2vNo7hJStkeCSji7A-jT_RdjcklwoST8",
        authDomain: "todo-app-cb043.firebaseapp.com",
        databaseURL: "https://todo-app-cb043.firebaseio.com",
        storageBucket: "todo-app-cb043.appspot.com",
        messagingSenderId: "625577036850"
    };

    firebase.initializeApp(config);
} catch (e) {
    //
}

export var firebaseRef = firebase
    .database()
    .ref();

export default firebase;