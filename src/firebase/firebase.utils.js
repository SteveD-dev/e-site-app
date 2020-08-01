import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// this an API
const config = {
    apiKey: "AIzaSyD4LNiTvgq_fYQVJDUDHjBihHH4wbxkrS0",
    authDomain: "e-site-664a2.firebaseapp.com",
    databaseURL: "https://e-site-664a2.firebaseio.com",
    projectId: "e-site-664a2",
    storageBucket: "e-site-664a2.appspot.com",
    messagingSenderId: "90036532135",
    appId: "1:90036532135:web:530f9c154f9d1b14ad7c82",
    measurementId: "G-FBP607BFQG"
  };

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // to connect to google, first access to provider class 
  const provider = new firebase.auth.GoogleAuthProvider(); 
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  // create profile document
  export const createUserProfileDoc = async (userExist, additionalData) => {
      if(!userExist) return;
      
      const userRef = firestore.doc(`users/${userExist.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists){
          const { displayName, email, } = userExist;
          const createUser = new Date();

          try{
            await userRef.set({
                displayName, 
                email,
                createUser,
                ...additionalData

            })
          }catch(e){
            console.log('error ', e.message);
          }
      }

      return userRef;

  };

  export default firebase;
