import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Empty = () => <Suspense follback={null}><Outlet /></Suspense>

export default Empty
