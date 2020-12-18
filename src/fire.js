import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAE7Ixi37vtxfrmSb_aPJ3HCrnjqwaiKqg",
    authDomain: "pb-final-project.firebaseapp.com",
    projectId: "pb-final-project",
    storageBucket: "pb-final-project.appspot.com",
    messagingSenderId: "416906424987",
    appId: "1:416906424987:web:f7821ea8c903c4b0f4cc3e"
  };

  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }
  const fire = firebase;
  export default fire;