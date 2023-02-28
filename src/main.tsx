import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Routes } from 'react-router-dom'
import App from './App'
import { AuthorizationProvider } from './Authorization'
import './index.css'
import ProtectedRoute from './ProtectedRoute'

const Layout: React.FC = () => {
    return (
        <main>
            <Outlet />
        </main>
    )
}

const Foo = () => {
  return <p>This should be protected</p>
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="module1">
              <Route path="foo" element={<ProtectedRoute requiredRole="ADMIN"><Foo /></ProtectedRoute>} />
            </Route>
            <Route path="module2" />
            <Route path="forbidden" element={<p>Forbbiden</p>}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthorizationProvider userAuthorizationContext={{ role: 'ADMIN' }}>
            <RouterProvider router={router} />
        </AuthorizationProvider>
    </React.StrictMode>,
)
