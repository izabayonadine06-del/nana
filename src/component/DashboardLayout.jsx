import SideBar from "./sidebar.jsx"
function DashboardLayout({children}) {
  return (
    <div className="flex min-h-screen bg-secondary-50">
        <SideBar />
        <main className="flex p-6">
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout