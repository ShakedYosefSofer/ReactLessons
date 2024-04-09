// rfc

import React, { useState } from 'react'

export default function Counter() {
  // סטייט - משתנה ריאקטיבי שהשפעה עליו מעדכנת
  // את ה JSX
  // תא ראשון זה הערך של המשתנה
  // תא 2 פונקציה שיודעת להשפיע על הערך של המשתנה
  const [counter,setCounter] = useState(2)

  const onAdd1 = () => {
    setCounter(counter + 1);
    // שימו לב שסטייט לא מתעדכן באותו רגע בזכרון
    // ולכן שעושים בדיקה מול משתנה סטייט תמיד לעשות
    // את הבדיקה מול השינוי שעשינו
    if(counter + 1 > 5){
      setCounter(0)
    }
  }

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => {
        setCounter(counter - 1)
        if(counter - 1 < 0 )
        {
          setCounter(5)
        }
      }}>reduce 1</button>
      <button onClick={onAdd1}>Add 1</button>
    </div>
  )
}
