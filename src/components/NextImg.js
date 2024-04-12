import React, {useState} from 'react'
const images = [
    '../img/img1.jpeg',
    '../img/img2.jpeg',
    '../img/img3.jpeg',
    'src/img/img4.jpeg'
];
export default function NextImg(props) {
  // סטייט - משתנה ריאקטיבי שהשפעה עליו מעדכנת
  // את ה JSX
  // תא ראשון זה הערך של המשתנה
  // תא 2 פונקציה שיודעת להשפיע על הערך של המשתנה
  const [counter,setCounter] = useState(0)



  const onAdd1 = () => {
    setCounter(counter + 1);
    
    // שימו לב שסטייט לא מתעדכן באותו רגע בזכרון
    // ולכן שעושים בדיקה מול משתנה סטייט תמיד לעשות
    // את הבדיקה מול השינוי שעשינו
    if(counter + 1 > 3 ){
      setCounter(0)
        
    }
  }

  return (
    <div src= { images[counter]} >
        <h2>{images[counter] }</h2>
        <button  onClick={() => {
        setCounter(counter - 1 )
        if(counter - 1 < 0  )
        {
          setCounter(3)
          
        }
      }}> Back </button>
      <button onClick={onAdd1}> Next </button>
    </div>
  )
}
