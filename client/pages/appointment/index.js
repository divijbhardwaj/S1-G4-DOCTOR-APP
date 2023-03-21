import Layout from '@/pages/layout';

export default function Appointment() {
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      number: form.phone.value,
      email: form.email.value,
      date: form.date.value,
      time: form.time.value,
      area: form.area.value,
      city: form.city.value,
      state: form.state.value,
      zip: form['post-code'].value,
      desc: form.message.value
    }

    const response = await fetch('http://localhost:3009/book-appointment', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    alert('appoinment booked');


    // console.log(response);

  }
  return (<>
    <Layout>
    <div className="breadcrumb-bar">
				<div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4">
					<div className="flex flex-wrap  items-center">
						<div className="md:w-full pr-4 pl-4 w-full">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="flex flex-wrap list-reset pt-3 pb-3 py-4 px-4 mb-4 bg-gray-200 rounded">
									<li className="inline-block px-2 py-2 text-gray-700"><a href="/">Home /</a></li>
									<li className="inline-block px-2 py-2 text-gray-700 active" aria-current="page">Booking</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Book an Appoinment</h2>
						</div>
					</div>
				</div>
			</div>
      <section className='p-5'>          
        <div className="mx-auto w-full max-w-[550px]">
          <h2 className="text-3xl font-bold text-gray-900 m-10">Book an Appointment</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="time"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="mb-5 pt-3">
              <label
                className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl"
              >
                Address Details
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Enter area"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter city"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Enter Province"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="post-code"
                      id="post-code"
                      placeholder="Zip Code"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Illness Description
              </label>
              <textarea name="message" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your illness here..."></textarea>

            </div>
            <div>
              <button
                className="hover:shadow-form w-full rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  </>)
}