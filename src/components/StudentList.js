import React, { useContext } from 'react'
import { AppContext } from '../context/Context'

export default function StudentList() {
  const { student_ar, deleteStudent,/*upgradeStudent*/ } = useContext(AppContext)

  return (
    <div>
      <h2>List of added Students:</h2>
      <div className='row'>
        {student_ar.map(item => {
          return (
            <div key={item.id} className='col-md-8 border my-1 py-2 shadow-sm'>
               <button className='float-end bg-danger' onClick={() => {
                deleteStudent(item.id)
              }}>delete</button>
              
              {/* <button className=' float-end bg-warning' onClick={() => {
                upgradeStudent(item.id)
              }}>upgrade</button> */}
              <h5>Name: {item.name} <br /> 
              Grade: {item.grade}</h5>
            </div>
          )
        })}
        {/* <div className='col-md-8 border my-3 py-2'>
          <button className='float-end bg-danger'>X</button>
          <h5>Bamba - 5</h5>
        </div> */}
      </div>
    </div>
  )
}
