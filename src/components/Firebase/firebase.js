import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA45Jmy5wHwMHKYyYRvhuejhSglAYPak24",
    authDomain: "socweb-austin.firebaseapp.com",
    databaseURL: "https://socweb-austin.firebaseio.com",
    projectId: "socweb-austin",
    storageBucket: "socweb-austin.appspot.com",
    messagingSenderId: "232809623813",
    appId: "1:232809623813:web:ae0669ed64b6922c9b076c",
    measurementId: "G-Q4FNWTGCGS"
  };


  class Firebase {
      constructor() {
          app.initializeApp(config);
      }
  }

  export default Firebase;