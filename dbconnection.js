var firebaseConfig = {
    apiKey: "AIzaSyAhIBbuqJsBsrEqUy4TKhtdIJlZz6TWZ9w",
    authDomain: "you-todo.firebaseapp.com",
    databaseURL: "https://you-todo-default-rtdb.firebaseio.com",
    projectId: "you-todo",
    storageBucket: "you-todo.appspot.com",
    messagingSenderId: "621514574729",
    appId: "1:621514574729:web:7c27622791ed1dd2d82f58",
    measurementId: "G-6GY9NPPBLZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  firebase.analytics();