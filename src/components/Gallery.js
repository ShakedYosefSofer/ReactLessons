import React, { useState } from 'react'

export default function Gallery() {
  const pics_ar = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg"]
  const [counter,setCounter] = useState(0);

  const onNextClick = () => {
    setCounter(counter+1)
    if(counter + 1 > pics_ar.length - 1){
      setCounter(0)
    }
  }

  return (
    <div className='container text-center'>
      <h2>Gallery {counter}</h2>
      <img src={`/images/${pics_ar[counter]}`} alt="gallery" className='col-4'/>
      <br/>
      <button onClick={() => {
        setCounter(counter > 0 ? counter-1 : pics_ar.length-1)
      }} className='btn btn-danger'>Back</button>
      <button onClick={onNextClick} className='btn btn-info'>Next</button>
    </div>
  )
}
