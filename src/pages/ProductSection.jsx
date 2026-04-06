import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SubNav from '../components/SubNav'
import Preschool from './Preschool'
import TenthBoard from './TenthBoard'
import Scholarships from './Scholarships'
import VRExperience from './VRExperience'

const ProductSection = () => {
  const subNavItems = [
    { to: '/product/preschool', label: 'Preschool' },
    { to: '/product/10th-board', label: '10th Board' },
    { to: '/product/scholarships', label: 'Scholarships' },
    { to: '/product/vr', label: 'VR Experience' },
  ]

  return (
    <div className="flex">
      <SubNav items={subNavItems} />
      <div className="ml-64 w-full">
        <Routes>
          <Route path="/" element={<Navigate to="/product/preschool" replace />} />
          <Route path="/preschool" element={<Preschool />} />
          <Route path="/10th-board" element={<TenthBoard />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/vr" element={<VRExperience />} />
        </Routes>
      </div>
    </div>
  )
}

export default ProductSection
