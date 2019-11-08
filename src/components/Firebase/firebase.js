import app from 'firebase/app';
import 'firebase/auth';

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
          this.auth=app.auth();
      }

      //Authentication API Methods
       
    doCreateUserWithEmailAndPassword = (email,password) =>
        this.auth.createUserWithEmailAndPassword(email,password);

    doSignInWithEmailAndPassword = (email,password) =>
        this.auth.signInWithUserWithEmailAndPassword(email,password);
    
    doSignOut = () => this.doSignOut();

    doResetPassword = (email) =>
      this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = (password) =>
      this.auth.currentUser.updatePassword(password);

    
    }
  export default Firebase;