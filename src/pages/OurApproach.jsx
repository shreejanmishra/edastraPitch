import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SubNav from '../components/SubNav'
import Problem from './Problem'
import Solution from './Solution'
import Market from './Market'
import BusinessModel from './BusinessModel'
import Traction from './Traction'

const OurApproach = () => {
  const subNavItems = [
    { to: '/our-approach/problem', label: 'Problem' },
    { to: '/our-approach/solution', label: 'Solution' },
    { to: '/our-approach/market', label: 'Market' },
    { to: '/our-approach/business-model', label: 'Business Model' },
    { to: '/our-approach/traction', label: 'Traction' },
  ]

  return (
    <div className="flex">
      <SubNav items={subNavItems} />
      <div className="ml-64 w-full">
        <Routes>
          <Route path="/" element={<Navigate to="/our-approach/problem" replace />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/market" element={<Market />} />
          <Route path="/business-model" element={<BusinessModel />} />
          <Route path="/traction" element={<Traction />} />
        </Routes>
      </div>
    </div>
  )
}

export default OurApproach
