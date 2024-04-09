import React, { useEffect, useState } from 'react'

export default function FoodsApi() {
  const [foods_ar, setFoodsAr] = useState([]);

  // [] - מערך ריק - יפעיל את הפונקציה רק בהתחלה
  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    const url = "http://fs1.co.il/bus/foods.php";
    try {
      const resp = await fetch(url);
      const data = await resp.json()
      console.log(data);
      setFoodsAr(data);
    }
    catch(err){
      console.log(err);
      // alert("There problem come back later")
    }
  }

  return (
    <div>
      <h1>Foods menu:</h1>
      <ul>
        {foods_ar.map((item) => {
          return (
            // key - צריך להיות ייחודי לעזור לריאקט דום
            <li key={item._id.$oid}>{item.name} - {item.price} NIS</li>
          )
        })}
      </ul>
    </div>
  )
}
