import React, { Suspense } from 'react'
import SubNav from '../components/SubNav'

const Team = React.lazy(() => import('./Team'))
const Contact = React.lazy(() => import('./Contact'))

const TeamSection = () => {
  const subNavItems = [
    { id: 'members', label: 'Team Members' },
    { id: 'contact', label: 'Contact Us' },
  ]

  return (
    <div className="flex relative">
      <SubNav items={subNavItems} />
      <div className="ml-0 pt-14 lg:pt-0 lg:ml-64 w-full">
        <Suspense fallback={null}>
          <div id="members"><Team /></div>
          <div id="contact"><Contact /></div>
        </Suspense>
      </div>
    </div>
  )
}

export default TeamSection
