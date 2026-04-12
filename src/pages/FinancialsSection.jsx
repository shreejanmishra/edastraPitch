import React, { Suspense } from 'react'
import SubNav from '../components/SubNav'

const FinancialOutlook = React.lazy(() => import('./FinancialOutlook'))
const ContentEconomics = React.lazy(() => import('./ContentEconomics'))
const VREconomics = React.lazy(() => import('./VREconomics'))
const InstitutionalPricing = React.lazy(() => import('./InstitutionalPricing'))
const RoadAhead = React.lazy(() => import('./RoadAhead'))
const TechArchitecture = React.lazy(() => import('./TechArchitecture'))

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
        <Suspense fallback={null}>
          <div id="outlook"><FinancialOutlook /></div>
          <div id="content-economics"><ContentEconomics /></div>
          <div id="vr-economics"><VREconomics /></div>
          <div id="pricing"><InstitutionalPricing /></div>
          <div id="road-ahead"><RoadAhead /></div>
          <div id="tech"><TechArchitecture /></div>
        </Suspense>
      </div>
    </div>
  )
}

export default FinancialsSection
