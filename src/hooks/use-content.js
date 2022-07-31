import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { collection, getDocs} from "firebase/firestore";
import { db } from '../lib/firebase.prod';



export default function useContent(target) {
  const [content, setContent] = useState([]);

//   const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    getDocs(collection(db, target))
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { [target]: content };
}