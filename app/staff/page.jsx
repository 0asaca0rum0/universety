import React from 'react'
import Teacher from '../components/teacher'

export default function page() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <p className='text-2xl'>list of staffs in the faculty</p>
      <p className='text-xl'>year 2023-2024</p>
      <Teacher />
    </div>
  )
}
