import React, { useEffect, useState } from 'react'
import {Link, useParams,useSearchParams} from "react-router-dom"

export default function Games() {
  const [game_ar,setGameAr] = useState([]);
  const [game] = useSearchParams();
//   const nav = useNavigate();

  // useParams - מאפשר איסוף פאראמס מהיו אר אל בדומה ל
  // NODEJS
  const params = useParams();

  useEffect(() => {
    doApi();
    // [params] - כל פעם שיהיה שינוי ביו אר אל למעלה
    // הפאראמס גם ישתנה ויזמן מחדש את הפונקציה של היוז אפקט
  },[params])

  const doApi = async() => {
    const url = "http://fs1.co.il/bus/xbox1.php"
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      // console.log(data);
      const filter_ar = data.filter(item => {
        return item.Games == params["year"];
      })
      setGameAr(filter_ar);
      console.log(filter_ar);
    } catch (error) {
      console.log(error);
    }
  } 

  return (
    <div className='container'>
      {}
      <h2>Games year : {game.get("year")}</h2>

      <nav>
        {/* <Link to="/games?year=2005"></Link>  */}
        {/* <Link to="/shop/clothing">Clothing</Link> |
        <Link to="/shop/animals">Animals</Link> */}
      </nav>
      <ul>
        {game_ar.map(item => { 
            if (item.Year == game.get("year")) {

          return (
            
            <li key={item.Game}><Link to= {item.GameLink}>{item.Game}</Link>  - {item.Year} </li>
          )}
        })}
      </ul>
    </div>
  )
}





//       import React, {useEffect,useState} from 'react'
// import {Link, useParams, useSearchParams, useNavigate} from "react-router-dom"

// // query?search=
// export default function Query() {
//   const [query] = useSearchParams();
//   const nav = useNavigate();

//   const navVip = () => {
//     // ישגר ידנית ל VIP
//     nav("/vip")
//   } 

//   const navBack = () => {
//     // כמו ללחוץ חזור/בק בדפדפן
//     nav(-1);
//   }

//   return (
//     <div className='container'>
//       {/* ?s= */}
//       <h2>Query: {query.get("s")}</h2>
//       <button onClick={navVip}>Go to vip</button>
//       <button onClick={navBack}>Back like browser</button>
//     </div>
//   )
  
// }
