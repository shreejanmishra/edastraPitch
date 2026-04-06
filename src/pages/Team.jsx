import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  const coFounders = [
    {
      name: 'Ankita Kumar',
      role: 'Founder & Tech Architect',
      bio: 'Founder and technology builder with expertise in scalable digital platforms, data-driven systems, and product architecture. Combines strong technical execution with strategic product vision to build platforms designed for global scale and operational efficiency.',
    },
    {
      name: 'Nav Sharma',
      role: 'Founder & Creative Director',
      bio: 'Media and storytelling specialist with expertise in digital video production and content platforms. Experienced in crafting compelling visual narratives and building high-quality media pipelines, with a focus on creating immersive edutainment experiences at scale.',
    },
    {
      name: 'Shreejan Mishra',
      role: 'Founder & UI/UX Specialist',
      bio: 'Frontend engineer specializing in scalable, high-performance web platforms built with React.js. Leveraging AI-assisted development to ship products faster, eliminating 30+ FTE effort, improved load times by 90%, and boosted user efficiency by up to 75%.',
    },
  ]

  const teamMembers = [
    {
      name: 'Atif Kader',
      role: 'Marketing Head',
    },
    {
      name: 'Satyam Gupta',
      role: 'Back End Founding Engineer',
    },
    {
      name: 'Riya Sharma',
      role: 'Children Psychologist',
    },
    {
      name: 'Rajat Shah',
      role: 'Finance & Compliance Partner',
    },
  ]

  return (
    <div className="min-h-screen pt-20 bg-[#F5F2DE] flex flex-col">
      <div className="section-container flex-grow">
        {/* Founders slide image */}
        <div className="mb-12">
          <img
            src="/images/page_19_img_1.png"
            alt="Edastra Founders"
            className="max-w-full mx-auto rounded-lg shadow-2xl shadow-primary/10 border border-primary/20"
          />
        </div>

        {/* Co-Founders */}
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">Co-Founders</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {coFounders.map((member, index) => (
            <div
              key={index}
              className="bg-dark-lighter border border-primary/20 p-8 rounded-xl shadow-lg text-center hover:shadow-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="w-32 h-32 bg-dark-light border-2 border-primary/30 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
              <p className="text-primary font-semibold mb-4">{member.role}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Extended Team */}
        <h2 className="text-3xl font-bold mb-8 text-primary text-center">Team</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-dark-lighter border border-primary/20 p-6 rounded-xl shadow-lg text-center hover:shadow-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="w-24 h-24 bg-dark-light border-2 border-primary/30 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-bold mb-2 text-white">{member.name}</h3>
              <p className="text-primary font-semibold text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 pb-8 mt-8">
        <div className="flex justify-between">
          <Link
            to="/financials/tech"
            className="px-6 py-3 bg-dark-lighter border border-primary/20 text-white rounded-lg hover:bg-dark-light hover:border-primary/40 transition-all"
          >
            ← Previous
          </Link>
          <Link
            to="/team/contact"
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
