import fAuth from "@/plugins/firebase";
import {signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import Alert from "@/components/Alert";

function handleSubmit(e, setEmailVerified){
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  
  loginFunc(email, password, setEmailVerified);
}

function loginFunc(email, password, setEmailVerified) {
  signInWithEmailAndPassword(fAuth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setEmailVerified(user.emailVerified);
      if(!user.emailVerified) {
        alert('Please verify your email')
      } else {
        window.location.href = "/dashboard/patient"
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

export default function Login() {
  const [emailVerified , setEmailVerified] = useState('');
  const [verifyEmailAlert, setVerifyEmailAlert] = useState(false);

  // useEffect(() => {
  //   if(typeof emailVerified === "boolean" && !emailVerified) {
  //     // setVerifyEmailAlert(true)
  //     alert('verify email then try loggin in')
  //   }
  // }, [emailVerified])

  return (
    <>
      <section className="bg-gray-50 light:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow light:border md:mt-0 sm:max-w-md xl:p-0 light:bg-gray-800 light:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl light:text-white">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={(e) => {handleSubmit(e,setEmailVerified)}}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="name@domain.com" required/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" required/>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 light:bg-gray-700 light:border-gray-600 light:focus:ring-primary-600 light:ring-offset-gray-800" required=""/>
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="remember" className="text-gray-500 light:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline light:text-primary-500">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-primary-600 light:hover:bg-primary-700 light:focus:ring-primary-800">Sign in</button>
                        <p className="text-sm font-light text-gray-500 light:text-gray-400">
                            Don’t have an account yet? <a  className="font-medium text-primary-600 hover:underline light:text-primary-500" href="/register">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}