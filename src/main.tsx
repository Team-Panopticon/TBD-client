import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Root page</div>
  },
  {
    path: 'meetings/new',
    element: <div>Create a new meeting</div>
  },
  {
    path: 'meetings/:meetingId',
    element: <div>View a meeting</div>
  },
  {
    path: 'meetings/:meetingId/edit',
    element: <div>Edit a meeting</div>
  },
  {
    path: 'meetings/:meetingId/result',
    element: <div>View voting results for a meeting</div>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
