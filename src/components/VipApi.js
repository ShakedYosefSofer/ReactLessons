import React, { useEffect, useState } from 'react'

export default function VipApi() {
  const [vip_ar,setVipAr] = useState([]);

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    const url = "http://fs1.co.il/bus/vip.php";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setVipAr(data);
      // console.table(data);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>
      <h2>Vip list:</h2>
      <div className='row'>
        {vip_ar.map(item => {
          return (
            <div key={item.name} className='border p-2 col-md-6'>
              <img src={item.image} className='float-start me-2 w-25' /> 
              <h2>{item.name}</h2>
              <div>Money:{item.worth}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
