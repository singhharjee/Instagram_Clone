import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
  apiKey: "AIzaSyApfVMZx-rA2AJa0URqyhy87B9WYEl92vo",
      authDomain: "instagram-yt-a891b.firebaseapp.com",
      projectId: "instagram-yt-a891b",
      storageBucket: "instagram-yt-a891b.appspot.com",
      messagingSenderId: "122816413989",
      appId: "1:122816413989:web:45539e9f5df7ab9781dacc"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;



export { firebase, FieldValue };
