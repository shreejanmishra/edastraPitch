import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  const coFounders = [

    {
      name: 'Shreejan Mishra',
      role: 'Founding Engineer & Co-Founder',
      bio: 'Brief bio and relevant experience.',
    },
        {
      name: 'Ankita Kumar',
      role: 'CEO & Co-Founder',
      bio: 'Brief bio and relevant experience.',
    },
    {
      name: 'Nav Sharma',
      role: 'Creative Director & Co-Founder',
      bio: 'Brief bio and relevant experience.',
    },
  ]

    const teamMembers = [

    {
      name: 'Atif Kadar',
      role: 'Marketing Head',
      bio: 'Brief bio and relevant experience.',
    },
        {
      name: 'Satyam Gupta',
      role: 'Backend Founding Engineer',
      bio: 'Brief bio and relevant experience.',
    },
    {
      name: 'Riya Sharma',
      role: 'Child Psychologist',
      bio: 'Brief bio and relevant experience.',
    },
  ]
  return (
    <div className="min-h-screen pt-20 pb-16 bg-black">
      <div className="section-container">
     
        {/* Display the actual slide images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Team Members</h3>
            <img
              src="/images/page_11_img_1.png"
              alt="Team"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Advisors</h3>
            <img
              src="/images/page_12_img_1.png"
              alt="Advisors"
              className="w-full rounded-lg shadow-xl shadow-primary/10 border border-primary/20"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {coFounders.map((member, index) => (
            <div
              key={index}
              className="bg-dark-lighter border border-primary/20 p-8 rounded-xl shadow-lg text-center hover:shadow-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="w-32 h-32 bg-dark-light border-2 border-primary/30 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
              <p className="text-primary font-semibold mb-4">{member.role}</p>
              <p className="text-gray-300 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-dark-lighter border border-primary/20 p-8 rounded-xl shadow-lg text-center hover:shadow-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="w-32 h-32 bg-dark-light border-2 border-primary/30 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
              <p className="text-primary font-semibold mb-4">{member.role}</p>
              <p className="text-gray-300 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-12">
          <Link
            to="/traction"
            className="px-6 py-3 bg-dark-lighter border border-primary/20 text-white rounded-lg hover:bg-dark-light hover:border-primary/40 transition-all"
          >
            ← Previous
          </Link>
          <Link
            to="/financials"
            className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-all font-semibold"
          >
            Next →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Team
