import React, { useRef, useState } from 'react'

export default function Value() {
  const [phoneVal,setPhoneVal] = useState("")
  // מייצר משתנה שיכול לתקשר עם אלמנט כגון אינפוט 
  // סלקט בוקס ולאוסף ממנו את הוויליו שלו
  const nameRef = useRef()

  const onSub = (e) => {
    // מונע את הברירת מחדל של שיגור הטופס
    e.preventDefault();
    // console.log(nameRef.current.value);
    console.log(phoneVal);

  }

  return (
    <div>
      <h2>Order form</h2>
      <form onSubmit={onSub} className='col-md-6'>
        <label>Name:</label>
        <input ref={nameRef} type="text" className='form-control' />
        <label>Phone:</label>
        {/* onChange - שיטה נוספת לאסוף מידע מאינפוט/סלקט */}
        <input onChange={(e) => setPhoneVal(e.currentTarget.value)} type="tel" className='form-control' />
        <button  className='btn btn-info mt-4'>Add</button>
      </form>
    </div>
  )
}


// rfc - כדי לייצר קומפנינטה