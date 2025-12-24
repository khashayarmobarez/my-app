import React from 'react'
import Form from 'next/form'

function page() {
  return (
    <Form action="/search/result" className='flex gap-2 p-4' >
      <input type="text" name="query" className='border border-gray-300 rounded-md p-2' />
      <button type="submit">Search</button>
    </Form>
  )
}

export default page
