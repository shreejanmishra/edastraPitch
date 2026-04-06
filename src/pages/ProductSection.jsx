import React from 'react'
import SubNav from '../components/SubNav'
import Preschool from './Preschool'
import TenthBoard from './TenthBoard'
import Scholarships from './Scholarships'
import VRExperience from './VRExperience'

const ProductSection = () => {
  const subNavItems = [
    { id: 'preschool', label: 'Preschool' },
    { id: '10th-board', label: '10th Board' },
    { id: 'scholarships', label: 'Scholarships' },
    { id: 'vr', label: 'VR Experience' },
  ]

  return (
    <div className="flex relative">
      <SubNav items={subNavItems} />
      <div className="ml-64 w-full">
        <div id="preschool"><Preschool /></div>
        <div id="10th-board"><TenthBoard /></div>
        <div id="scholarships"><Scholarships /></div>
        <div id="vr"><VRExperience /></div>
      </div>
    </div>
  )
}

export default ProductSection
