import React, { lazy } from 'react'

const MockPage = lazy(() => {})

const routes = () => [
    { path: '/', element: <MockPage /> },
]

export default routes