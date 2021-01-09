import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Default = () => <div className="default-layout"><Suspense fallback={null}><Outlet /></Suspense></div>

export default Default
