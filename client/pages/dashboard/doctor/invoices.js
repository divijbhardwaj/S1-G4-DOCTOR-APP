

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
											<li className="active">
												<a href="/dashboard/doctor/invoices">
													<i className="fas fa-file-invoice"></i>
													<span>Invoices</span>
												</a>
											</li>
											
											<li  >
												<a href="/dashboard/doctor/profile-setting">
													<i className="fas fa-user-cog"></i>
													<span>Profile Settings</span>
												</a>
											</li>
											
											<li >
												<a href="/dashboard/doctor/change-password">
													<i className="fas fa-lock"></i>
													<span>Change Password</span>
												</a>
											</li>
											<li>
												<a href="//logout">
													<i className="fas fa-sign-out-alt"></i>
													<span>Logout</span>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
                </div>
                
                <div className="md:w-3/5 pr-4 pl-4 lg:w-2/3 pr-4 pl-4 xl:w-3/4 pr-4 pl-4 py-2">
                <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                <div className="flex-auto p-6 card-table">

                <div className=" table-responsive block w-full overflow-auto scrolling-touch">
                    <table className="table  mb-4 bg-transparent table-hover table-center mb-0">
                    <thead>
                    <tr>
                    <th>Invoice No</th>
                    <th>Patient</th>
                    <th>Amount</th>
                    <th>Paid On</th>
                    <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className='p-3'>
                    <td>
                    <a href="invoice-view">#INV-0010</a>
                    </td>
                    <td>
                    <h2 className="table-avatar">
                    <a href="patient-profile.html" className="avatar avatar-sm me-2">
                    <img className="avatar-img rounded-full" src="/assets/img/patients/patient.jpg" alt="User Image"/>
                    </a>
                    <a href="patient-profile.html">Richard Wilson <span>#PT0016</span></a>
                    </h2>
                    </td>
                    <td>$450</td>
                    <td>14 Nov 2019</td>
                    <td className="text-end">
                    <div className="table-action">
                    <a href="invoice-view.html" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-info-light">
                    <i className="far fa-eye"></i> View
                    </a>
                    <a href="javascript:void(0);" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-primary-light">
                    <i className="fas fa-print"></i> Print
                    </a>
                    </div>
                    </td>
                    </tr>
                    <tr>
                    <td>
                    <a href="invoice-view">#INV-0010</a>
                    </td>
                    <td >
                    <h2 className="table-avatar">
                    <a href="patient-profile.html" className="avatar avatar-sm me-2">
                    <img className="avatar-img rounded-full" src="/assets/img/patients/patient.jpg" alt="User Image"/>
                    </a>
                    <a href="patient-profile.html">Richard Wilson <span>#PT0016</span></a>
                    </h2>
                    </td>
                    <td>$450</td>
                    <td>14 Nov 2019</td>
                    <td className="text-end">
                    <div className="table-action">
                    <a href="invoice-view.html" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-info-light">
                    <i className="far fa-eye"></i> View
                    </a>
                    <a href="javascript:void(0);" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-primary-light">
                    <i className="fas fa-print"></i> Print
                    </a>
                    </div>
                    </td>
                    </tr>
                    </tbody>
                    </table>
                    </div>
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