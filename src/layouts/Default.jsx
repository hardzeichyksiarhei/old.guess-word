import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Spin } from 'antd'

const Default = () => <div className="default-layout">
    <Suspense fallback={<Spin size="large" />}>
        <Outlet />
    </Suspense>
</div>

export default Default
