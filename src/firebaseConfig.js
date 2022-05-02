import { initializeApp } from "firebase/app";
import {
  getAuth,
} from "firebase/auth";


export const firebaseConfig = {
  apiKey: "AIzaSyDfKv_90UKeDm-z9oVAOKFwpbIPfSEJUuY",
  authDomain: "meet-clone-d9de2.firebaseapp.com",
  projectId: "meet-clone-d9de2",
  storageBucket: "meet-clone-d9de2.appspot.com",
  messagingSenderId: "375053355695",
  appId: "1:375053355695:web:b34902ef37ff0194e4a25a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  app,
  auth,
};
