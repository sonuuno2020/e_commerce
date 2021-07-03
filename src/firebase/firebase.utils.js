import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
    apiKey: "AIzaSyCBjAqOJxcFX2vDGgNe27k75Dj0kcs4ZyM",
    authDomain: "crwn-db-2b033.firebaseapp.com",
    projectId: "crwn-db-2b033",
    storageBucket: "crwn-db-2b033.appspot.com",
    messagingSenderId: "542583792855",
    appId: "1:542583792855:web:bc6c783ff7158b92d1fc92",
    measurementId: "G-HYYGGB9S6E"
  };

export const createUserProfileDocument= async(userAuth,additionalData)=>{
	if(!userAuth) return ;

	const userRef=firestore.doc(`users/${userAuth.uid}`)

	const snapShot=await userRef.get()
	

	if(!snapShot.exists){
		const {displayName,email}=userAuth;

		const createdAt=new Date();
		try{
			await userRef.set(
				{displayName,
								email,
								createdAt,
								...additionalData})
		}catch(error){
			console.log("error creating user",error.message);
		}
	}

	return userRef;

}


firebase.initializeApp(Config); 

export const auth=firebase.auth();
export const firestore=firebase.firestore();


const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt :"select_account"});

export const SignInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;