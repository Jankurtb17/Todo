import firebase from 'firebase';
import { ref, onUnmounted } from 'vue';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsXwadglpNccVPBrmqNHt3yQHipkH_-yI",
  authDomain: "todo-ceb51.firebaseapp.com",
  projectId: "todo-ceb51",
  storageBucket: "todo-ceb51.appspot.com",
  messagingSenderId: "926542903835",
  appId: "1:926542903835:web:84127aca517d5450c896be",
  measurementId: "G-5269R9P1E8"
};

// Initialize Firebase

const fireBaseApp = firebase.initializeApp(firebaseConfig)

const db = fireBaseApp.firestore()
const todoCollection = db.collect('todo')

export const createTodo = todo => {
  return todoCollection.add(todo)
}

export const getTodo = async (id) => {
  const todo = await todoCollection.doc(id).get()
  return todo.exists ? todo.data() : null
}

export const updateTodo = async (id, data) => {
  return todoCollection.doc(id).udpate(data)
}

export const deleteTodo = async (id) => {
  return todoCollection.doc(id).delete()
}

export const useLoadTodo = () => {
  const todos = ref([])
  const close = todoCollection.onSnapshot(snapshot => {
    todos.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data}))
  })

  onUnmounted(close)
  return todos;
}