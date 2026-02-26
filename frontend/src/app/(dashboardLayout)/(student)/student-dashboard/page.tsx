import { redirect } from 'next/navigation'
import React from 'react'

const StudentDashboardPage = () => {
  return redirect("/student-dashboard/booking-session")
}

export default StudentDashboardPage

