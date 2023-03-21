import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/pages/layout';
import { useEffect, useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function DoctorDashboard() {

async function getData(setData) {
  const response = await fetch('http://localhost:3009/get-appointments', {
    method: "GET"
  });
  const list = await response.json();
  setData(list)
  console.log(list);
}

const [appoinmentData, setAppoinmentData] = useState([]);

useEffect(() => {
   if(!appoinmentData.length) {
      getData(setAppoinmentData);
   }
}, [appoinmentData])

  return (
    <>
   
      <Layout>
        <main>
        
          <div className="breadcrumb-bar">
            <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4">
              <div className="flex flex-wrap  items-center">
                <div className="md:w-full pr-4 pl-4 w-full">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="flex flex-wrap list-reset pt-3 pb-3 py-4 px-4 mb-4 bg-gray-200 rounded">
                      <li className="inline-block px-2 py-2 text-gray-700"><a href="/">Home /</a></li>
                      <li className="inline-block px-2 py-2 text-gray-700 active" aria-current="page">Dashboard</li>
                    </ol>
                  </nav>
                  <h2 className="breadcrumb-title">Dashboard</h2>
                </div>
              </div>
            </div>
          </div>
          
          <div className="content">
            <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4">

              <div className="flex flex-wrap ">
                
              
                <div className="md:w-2/5 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 xl:w-1/4 pr-4 pl-4 theiaStickySidebar">
                <div className="profile-sidebar">
								<div className="widget-profile pro-widget-content">
									<div className="profile-info-widget">
										<a href="#" className="booking-doc-img">
											<img src="/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image"/>
										</a>
										<div className="profile-det-info">
											<h3>Dr. Darren Elder</h3>
											
											<div className="patient-details">
												<h5 className="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
											</div>
										</div>
									</div>
								</div>
								<div className="dashboard-widget">
                <nav className="dashboard-menu">
										<ul>
											<li >
												<a href="/dashboard/doctor">
													<i className="fas fa-columns"></i>
													<span>Dashboard</span>
												</a>
											</li>
											<li>
												<a href="/dashboard/doctor/appointments">
													<i className="fas fa-calendar-check"></i>
													<span>Appointments</span>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fas fa-user-injured"></i>
													<span>My Patients</span>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fas fa-hourglass-start"></i>
													<span>Schedule Timings</span>
												</a>
											</li>
											<li>
												<a href="/dashboard/doctor/invoices">
													<i className="fas fa-file-invoice"></i>
													<span>Invoices</span>
												</a>
											</li>
											
											<li  className="active">
												<a href="/dashboard/doctor/profile-setting">
													<i className="fas fa-user-cog"></i>
													<span>Profile Settings</span>
												</a>
											</li>
											
											<li>
												<a href="/dashboard/doctor/change-password">
													<i className="fas fa-lock"></i>
													<span>Change Password</span>
												</a>
											</li>
											<li>
												<a href="/logout">
													<i className="fas fa-sign-out-alt"></i>
													<span>Logout</span>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
                </div>
                
                <div class="md:w-3/5 pr-4 pl-4 lg:w-2/3 pr-4 pl-4 xl:w-3/4 pr-4 pl-4 py-2">
                <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                <div class="flex-auto p-6 ">

                <form>
                <div class="flex flex-wrap  flex flex-wrap -mr-1 -ml-1 ">
                <div class="w-full md:w-full pr-4 pl-4">
                <div class="mb-4">
                <div class="change-avatar">
                <div class="profile-img">
                <img src="/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image"/>
                </div>
                <div class="upload-img">
                <div class="change-photo-btn">
                <span><i class="fa fa-upload"></i> Upload Photo</span>
                <input type="file" class="upload"/>
                </div>
                <small class="block mt-1 text-gray-700">Allowed JPG, GIF or PNG. Max size of 2MB</small>
                </div>
                </div>
                </div>
                </div>
                <div class="md:w-1/2 pr-4 pl-4">
                  <div class="mb-4">
                  <label>Username <span class="text-red-600">*</span></label>
                  <input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" readonly=""/>
                  </div>
                  </div>
                  <div class="md:w-1/2 pr-4 pl-4">
                  <div class="mb-4">
                  <label>Email <span class="text-red-600">*</span></label>
                  <input type="email" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" readonly=""/>
                  </div>
                  </div>
                  <div class="md:w-1/2 pr-4 pl-4">
                  <div class="mb-4">
                  <label>First Name <span class="text-red-600">*</span></label>
                  <input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"/>
                  </div>
                  </div>
                  <div class="md:w-1/2 pr-4 pl-4">
                  <div class="mb-4">
                  <label>Last Name <span class="text-red-600">*</span></label>
                  <input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"/>
                  </div>
                  </div>
                  <div class="md:w-1/2 pr-4 pl-4">
                  <div class="mb-4">
                  <label>Phone Number</label>
                  <input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"/>
                  </div>
                  </div>
                  <div class="md:w-1/2 pr-4 pl-4">
                  <div class="mb-4">
                  <label>Gender</label>
                  <select class=" block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded " >
                  <option >Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  </select>
                  </div>
                  </div>
                  <div class="md:w-1/2 pr-4 pl-4">
                  <div class="mb-4 mb-0">
                  <label>Date of Birth</label>
                  <input type="text" class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"/>
                  </div>
                  </div>
                  </div>
                  <div class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                  <div class="flex-auto p-6">
                  <h4 class="mb-3">About Me</h4>
                  <div class="mb-4 mb-0">
                  <label>Biography</label>
                  <textarea class="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" rows="5"></textarea>
                  </div>
                  </div>
                  </div>
                  <div class="submit-section mt-4">
                  <button type="submit" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 submit-btn">Save Changes</button>
                  </div>
                </form>

                </div>
                </div>
                </div>
              </div>

            </div>

          </div>		
        
        </main>
      </Layout>
    </>
  )
}