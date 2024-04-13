import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"

export default function ShopPage() {
  const [shop_ar,setShopAr] = useState([]);

  // useParams - מאפשר איסוף פאראמס מהיו אר אל בדומה ל
  // NODEJS
  const params = useParams();

  useEffect(() => {
    doApi();
    // [params] - כל פעם שיהיה שינוי ביו אר אל למעלה
    // הפאראמס גם ישתנה ויזמן מחדש את הפונקציה של היוז אפקט
  },[params])

  const doApi = async() => {
    const url = "http://fs1.co.il/bus/shop.php"
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      // console.log(data);
      const filter_ar = data.filter(item => {
        return item.cat == params["category"];
      })
      setShopAr(filter_ar);
      console.log(filter_ar);
    } catch (error) {
      console.log(error);
    }
  } 

  return (
    <div className='container'>
      <h2>Shop list: {params["category"]}</h2>
      <nav>
        <Link to="/shop/food">Food</Link> |
        <Link to="/shop/clothing">Clothing</Link> |
        <Link to="/shop/animals">Animals</Link>
      </nav>
      <ul>
        {shop_ar.map(item => {
          return (
            <li key={item.id}>{item.name} - {item.price} NIS</li>
          )
        })}
      </ul>
    </div>
  )
}
