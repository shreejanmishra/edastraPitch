import React from 'react'
import { Link } from 'react-router-dom'

const BusinessModel = () => {
  const revenueStreams = [
    'Revenue stream 1',
    'Revenue stream 2',
    'Revenue stream 3',
  ]

  const pricingTiers = [
    {
      name: 'Basic',
      price: '$XX/month',
      features: ['Feature 1', 'Feature 2'],
      featured: false,
    },
    {
      name: 'Pro',
      price: '$XX/month',
      features: ['All Basic features', 'Feature 3', 'Feature 4'],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['All Pro features', 'Custom solutions'],
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen pt-20 pb-16 bg-black">
      <div className="section-container">
        
        {/* Display the actual slide images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Business Model</h3>
            <img
              src="/images/page_7_img_1.png"
              alt="Business Model"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Pricing Strategy</h3>
            <img
              src="/images/page_8_img_1.png"
              alt="Pricing"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="bg-dark-lighter border border-primary/20 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-primary">Revenue Streams</h3>
            <ul className="space-y-3">
              {revenueStreams.map((stream, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mr-3 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">{stream}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-primary">Pricing Strategy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl text-center ${
                    tier.featured
                      ? 'bg-primary text-black transform scale-105 shadow-xl shadow-primary/20'
                      : 'bg-dark-lighter border border-primary/20 shadow-lg'
                  }`}
                >
                  <h4 className="text-xl font-bold mb-4">{tier.name}</h4>
                  <p className="text-3xl font-bold mb-6">{tier.price}</p>
                  <ul className="space-y-2 text-sm">
                    {tier.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12">
          <Link
            to="/product"
            className="px-6 py-3 bg-dark-lighter border border-primary/20 text-white rounded-lg hover:bg-dark-light hover:border-primary/40 transition-all"
          >
            ← Previous
          </Link>
          <Link
            to="/traction"
            className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-all font-semibold"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BusinessModel
