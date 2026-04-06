import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SubNav from '../components/SubNav'
import Team from './Team'
import Contact from './Contact'

const TeamSection = () => {
  const subNavItems = [
    { to: '/team/members', label: 'Team Members' },
    { to: '/team/contact', label: 'Contact Us' },
  ]

  return (
    <div className="flex">
      <SubNav items={subNavItems} />
      <div className="ml-64 w-full">
        <Routes>
          <Route path="/" element={<Navigate to="/team/members" replace />} />
          <Route path="/members" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default TeamSection
