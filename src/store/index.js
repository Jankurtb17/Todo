import { defineStore } from 'pinia'
import { getAuth } from "firebase/auth";
import { ref } from "vue";

export const useStore = defineStore('main', () => {
  const name = ref()
  const auth = getAuth()
  const user = auth.currentUser
  const displayUser = () => {
    if(user !== null) {
      name.value = user.displayName
    }
  }
  return {
    displayUser
  }
});