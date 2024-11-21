import React, {useRef, useState} from 'react'
import styles from './GridGame.module.css';

function GridGame() {
const [item,setItem] = useState(Array(9).fill(false))

function setGrid(index) {
    const element = [...item];
    element[index] = !element[index]
    setItem(element)
}

  return (
    <div className={styles.container}>
        {item.map((isRed, index)=> 
              (<div onClick={()=>setGrid(index)}
               key={index} className={`${styles.items} ${isRed ? 
                styles.red:""}`}>
                </div>)
        )}
    </div>
  )
}

export default GridGame