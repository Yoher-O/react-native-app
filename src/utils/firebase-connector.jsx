import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyC5pseAA966swUguFCoQG6E8qGHdtwR_Hc",
  authDomain: "boats-by-tour.firebaseapp.com",
  databaseURL: "https://boats-by-tour.firebaseio.com",
  projectId: "boats-by-tour",
  storageBucket: "boats-by-tour.appspot.com",
  messagingSenderId: "738038087532",
  appId: "1:738038087532:web:3cc042e7eb00198b053d49"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig);
;