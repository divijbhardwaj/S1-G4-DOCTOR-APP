import Head from 'next/head'
import {onAuthStateChanged} from "firebase/auth";
import fAuth from '@/plugins/firebase'
import { useEffect } from 'react';

// const auth = getAuth();
// const user = auth.currentUser;

const Layout = ({ children }) => {
useEffect(() => {
  onAuthStateChanged(fAuth, (user) => {
    if (user) {
      // console.log(user)
    } else {
      // User is signed out
      // ...
      window.location.href = "/login"
    }
  });
}, [])
  return (
    <>
       <Head>
        <title>DocApp</title>
        <link rel="stylesheet" href="/assets/plugins/fontawesome/css/fontawesome.min.css"/>
        <link rel="stylesheet" href="/assets/plugins/fontawesome/css/all.min.css"/>
        
        <link rel="stylesheet" href="/assets/css/style.css"/>
        
		    <script src="/assets/js/jquery.min.js"></script>
		    <script src="/assets/js/popper.min.js"></script>
        <script src="/assets/plugins/theia-sticky-sidebar/ResizeSensor.js"></script>
        <script src="/assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js"></script>
        
        <script src="/assets/js/circle-progress.min.js"></script>
		    <script src="/assets/js/script.js"></script>
        
      </Head>
     
    <header className="leading-[3rem]">
        <nav className="bg-white  BG-PO border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="#" className="flex items-center">
                  
                <img src="/assets/img/logo.png" className="img-fluid" width="30"/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DocApp</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                    <a href="#"
                      className="text-white no-underline bg-blue-500 rounded hover:bg-blue-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-blue focus:outline-none dark:focus:ring-blue-800">
                      SignUp</a> 
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm tex-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Doctors List</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    
      <main>{children}</main>
      <footer className="footer">
				
				
				<div className="footer-top">
					<div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4">
						<div className="flex flex-wrap ">
							<div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                <div className="footer-widget footer-about">
                    
                    <div className="footer-about-content">
                      <h1 className="text-white font-bold mb-2"><img src="/assets/img/logo.png" className="img-fluid" width="50"/></h1>
                      
                      <p className="tex-white">Conestoga, Doon valley campus</p>
                      <p className="tex-white">(123) 456-7890</p>
                      <p className="tex-white">info@docapp.com</p>
                    </div>
                    </div>
               </div> 
            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
              <div className="footer-widget footer-menu">
                <h3 className="text-white font-bold mb-2">Opening Hours</h3>
                <ul>
                  <li className="text-white"> Monday - Friday: 8am to 7pm</li>
                  <li className="text-white">Saturday - Sunday:Closed</li>
                  <li className="text-white">Public Holidays: Closed</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
            <div className="footer-widget footer-menu">
              <h3 className="text-white font-bold mb-2">Quick Links</h3>
              <ul >
                <li><a href="#" className="tex-white hover:text-white"> <i className="fas fa-angle-double-right"></i>About Us</a></li>
                <li><a href="#" className="tex-white hover:text-white"> <i className="fas fa-angle-double-right"></i>Services</a></li>
                <li><a href="#" className="tex-white hover:text-white"><i className="fas fa-angle-double-right"></i>Doctors</a></li>
                <li><a href="#" className="tex-white hover:text-white"><i className="fas fa-angle-double-right"></i>Contact</a></li>
              </ul>
            </div>
            </div>
            <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
              <h3 className="text-white font-bold mb-2">Newsletter</h3>
              <p className="text-white mb-4">Subscribe to our newsletter to receive updates and news about our hospital.</p>
              <form className="mb-4">
                <div className="flex items-center border-b border-b-2 border-gray-500 py-2">
                  <input className="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Your email address" aria-label="Email address"/>
                  <button className="flex-shrink-0 bg-white hover:bg-gray-100 border-white hover:border-gray-200 text-gray-800 font-semibold py-1 px-2 border rounded" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
          </div>
                </div>
              </div>


        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 "/>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://doctor app.com" target="_blank" className="hover:underline">DocApp</a>. All Rights Reserved.
    </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                </path>
              </svg>
            </a>
            
            <a href="#" className="text-white hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
              </div>
           
       
        
        </footer>
    
    
    </>
  )
}

export default Layout
