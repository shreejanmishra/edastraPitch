import React from "react";

const Contact = () => {
  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-primary">
            Interested in learning more? Let's connect!
          </h1>

          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-16 text-lg">
              {/* Mail Block */}
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mr-3 mt-1 shrink-0"
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
                <div className="flex flex-col text-gray-500 text-left space-y-2">
                  <a href="mailto:ankita31.agnel@gmail.com" className="hover:text-primary transition-colors">
                    ankita31.agnel@gmail.com
                  </a>
                  <a href="mailto:shrmis1998@gmail.com" className="hover:text-primary transition-colors">
                    shrmis1998@gmail.com
                  </a>
                  <a href="mailto:navsharma1233@gmail.com" className="hover:text-primary transition-colors">
                    navsharma1233@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mr-3 mt-1 shrink-0"
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
                <div className="flex flex-col text-gray-500 text-left space-y-2">
                  <a href="tel:+919152991509" className="hover:text-primary transition-colors">
                    +91 9152991509
                  </a>
                  <a href="tel:+919672026985" className="hover:text-primary transition-colors">
                    +91 9672026985
                  </a>
                  <a href="tel:+919757232991" className="hover:text-primary transition-colors">
                    +91 9757232991
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
