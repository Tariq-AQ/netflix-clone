import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const config = {
    apiKey: "AIzaSyAIovPVXW-tftuyowwU9Pl85VNs5WGEHoY",
  authDomain: "netflix-clone-66a11.firebaseapp.com",
  projectId: "netflix-clone-66a11",
  storageBucket: "netflix-clone-66a11.appspot.com",
  messagingSenderId: "437619849988",
  appId: "1:437619849988:web:2b4611eb01714288916e51"
}

const firebase = initializeApp(config);
const db = getFirestore(firebase);
// seedDatabase(firebase);
export {firebase, db};