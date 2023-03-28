import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/pages/layout';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Layout>
      <main>
      
        <div className="bg-cover bg-center ">
          <div className="flex flex-col justify-center items-start h-full px-8 ">
            <h1 className="text-4xl lg:text-5xl font-bold text-black ">Experience quality <br></br>healthcare services</h1>
            <p className="text-lg lg:text-xl text-black mb-8 py-8">Our team of skilled medical professionals is dedicated to providing
                      <br></br>  exceptional are to help you achieve and maintain optimal health.</p>
            <a href="/appointment" className="px-4 py-2 text-white no-underline bg-blue-500 rounded hover:bg-blue-600">Book Appointment</a>
           
          </div>
        </div>


        
        <div className="w-full hidden lg:block bg-gray-50 border rounded-lg shadow-sm overflow-hidden">
          <div className="max-w-screen-lg flex items-center gap-8 p-10 mx-auto">
            <div className="w-2/3 grid grid-cols-2 gap-8">
            
              <a href="#" className="group flex gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-blue-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>

                <div>
                  <div className="font-semibold mb-1">Walk-In Clinic</div>
                  <p className="text-sm text-gray-500">Walkin consultation for best doctors</p>
                </div>
              </a>
            
              <a href="#" className="group flex gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-blue-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>

                <div>
                  <div className="font-semibold mb-1">General Health Visits</div>
                  <p className="text-sm text-gray-500">General health checkup with experienced doctors at low cost</p>
                </div>
              </a>
            
              <a href="#" className="group flex gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-blue-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>

                <div>
                  <div className="font-semibold mb-1">Travel Immunization</div>
                  <p className="text-sm text-gray-500">Travel Immunization for preventing travel diseases</p>
                </div>
              </a>
              
              <a href="#" className="group flex gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-blue-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>

                <div>
                  <div className="font-semibold mb-1">Flu Shots & Allergy Shots </div>
                  <p className="text-sm text-gray-500">Flu Shots for seasonal flu and allergy shots for preventing allegies</p>
                </div>
              </a>
              
            </div>

          
            <div className="w-1/3 border rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-100">
                <img src="images/service.jpg" loading="lazy" alt="Photo by Fakurian Design" className="w-full h-full object-cover object-center" />
              </div>

              <div className="flex justify-between items-center bg-white gap-2 p-3">
                <p className="text-gray-500 text-sm">Experience quality healthcare services</p>

                <a href="#" className="inline-block shrink-0 bg-white hover:bg-gray-50 active:bg-gray-100 focus-visible:ring ring-indigo-300 text-indigo-500 text-sm font-semibold border rounded-lg outline-none transition duration-100 px-3 py-1">More</a>
              </div>
            </div>
          
          </div>
        </div>
        <div className="bg-gray-100 py-12">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="text-3xl font-bold text-gray-900">Book an Appointment</h2>
      <p className="mt-4 text-lg text-gray-600">Ready to take control of your health and wellness? We're here to help. Book an appointment today to start your journey to a better you.</p>
    </div>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white shadow-md rounded-lg px-8 py-10">
       <img src="/images/login-banner.png"  />             
      </div>

      <div className="bg-white shadow-md rounded-lg px-8 py-10">
        <h3 className="text-xl font-bold text-gray-900 mb-2">In-Person Appointment</h3>
        <p className="text-gray-700 text-base mb-4">For those who prefer to meet with our healthcare providers in person, we offer in-person appointments at our conveniently located office.</p>
        <p className="text-gray-700 text-base mb-4">To schedule an in-person appointment, please visit our office at:</p>
        <p className="text-gray-700 font-bold text-lg">Conestoga<br/> Doon campus,kitchener</p>
        <p className="text-gray-700 text-base mb-4">Our office hours are:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Monday - Friday: 8:00am - 5:00pm</li>
          <li>Saturday: 9:00am - 12:00pm</li>
          <li>Sunday: Closed</li>
        </ul>
       
      </div>
    </div>
  </div>
</div>


        <section className="bg-white dark:bg-gray-900 px-10">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Medical Experts</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Find out the doctors and book online appointment.</p>
                </div> 
                <div className="grid gap-6 mb-6 lg:mb-16 md:grid-cols-4">
                    <div className="items-center px-2 bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="images/1.jpg" alt="Bonnie Avatar"/>
                        </a>
                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Bonnie Green</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Surgeon</span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400"></p>
                            <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> 
                    <div className="items-center px-2 bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="images/2-3.jpg" alt="Jese Avatar"/>
                        </a>
                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Jese Leos</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Physician</span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400"></p>
                            <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>
                               
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> 
                    <div className="items-center px-2 bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="images/3-3.jpg" alt="Michael Avatar"/>
                        </a>
                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Michael Gough</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Cardiologist</span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400"></p>
                            <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> 
                    <div className="items-center px-2 bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="images/6-2.jpg" alt="Sofia Avatar"/>
                        </a>
                        <div className="p-5">
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Lana Byrd</a>
                            </h3>
                            <span className="text-gray-500 dark:text-gray-400">Senior Skin Specialist</span>
                            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400"></p>
                            <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>
                               
                                <li>
                                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>  
                </div>  
            </div>
          </section>
        
      </main>
      </Layout>
    </>
  )
}
