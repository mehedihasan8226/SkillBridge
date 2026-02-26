import { redirect } from 'next/navigation'
import React from 'react'

const AdminDashboard = () => {
  return redirect("/admin-dashboard/categories")
}

export default AdminDashboard