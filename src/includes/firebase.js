import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB5KQEOjKzij8XUXKcNkbuEayEXqZL9ZVA',
  authDomain: 'virtual-meetings-274116.firebaseapp.com',
  projectId: 'virtual-meetings-274116',
  storageBucket: 'virtual-meetings-274116.appspot.com',
  appId: '1:934658742837:web:c671af4711a81210582f7c',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
