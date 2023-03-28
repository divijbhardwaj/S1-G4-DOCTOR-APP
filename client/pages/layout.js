import Head from 'next/head'
import {onAuthStateChanged} from "firebase/auth";
import fAuth from '@/plugins/firebase'
import { useEffect } from 'react';
import { useRouter } from 'next/router'

// const auth = getAuth();
// const user = auth.currentUser;

const Layout = ({ children }) => {
  const route = useRouter();
useEffect(() => {
  onAuthStateChanged(fAuth, (user) => {
    if (user || ['/login', '/'].includes(route.pathname)) {
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
        <script src="/assets/js/slick.js"></script>
        <script src="/assets/js/circle-progress.min.js"></script>
		    <script src="/assets/js/script.js"></script>

        
      </Head>
     
    <header className="leading-[3rem]">
        <nav className="bg-white  BG-PO border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/" className="flex items-center">
                  
                <img src="/assets/img/logo.png" className="img-fluid" width="30" alt="header logo"/>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DocApp</span>
                </a>
                <div className="flex items-center lg:order-2">
                    <a href="/login" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                    <a href="/register"
                      className="text-white no-underline website-color rounded focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-blue focus:outline-none dark:focus:ring-blue-800">
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
                            <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Services</a>
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
							<div className="lg:w-1/4 pr-4 pl-4 sm:w-1/1 ">
                <div className="footer-widget footer-about">
                    
                    <div className="footer-about-content">
                      <h1 className="text-white font-bold mb-2">
                        <img src="/assets/img/logo.png" className="img-fluid" width="50" alt="footer logo"/></h1>
                      
                      <p className="tex-white">Conestoga, Doon valley campus</p>
                      <p className="tex-white">(123) 456-7890</p>
                      <p className="tex-white">info@docapp.com</p>
                    </div>
                    </div>
               </div> 
                <div className="lg:w-1/4 pr-4 pl-4  sm:w-1/1 ">
                  <div className="footer-widget footer-menu">
                  
                    <h2 className="text-white font-bold mb-2">Opening Hours</h2>
                    <ul>
                      <li className="text-white"> Monday - Friday: 8am to 7pm</li>
                      <li className="text-white">Saturday - Sunday:Closed</li>
                      <li className="text-white">Public Holidays: Closed</li>
                    </ul>
                   
                  </div>
                </div>
                <div className="lg:w-1/4 pr-4 pl-4  sm:w-1/1 ">
                <div className="footer-widget footer-menu ">
                
                  <h3 className="text-white font-bold mb-2">Quick Links</h3>
                  <ul >
                    <li><a href="#" className="tex-white hover:text-white"> <i className="fas fa-angle-double-right"></i>About Us</a></li>
                    <li><a href="#" className="tex-white hover:text-white"> <i className="fas fa-angle-double-right"></i>Services</a></li>
                    <li><a href="#" className="tex-white hover:text-white"><i className="fas fa-angle-double-right"></i>Doctors</a></li>
                    <li><a href="#" className="tex-white hover:text-white"><i className="fas fa-angle-double-right"></i>Contact</a></li>
                  </ul>
                </div>
                </div>
                
                <div className="lg:w-1/4 pr-4 pl-4  sm:w-1/1 ">
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


        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700"/>
        <div className="flex justify-center">
          <p className="text-sm text-white text-center dark:text-gray-400">© 2023 <a href="https://doctor app.com" target="_blank" className="hover:underline">DocApp</a>. All Rights Reserved.
          </p>
         
        </div>
              </div>
           
       
        
        </footer>
    
    
    </>
  )
}

export default Layout
