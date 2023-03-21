import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/pages/layout';
const inter = Inter({ subsets: ['latin'] })

export default function DoctorDashboard() {
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
									<li className="inline-block px-2 py-2 text-gray-700"><a href="#">Home /</a></li>
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
											<li className="active">
												<a href="#">
													<i className="fas fa-columns"></i>
													<span>Dashboard</span>
												</a>
											</li>
											<li>
												<a href="#">
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
												<a href="#">
													<i className="fas fa-file-invoice"></i>
													<span>Invoices</span>
												</a>
											</li>
											
											<li>
												<a href="#">
													<i className="fas fa-user-cog"></i>
													<span>Profile Settings</span>
												</a>
											</li>
											
											<li>
												<a href="#">
													<i className="fas fa-lock"></i>
													<span>Change Password</span>
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fas fa-sign-out-alt"></i>
													<span>Logout</span>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
							
							
						</div>
						
						<div className="md:w-3/5 pr-4 pl-4 lg:w-2/3 pr-4 pl-4 xl:w-3/4 pr-4 pl-4">

							<div className="flex flex-wrap ">
								<div className="md:w-full pr-4 pl-4">
									<div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 dash-card">
										<div className="flex-auto p-6">
											<div className="flex flex-wrap ">
												<div className="md:w-full pr-4 pl-4 lg:w-1/3 pr-4 pl-4">
													<div className="dash-widget dct-border-rht">
														<div className="circle-bar circle-bar1">
															<div className="circle-graph1" data-percent="75">
																<img src="/assets/img/icon-01.png" className="max-w-full h-auto" alt="patient"/>
															</div>
														</div>
														<div className="dash-widget-info">
															<h6>Total Patient</h6>
															<h3>1500</h3>
															<p className="text-gray-700">Till Today</p>
														</div>
													</div>
												</div>
												
												<div className="md:w-full pr-4 pl-4 lg:w-1/3 pr-4 pl-4">
													<div className="dash-widget dct-border-rht">
														<div className="circle-bar circle-bar2">
															<div className="circle-graph2" data-percent="65">
																<img src="/assets/img/icon-02.png" className="max-w-full h-auto" alt="Patient"/>
															</div>
														</div>
														<div className="dash-widget-info">
															<h6>Today Patient</h6>
															<h3>160</h3>
															<p className="text-gray-700">06, Nov 2019</p>
														</div>
													</div>
												</div>
												
												<div className="md:w-full pr-4 pl-4 lg:w-1/3 pr-4 pl-4">
													<div className="dash-widget">
														<div className="circle-bar circle-bar3">
															<div className="circle-graph3" data-percent="50">
																<img src="/assets/img/icon-03.png" className="max-w-full h-auto" alt="Patient"/>
															</div>
														</div>
														<div className="dash-widget-info">
															<h6>Appoinments</h6>
															<h3>85</h3>
															<p className="text-gray-700">06, Apr 2019</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="flex flex-wrap ">
								<div className="md:w-full pr-4 pl-4">
									<h4 className="text-xl mt-4 mb-6">Patient Appoinment</h4>
                                    <nav className="user-tabs mb-4">
                                        <ul className="flex flex-wrap list-none pl-0 mb-0 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200 nav-tabs-bottom">
                                            <li >
												<a className="inline-block py-2 px-4 no-underline active" href="#upcoming-appointments" data-toggle="tab">Upcoming</a>
											</li>
											<li >
												<a className="inline-block py-2 px-4 no-underline" href="#today-appointments" data-toggle="tab">Today</a>
											</li> 
										</ul>
										</nav>
										
										<div className="tab-content">
										
											
											<div className="tab-pane opacity-100 block active" id="upcoming-appointments">
												<div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-table mb-0">
													<div className="flex-auto p-6">
														<div className="block w-full overflow-auto scrolling-touch">
															<table className="table w-full max-w-full mb-4 bg-transparent table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Patient Name</th>
																		<th>Appt Date</th>
																		<th>Purpose</th>
																		<th>Type</th>
																		<th className="text-center">Paid Amount</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<a href="#" className="avatar avatar-sm mr-2">
                                                                                    <img className="avatar-img rounded-full" src="/assets/img/patients/patient.jpg" alt="User Image"/></a>
																				<a href="#">Richard Wilson <span>#PT0016</span></a>
																			</h2>
																		</td>
																		<td>11 Nov 2019 <span className="block text-teal-500">10.00 AM</span></td>
																		<td>General</td>
																		<td>New Patient</td>
																		<td className="text-center">$150</td>
																		<td className="text-right">
																			<div className="table-action">
																				<a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-info-light">
																					<i className="far fa-eye"></i> View
																				</a>
																				
																				<a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-success-light">
																					<i className="fas fa-check"></i> Accept
																				</a>
																				<a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-danger-light">
																					<i className="fas fa-times"></i> Cancel
																				</a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<a href="#" className="avatar avatar-sm mr-2">
                                                                                    <img className="avatar-img rounded-full" src="/assets/img/patients/patient1.jpg" alt="User Image"/></a>
																				<a href="#">Charlene Reed <span>#PT0001</span></a>
																			</h2>
																		</td>
																		<td>3 Nov 2019 <span className="block text-teal-500">11.00 AM</span></td>
																		<td>General</td>
																		<td>Old Patient</td>
																		<td className="text-center">$200</td>
																		<td className="text-right">
																			<div className="table-action">
																				<a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-info-light">
																					<i className="far fa-eye"></i> View
																				</a>
																				
																				<a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-success-light">
																					<i className="fas fa-check"></i> Accept
																				</a>
																				<a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-danger-light">
																					<i className="fas fa-times"></i> Cancel
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
											
											<div className="tab-pane hidden" id="today-appointments">
												<div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-table mb-0">
													<div className="flex-auto p-6">
														<div className="block w-full overflow-auto scrolling-touch">
															<table className="table w-full max-w-full mb-4 bg-transparent table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>Patient Name</th>
																		<th>Appt Date</th>
																		<th>Purpose</th>
																		<th>Type</th>
																		<th className="text-center">Paid Amount</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<h2 className="table-avatar">
																				<a href="#" className="avatar avatar-sm mr-2">
                                                                                    <img className="avatar-img rounded-full" src="/assets/img/patients/patient6.jpg" alt="User Image"/></a>
																				<a href="#">Elsie Gilley <span>#PT0006</span></a>
																			</h2>
																		</td>
																		<td>14 Nov 2019 <span className="block text-teal-500">6.00 PM</span></td>
																		<td>Fever</td>
																		<td>Old Patient</td>
																		<td className="text-center">$300</td>
																		<td className="text-right">
																			<div className="table-action">
																				<a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-info-light">
																					<i className="far fa-eye"></i> View
																				</a>
																				
																				<a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-success-light">
																					<i className="fas fa-check"></i> Accept
																				</a>
																				<a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline py-1 px-2 leading-tight text-xs  bg-danger-light">
																					<i className="fas fa-times"></i> Cancel
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