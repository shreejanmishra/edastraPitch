import React from 'react'
import SubNav from '../components/SubNav'
import FinancialOutlook from './FinancialOutlook'
import ContentEconomics from './ContentEconomics'
import VREconomics from './VREconomics'
import InstitutionalPricing from './InstitutionalPricing'
import RoadAhead from './RoadAhead'
import TechArchitecture from './TechArchitecture'

const FinancialsSection = () => {
  const subNavItems = [
    { id: 'outlook', label: 'Financial Outlook' },
    { id: 'content-economics', label: 'Content Economics' },
    { id: 'vr-economics', label: 'VR Economics' },
    { id: 'pricing', label: 'Institutional Pricing' },
    { id: 'road-ahead', label: 'Road Ahead' },
    { id: 'tech', label: 'Tech Architecture' },
  ]

  return (
    <div className="flex relative">
      <SubNav items={subNavItems} />
      <div className="ml-0 pt-14 lg:pt-0 lg:ml-64 w-full">
        <div id="outlook"><FinancialOutlook /></div>
        <div id="content-economics"><ContentEconomics /></div>
        <div id="vr-economics"><VREconomics /></div>
        <div id="pricing"><InstitutionalPricing /></div>
        <div id="road-ahead"><RoadAhead /></div>
        <div id="tech"><TechArchitecture /></div>
      </div>
    </div>
  )
}

export default FinancialsSection
