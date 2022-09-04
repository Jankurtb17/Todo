<template>
  <div class="flex flex-col">
    <form @submit.prevent>
     
      <h1 class="text-3xl mt-5 mb-5 text-center">Create an Account</h1>
      <input type="text" class="input mb-5 w-full border-b-2 border-slate-200  py-4 pl-2 pr-3 outline-none focus:outline-hidden focus:border-b-2 focus:border-b-sky-500 focus:transition-all focus:ring-0 sm:text-sm" placeholder="Email" v-model="login.email"/>
      <input type="password" class="input mb-5 w-full  border-b-2 border-slate-200  py-4 pl-2 pr-3 outline-none focus:outline-hidden focus:border-b-2 focus:border-b-sky-500 focus:transition-all focus:ring-0 sm:text-sm" placeholder="Password" v-model="login.password"/>
      <button @click="register" class="w-full bg-lime-700 py-3 rounded text-white uppercase font-bold hover:bg-lime-800">Submit</button>
    </form>
    <div class="flex items-center py-4">
      <!-- The left line -->
      <div class="flex-grow h-px bg-gray-200"></div> 

      <!-- Your text here -->
      <span class="flex-shrink text-xl text-gray-500 px-4  font-light uppercase">or</span>

      <!-- The right line -->
      <div class="flex-grow h-px bg-gray-200"></div>
    </div>
    <button @click="signInWithGoogle" class="w-full bg-red-500 py-3 uppercase text-white font-bold text-sm hover:bg-red-700 rounded">Sign in With Google</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
const router = useRouter()
const error = ref(false);
const errMessage = ref("");
type SignIn = {
  email: string,
  password: string
}

let login = ref<SignIn>({
  email: "",
  password: ""
})

const register = () => {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, login.value.email, login.value.password)
  .then((data) => {
    console.log(data);
    router.push("/")
  })
  .catch((error) => {
    console.log(error.message)
  })
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user.displayName);
      router.push("/");
    })
    .catch((error) => {
      console.log(error.message);
    })
}

</script>

<style scoped>


</style>