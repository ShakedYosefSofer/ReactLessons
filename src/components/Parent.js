import React, { useState } from 'react'

export default function Parent(props) {
  const [show,setShow] = useState(false);

  return (
    <div className='border text-danger p-2'>
      <button onClick={() => {
        setShow(!show);
      }}>Show/hide</button>
      {show && props.children}
    </div>
  )
}
