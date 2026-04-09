import React from 'react'
import SubNav from '../components/SubNav'
import Problem from './Problem'
import Solution from './Solution'
import Ecosystem from './Ecosystem'
import Traction from './Traction'

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
      <div className="ml-64 w-full">
        <div id="problem"><Problem /></div>
        <div id="solution"><Solution /></div>
        <div id="ecosystem"><Ecosystem /></div>
        <div id="traction"><Traction /></div>
      </div>
    </div>
  )
}

export default OurApproach
