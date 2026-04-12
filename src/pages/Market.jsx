import React from 'react'


const Market = () => {
  const marketData = [
    {
      label: 'TAM',
      value: '$XXB',
      description: 'Total Addressable Market',
    },
    {
      label: 'SAM',
      value: '$XXB',
      description: 'Serviceable Available Market',
    },
    {
      label: 'SOM',
      value: '$XXM',
      description: 'Serviceable Obtainable Market',
    },
  ]

  return (
    <div className="min-h-[100vh] py-24 bg-[#FAFCFF] flex flex-col border-b border-[#C8E6F7]">
      <div className="section-container flex-grow">
       
        {/* Display the actual slide images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Market Size</h3>
            <img
              src="/images/page_4_img_1.webp"
              alt="Market Opportunity"
              className="w-full rounded-lg border border-primary/20 shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Competition Analysis</h3>
            <img
              src="/images/page_15_img_1.webp"
              alt="Competition"
              className="w-full rounded-lg border border-primary/20 shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {marketData.map((item, index) => (
            <div
              key={index}
              className="bg-dark-lighter border border-primary/20 p-8 rounded-xl shadow-lg text-center hover:shadow-primary/20 hover:border-primary/40 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{item.label}</h3>
              <p className="text-5xl font-bold text-primary mb-4">
                {item.value}
              </p>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  )
}

export default Market
