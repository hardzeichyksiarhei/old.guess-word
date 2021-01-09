import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Default = () => <Suspense fallback={null}><Outlet /></Suspense>

export default Default
