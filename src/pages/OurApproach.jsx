import React, { Suspense } from 'react'
import SubNav from '../components/SubNav'

const Problem = React.lazy(() => import('./Problem'))
const Solution = React.lazy(() => import('./Solution'))
const Ecosystem = React.lazy(() => import('./Ecosystem'))
const Traction = React.lazy(() => import('./Traction'))

const OurApproach = () => {
  const subNavItems = [
    { id: 'problem', label: 'Problem' },
    { id: 'solution', label: 'Solution' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'traction', label: 'Traction' },
  ]

  return (
    <div className="flex relative">
      <SubNav items={subNavItems} />
      <div className="ml-0 pt-14 lg:pt-0 lg:ml-64 w-full">
        <Suspense fallback={null}>
          <div id="problem"><Problem /></div>
          <div id="solution"><Solution /></div>
          <div id="ecosystem"><Ecosystem /></div>
          <div id="traction"><Traction /></div>
        </Suspense>
      </div>
    </div>
  )
}

export default OurApproach
