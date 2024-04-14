import React from 'react'
import {useSearchParams, useNavigate} from "react-router-dom"

// query?search=
export default function Query() {
  const [query] = useSearchParams();
  const nav = useNavigate();

  const navVip = () => {
    // ישגר ידנית ל VIP
    nav("/vip")
  } 

  const navBack = () => {
    // כמו ללחוץ חזור/בק בדפדפן
    nav(-1);
  }

  return (
    <div className='container'>
      {/* ?s= */}
      <h2>Query: {query.get("s")}</h2>
      <button onClick={navVip}>Go to vip</button>
      <button onClick={navBack}>Back like browser</button>
    </div>
  )
}
