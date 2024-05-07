import React from 'react'
import StudentForm from '../components/StudentForm'
import StudentList from '../components/StudentList'

export default function StudentPage() {
  return (
    <div className='container'>
      <StudentForm />
      <StudentList />
    </div>
  )
}
