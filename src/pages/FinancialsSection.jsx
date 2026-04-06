import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SubNav from '../components/SubNav'
import FinancialOutlook from './FinancialOutlook'
import ContentEconomics from './ContentEconomics'
import VREconomics from './VREconomics'
import InstitutionalPricing from './InstitutionalPricing'
import RoadAhead from './RoadAhead'
import TechArchitecture from './TechArchitecture'

const FinancialsSection = () => {
  const subNavItems = [
    { to: '/financials/outlook', label: 'Financial Outlook' },
    { to: '/financials/content-economics', label: 'Content Economics' },
    { to: '/financials/vr-economics', label: 'VR Economics' },
    { to: '/financials/pricing', label: 'Institutional Pricing' },
    { to: '/financials/road-ahead', label: 'Road Ahead' },
    { to: '/financials/tech', label: 'Tech Architecture' },
  ]

  return (
    <div className="flex">
      <SubNav items={subNavItems} />
      <div className="ml-64 w-full">
        <Routes>
          <Route path="/" element={<Navigate to="/financials/outlook" replace />} />
          <Route path="/outlook" element={<FinancialOutlook />} />
          <Route path="/content-economics" element={<ContentEconomics />} />
          <Route path="/vr-economics" element={<VREconomics />} />
          <Route path="/pricing" element={<InstitutionalPricing />} />
          <Route path="/road-ahead" element={<RoadAhead />} />
          <Route path="/tech" element={<TechArchitecture />} />
        </Routes>
      </div>
    </div>
  )
}

export default FinancialsSection
