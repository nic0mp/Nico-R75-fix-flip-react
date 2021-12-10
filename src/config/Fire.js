import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBh5VnJzJgG2iLdhS8sfkOBaPlWUYkq008",
    authDomain: "fixflip-app.firebaseapp.com",
    projectId: "fixflip-app",
    storageBucket: "fixflip-app.appspot.com",
    messagingSenderId: "919297367100",
    appId: "1:919297367100:web:bfa109fd5d188408baf739",
    measurementId: "${config.measurementId}"
}

const fire = firebase.initializeApp(config);
export default fire;