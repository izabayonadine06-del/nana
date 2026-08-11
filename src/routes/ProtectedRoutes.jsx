import { Navigate } from 'react-router-dom'

function ProtectedRoutes({ children, roles }) {
  const token = localStorage.getItem('token')

  if (!token) {
    return <Navigate to="/login" replace />
  }

  let payload
  try {
    payload = JSON.parse(atob(token.split('.')[1]))
  } catch (error) {
    return <Navigate to="/login" replace />
  }

  if (roles && !roles.includes(payload?.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  return children
}

export default ProtectedRoutes;
