import React from 'react'
import { cookies } from 'next/headers'

function AdminPanel() {

    const cookieStore = await cookies()
    const token = cookieStore.get('token')

  return (
    <div>
      
    </div>
  )
}

export default AdminPanel
