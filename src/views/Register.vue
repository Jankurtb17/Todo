<template>
  <div class="grid grid-cols-12 mt-40 border" id="register-wrapper">
    <div class="col-span-6 bg-gray-200  flex items-center flex-col">
      <h1 class="text-2xl  mt-10 py-5">JFE Techno Manila</h1>
      <img src="@/assets/team.svg" class=""/>
    </div>
    <div class="flex flex-col col-span-6 px-5 py-5">
      <form @submit.prevent>
        <h1 class="text-3xl mt-10 mb-20 text-center font-medium">Create an account</h1>
        <div @click="signInWithGoogle" class="flex items-center justify-center w-full shadow-md border-solid border-2 border-gray-100 py-3 uppercase text-blue-800 font-bold text-sm rounded cursor-pointer mb-5">
          <img src="@/assets/google.svg" />
          <span class="ml-2">Sign in with google</span>
        </div>
        <div class="flex items-center mt-5 mb-5">
          <div class="flex-grow h-px bg-gray-200"></div> 
          <span class="flex-shrink text-sm text-gray-400 px-4 font-medium uppercase">or register using an email</span>
          <div class="flex-grow h-px bg-gray-200"></div>
        </div>
        <input type="text" class="input mb-5 w-full border border-1 border-slate-200  py-4 pl-2 pr-3 outline-none focus:outline-hidden focus:border-b-2 focus:border-slate-500 focus:transition-all focus:ring-0 sm:text-sm" :class="[errorEmail ? 'errorClass' : 'borderClass']" placeholder="Email" v-model="login.email"/>
        <input type="password" class="input mb-5 w-full border  border-1 border-slate-200  py-4 pl-2 pr-3 outline-none focus:outline-hidden focus:border-b-2 focus:border-slate-500 focus:transition-all focus:ring-0 sm:text-sm" :class="[errorPassword ? 'errorClass' : 'borderClass']" placeholder="Password" v-model="login.password"/>
        <div v-if="errMessage" class="pb-2 px-1 ">
          <span class="text-red-600">{{errMessage}}</span>
        </div>
        <button @click="register" class="w-full bg-indigo-800 py-3 rounded text-white uppercase font-bold hover:bg-indigo-900">Register</button>
      </form>
      
    </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
const router = useRouter()
const error = ref(false);
const errorEmail = ref(false);
const errorPassword = ref(false);
const errMessage = ref();
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
    if(login.value.email !== "" && login.value.password !== "") {
      switch(error.code) {
        case "auth/email-already-exists":
          errMessage.value = "Email already exists"
          errorEmail.value = true;
          break;
        case "auth/invalid-email":
          errMessage.value = "Invalid Email"
          errorEmail.value = true;
          break;
        case "auth/WEAK_PASSWORD":
          errMessage.value = "Provide atleast 6 password"
          errorPassword.value = true;
        default:
          errMessage.value = ""
          errorEmail.value = true;
          errorPassword.value = true;
          break;
      }
    } else {
      errMessage.value = "Email or Password should not be empty"
      errorEmail.value = true;
      errorPassword.value = true;
    }
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
.errorClass {
  border: 1px solid #DC2626
}.borderClass {
  border: 1px solid #e5e7eb
}

</style>