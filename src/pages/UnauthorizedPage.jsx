import React from 'react'

function UnauthorizedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md text-center">
        <h1 className="text-2xl font-semibold text-gray-900">Unauthorized</h1>
        <p className="mt-4 text-gray-600">You do not have permission to view this page.</p>
      </div>
    </main>
  )
}

export default UnauthorizedPage
