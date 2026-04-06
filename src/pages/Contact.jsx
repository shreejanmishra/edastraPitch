import React from 'react'


const Contact = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-primary">
            Interested in learning more? Let's connect!
          </h1>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4 text-lg">
              <p className="flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-300"><a href="mailto:ankita31.agnel@gmail.com">ankita31.agnel@gmail.com</a> | <a href="mailto:shrmis1998@gmail.com">shrmis1998@gmail.com</a></span>
              </p>
              <p className="flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-300"><a href="tel:+91 9152991509">+91 9152991509</a> | <a href="tel:+91 9672026985">+91 9672026985</a> | <a href="tel:+91 9757232991">+91 9757232991</a></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Contact
