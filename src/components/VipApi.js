import React, { useEffect, useState } from 'react'

export default function VipApi() {
  const [vip_ar, setVipAr] = useState([]);

  // [] - מערך ריק - יפעיל את הפונקציה רק בהתחלה
  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    const url = "http://fs1.co.il/bus/vip.php";
    try {
      const resp = await fetch(url);
      const data = await resp.json()
      console.log(data);
      setVipAr(data);
    }
    catch(err){
      console.log(err);
      // alert("There problem come back later")
    }
  }

  return (
    <div>
      <h1>vip:</h1>
      <ul>
        {vip_ar.map((item) => {
            return (
            // key - צריך להיות ייחודי לעזור לריאקט דום
            <li key={item.name}>{item.name} - {item.worth} - {item.source} - {new Date().getFullYear() - item.birth_year} </li>
            )
        })}
      </ul>
    </div>
  )
}
