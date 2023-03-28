import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/pages/layout';
import { useEffect, useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function PatientDashboard() {

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
                          <img src="/assets/img/patients/patient.jpg" alt="User Image"/>
                        </a>
                        <div className="profile-det-info">
                          <h3>Richard Wilson</h3>
                          <div className="patient-details">
                            <h5><i className="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
                            <h5 className="mb-0"><i className="fas fa-map-marker-alt"></i> Newyork, USA</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                        <ul>
                          <li>
                            <a href="/appointment">
                              <i className="fas fa-columns"></i>
                              <span>Book Appointment</span>
                            </a>
                          </li>

                          <li className="active" >
                            <a href="/dashboard/patient">
                              <i className="fas fa-columns"></i>
                              <span>Dashboard</span>
                            </a>
                          </li>
                         
                          
                          <li >
                            <a href="/dashboard/patient/profile-setting">
                              <i className="fas fa-user-cog"></i>
                              <span>Profile Settings</span>
                            </a>
                          </li>
                          <li >
                            <a href="/dashboard/patient/change-password">
                              <i className="fas fa-lock"></i>
                              <span>Change Password</span>
                            </a>
                          </li>
                          <li>
                            <a href="logout">
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
                    <div className="flex-auto p-6 pt-0">
                      <nav className="user-tabs mb-4">
                        <ul className="flex flex-wrap list-none pl-0 mb-0 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200 nav-tabs-bottom">
                          <li>
                            <a className="inline-block py-2 px-4 no-underline active" href="#pat_appointments" data-toggle="tab">Appointments</a>
                          </li>
                          <li>
                            <a className="inline-block py-2 px-4 no-underline" href="#pat_prescriptions" data-toggle="tab">Prescriptions</a>
                          </li>
                          <li >
                            <a className="inline-block py-2 px-4 no-underline" href="#pat_medical_records" data-toggle="tab">Medical Records</a>
                          </li>
                          <li >
                            <a className="inline-block py-2 px-4 no-underline" href="#pat_billing" data-toggle="tab">Billing</a>
                          </li>
                        </ul>
                      </nav>
                      
                      <div className="tab-content">
                        
                        
                        <div id="pat_appointments" className="tab-pane opacity-100 block active">
                          <div className="relative flex flex-col  rounded break-words border bg-white border-1 border-gray-300 card-table ">
                            <div className="flex-auto p-6">
                              <div className="table-responsive block w-full overflow-auto scrolling-touch">
                                <table className=" table table-hover table-center mb-0 w-full max-w-full  ">
                                  <thead>
                                    <tr>
                                      <th>Doctor</th>
                                      <th>Appt Date</th>
                                      <th>Booking Date</th>
                                      <th>Amount</th>
                                      <th>Follow Up</th>
                                      <th>Status</th>
                                      <th>Report</th>
                                    
                                    </tr>
                                  </thead>
                                  <tbody>
                                    { appoinmentData.length ?
                                      appoinmentData.map((d,i) => 
                                        <tr key={i}>
                                          <td>
                                            <h2 className="table-avatar">
                                              <a href="#" className="avatar avatar-sm mr-2">
                                                <img className="avatar-img rounded-full" src="/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image"/>
                                              </a>
                                              <a href="#">{d.name} <span>Dentist</span></a>
                                            </h2>
                                          </td>
                                          <td>{(new Date(d.date)).toLocaleDateString("en-US")} <span className="block text-teal-500">{d.time}</span></td>
                                          <td>{(new Date(d.date)).toLocaleDateString("en-US")}</td>
                                          <td>$160</td>
                                          <td>16 Nov 2019</td>
                                          <td><span className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded rounded-full py-1 px-3 bg-warning-light">{d.report? 'Complete' : 'Pending'}</span></td>
                                          <td>
                                            <a>Report</a>
                                          </td>
                                        </tr> 
                                      ): <></>
                                    }
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                        <div className="tab-pane hidden" id="pat_prescriptions">
                          <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-table mb-0">
                            <div className="flex-auto p-6">
                              <div className="block w-full overflow-auto scrolling-touch">
                                <table className="table w-full max-w-full mb-4 bg-transparent table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Date </th>
                                      <th>Name</th>									
                                      <th>Created by </th>
                                      <th></th>
                                    </tr>     
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>14 Nov 2019</td>
                                      <td>Prescription 1</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a href="#" className="avatar avatar-sm mr-2">
                                            <img className="avatar-img rounded-full" src="/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image"/>
                                          </a>
                                          <a href="#">Dr. Ruby Perrin <span>Dental</span></a>
                                        </h2>
                                      </td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-primary-light">
                                            <i className="fas fa-print"></i> Print
                                          </a>
                                          <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-info-light">
                                            <i className="far fa-eye"></i> View
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
                        
                        <div id="pat_medical_records" className="tab-pane hidden">
                          <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-table mb-0">
                            <div className="flex-auto p-6">
                              <div className="block w-full overflow-auto scrolling-touch">
                                <table className="table w-full max-w-full mb-4 bg-transparent table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>ID</th>
                                      <th>Date </th>
                                      <th>Description</th>
                                      <th>Attachment</th>
                                      <th>Created</th>
                                      <th></th>
                                    </tr>     
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><a href="#">#MR-0010</a></td>
                                      <td>14 Nov 2019</td>
                                      <td>Dental Filling</td>
                                      <td><a href="#">dental-test.pdf</a></td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a href="#" className="avatar avatar-sm mr-2">
                                            <img className="avatar-img rounded-full" src="/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image"/>
                                          </a>
                                          <a href="#">Dr. Ruby Perrin <span>Dental</span></a>
                                        </h2>
                                      </td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-info-light">
                                            <i className="far fa-eye"></i> View
                                          </a>
                                          <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-primary-light">
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
                        
                        <div id="pat_billing" className="tab-pane hidden">
                          <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-table mb-0">
                            <div className="flex-auto p-6">
                              <div className="block w-full overflow-auto scrolling-touch">
                                <table className=" table w-full max-w-full mb-4 bg-transparent table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Invoice No</th>
                                      <th>Doctor</th>
                                      <th>Amount</th>
                                      <th>Paid On</th>
                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <a href="#">#INV-0010</a>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a href="#" className="avatar avatar-sm mr-2">
                                            <img className="avatar-img rounded-full" src="/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image"/>
                                          </a>
                                          <a href="#">Ruby Perrin <span>Dental</span></a>
                                        </h2>
                                      </td>
                                      <td>$450</td>
                                      <td>14 Nov 2019</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-info-light">
                                            <i className="far fa-eye"></i> View
                                          </a>
                                          <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-primary-light">
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
                </div>
              </div>

            </div>

          </div>		
        
        </main>
      </Layout>
    </>
  )
}