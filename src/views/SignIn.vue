<template>
  <div class="flex justify-center lg:m-48 sm:mt-20">
    <div class="grid lg:grid-cols-12 md:grid-cols-12 border md:border sm:border-0 shadow-xl sm:shadow-none" id="login-wrapper">
      <div class="sm:hidden md:flex lg:flex col-span-6 bg-gray-200 items-center flex-col">
        <h1 class="text-2xl  mt-10 py-5">JFE Techno Manila</h1>
        <img src="@/assets/team.svg" class=""/>
      </div>
      <div class="flex flex-col col-span-6 px-5 py-5">
        <form @submit.prevent>
          <h1 class="text-3xl mt-10 mb-20 text-center font-medium">Welcome Back</h1>
          <div @click="signInWithGoogle" class="flex items-center justify-center w-full shadow-md border-solid border-2 border-gray-100 py-3 uppercase text-blue-800 font-bold text-sm rounded cursor-pointer mb-5">
            <img src="@/assets/google.svg" />
            <span class="ml-2">sign in with google</span>
          </div>
          <div class="flex items-center mt-5 mb-5">
            <div class="flex-grow h-px bg-gray-200"></div> 
            <span class="flex-shrink text-sm text-gray-400 px-4 font-medium uppercase">or login with email</span>
            <div class="flex-grow h-px bg-gray-200"></div>
          </div>
          <input type="text" class="input mb-5 w-full border border-1 border-slate-200  py-4 pl-2 pr-3 outline-none focus:outline-hidden focus:border-b-2 focus:border-slate-500 focus:transition-all focus:ring-0 sm:text-sm" :class="[errorEmail ? 'errorClass' : 'borderClass']" placeholder="Email" v-model="login.email"/>
          <input type="password" class="input mb-5 w-full border  border-1 border-slate-200  py-4 pl-2 pr-3 outline-none focus:outline-hidden focus:border-b-2 focus:border-slate-500 focus:transition-all focus:ring-0 sm:text-sm" :class="[errorPassword ? 'errorClass' : 'borderClass']" placeholder="Password" v-model="login.password"/>
          <div v-if="errMessage" class="pb-2 px-1 ">
            <span class="text-red-600">{{errMessage}}</span>
          </div>
          <button @click="loginUser" class="w-full bg-indigo-800 py-3 rounded text-white uppercase font-bold hover:bg-indigo-900">login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const router = useRouter()
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

const loginUser = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, login.value.email, login.value.password)
  .then(() => {
    router.push("/")
  })
  .catch((error) => {
    if(login.value.email !== "" && login.value.password !== "") {
      switch(error.code) {
        case "auth/invalid-email":
          errMessage.value = "Please enter a valid email address";
          errorEmail.value = true;
          break;
        case "auth/user-not-found":
          errMessage.value = "No account with that email was found";
          errorEmail.value = true;
          break;
        case "auth/wrong-password":
          errMessage.value = "Password is incorrect";
          errorPassword.value = true
          break;
        default:
          errMessage.value = "Email or password is incorrect"
          errorEmail.value = true;
          errorPassword.value = true
          break;
      }
    } else if (login.value.email !== "" && login.value.password === "") {
      switch(error.code) {
        case "auth/wrong-password":
          errMessage.value = "Password is incorrect";
          errorPassword.value = true;
          errorEmail.value = false;
          break;
        default:
          errMessage.value = "Password is incorrect"
          errorPassword.value = true;
          errorEmail.value = false;
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
      console.log(result.user.email);
      router.push("/");
    })
    .catch((error) => {
      console.log(error.message);
    })
}

</script>

<style scoped>
h1 {
  font-family: 'Roboto';
}

.errorClass {
  border: 1px solid #DC2626
}

.borderClass {
  border: 1px solid #e5e7eb
}
</style>