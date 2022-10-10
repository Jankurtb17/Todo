import { defineStore } from 'pinia'
import { getAuth } from "firebase/auth";
import { ref, computed } from "vue";
const auth = getAuth()
const user = auth.currentUser

export const useStore = defineStore('main', {
  state: () => ({
    email: null
  }),
  actions: {
    getUser() {
      return this.email = user.email
    }
  }
});

export default useStore;