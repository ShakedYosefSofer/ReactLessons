import React, { useState, useContext } from 'react'
import { AppContext } from '../context/Context'

export default function StudentForm() {
  const [nameVal,setNameVal] = useState()
  const [studentVal,setGradeVal] = useState(1)

  const {addStudent, resetAllStudent} = useContext(AppContext);

  const onSub = (e) => {
    e.preventDefault();
    const newGrade = {
      name: nameVal,
      grade:studentVal,
      id:Date.now()
    }
    console.log(newGrade);
    addStudent(newGrade);
  }

  return (
    <div className='col-md-6 py-4'>
      <h2>Students list form</h2>
      <form onSubmit={onSub}>
        <label>Name:</label>
        <input onChange={(e) => setNameVal(e.currentTarget.value)} type="search" className='form-control' />
        <label>Grade:</label>
        <input onChange={(e) => setGradeVal(e.currentTarget.value)} value={studentVal} type="number" className='form-control' />
        <button className='btn btn-success mt-4'>Add student</button>
        {/* type="button" - דואג שהכפתור לא יהיה קשור
         לשיגור הטופס למרות שהוא בתוכו */}
        <button onClick={() => {
          if(window.confirm("Delete all?")){
            resetAllStudent();
          }
        }} type="button" className='btn btn-danger mt-4 ms-2'>Reset all</button>
{/* 
        <button onClick={() => {
            if(window.confirm("upgrade ?")){
                resetAllStudent();
            }
        }} type="button" className='btn btn-warning mt-4 ms-2'>upgrade all</button> */}
      </form>
    </div>
  )
}
