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
            <h1 className=" lg:text-5xl sm:text-2xl font-bold text-black ">Experience quality <br></br>healthcare services</h1>
            <p className="lg:text-xl sm-text-xl  text-black mb-8 py-8">Our team of skilled medical professionals is dedicated to providing
                      <br></br>  exceptional are to help you achieve and maintain optimal health.</p>
            <a href="/appointment" className="px-4 py-2 text-white no-underline website-color">Book Appointment</a>
           
          </div>
        </div>
        
        <div className="w-full hidden lg:block bg-gray-50 border rounded-lg shadow-sm overflow-hidden">
          <div className="max-w-screen-lg flex items-center gap-8 p-10 mx-auto">
            <div className="w-2/3 grid grid-cols-2 gap-8">
            
              <a href="#" className="group flex gap-4">
                <div className="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-blue-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
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
                <img src="images/service.jpg" loading="lazy" alt="services" className="w-full h-full object-cover object-center" />
              </div>

              <div className="flex justify-between items-center bg-white gap-2 p-3">
                <p className="text-gray-500 text-sm">Experience quality healthcare services</p>

                <a href="/aboutus" className="inline-block shrink-0 bg-white hover:bg-gray-50 active:bg-gray-100 focus-visible:ring  text-sm font-semibold border rounded-lg outline-none transition duration-100 px-3 py-1">More services</a>
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
       <img src="/images/login-banner.png" alt="appointment banner" />             
      </div>

      <div className="bg-white shadow-md rounded-lg px-8 py-10">
        <h3 className="text-xl font-bold text-gray-900 mb-2">In-Person Appointment</h3>
        <p className="text-gray-700 text-base mb-4">For those who prefer to meet with our healthcare providers in person, we offer in-person appointments at our conveniently located office.</p>
        <p className="text-gray-700 text-base mb-4">To schedule an in-person appointment, please visit our office at:</p>
        <h2 className="text-gray-700 font-bold text-lg">Conestoga<br/> Doon campus,kitchener</h2>
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

        <section className="section section-testimonial m-10">
          <div className="container">
      <h1 className="section-header text-4xl font-bold text-center m-4 mb-8">Testimonials</h1>
      <div className="flex flex-wrap  justify-center">
      <div className="lg:w-full pr-4 pl-4">
      <div className="testimonial-slider">
      <div className=" testimonial-item p-4">
        <div className='testimonial-content '>
         "The clinic staff were very friendly and professional. I felt well taken care of throughout my entire visit."
          <p className="text-gray-600 font-semibold">- Jane Doe</p>
        </div>
        </div>
        <div className=" testimonial-item p-4">
        <div className='testimonial-content'>
        "I had a great experience at the clinic. The doctor was very knowledgeable and made me feel comfortable during the entire procedure."
          <p className="text-gray-600 font-semibold">- John Smith</p>
        </div>
        </div>
        <div className=" testimonial-item p-4">
        <div className='testimonial-content'>
         "The clinic is very clean and well-maintained. I appreciate the attention to detail and the high level of professionalism exhibited by the staff."
          <p className="text-gray-600 font-semibold">- Mary Johnson</p>
        </div>
        </div>
        <div className=" testimonial-item p-4">
        <div className='testimonial-content'>
          "Amazing service, absolutely no wait and got some great help and information. Thank you!"
          <p className="text-gray-600 font-semibold">- Brownie Christopher</p>
        </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </section>

    





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
