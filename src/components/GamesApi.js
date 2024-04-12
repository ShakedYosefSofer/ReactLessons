import React, { useEffect, useState } from 'react'

export default function GamesApi() {
  const [games_ar, setGamesAr] = useState([]);

  // [] - מערך ריק - יפעיל את הפונקציה רק בהתחלה
  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    const url = "http://fs1.co.il/bus/xbox1.php";
    try {
      const resp = await fetch(url);
      const data = await resp.json()
      console.log(data);
      setGamesAr(data);
    }
    catch(err){
      console.log(err);
      // alert("There problem come back later")
    }
  }

  return (
    <div>
      <h1>Games:</h1>
      <ul>
        {games_ar.map((item) => {
            if(item.Year == 2005){
            return (
                // key - צריך להיות ייחודי לעזור לריאקט דום
                <li key={item.Game}>{item.Game} - {item.Publisher} - {item.Year} </li>
                // - { item.Year.Filter( Year => Year === 2005)}
            )}
        })}
      </ul>
    </div>
  )
}
