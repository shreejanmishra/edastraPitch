import React from 'react'
import SubNav from '../components/SubNav'
import Team from './Team'
import Contact from './Contact'

const TeamSection = () => {
  const subNavItems = [
    { id: 'members', label: 'Team Members' },
    { id: 'contact', label: 'Contact Us' },
  ]

  return (
    <div className="flex relative">
      <SubNav items={subNavItems} />
      <div className="ml-0 pt-14 lg:pt-0 lg:ml-64 w-full">
        <div id="members"><Team /></div>
        <div id="contact"><Contact /></div>
      </div>
    </div>
  )
}

export default TeamSection
