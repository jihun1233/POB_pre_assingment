import {useRef, useState} from 'react'
import styles from './Tab.module.scss'
import {cx} from '../../styles'

const TAB_MENUS = ["호떡","씨앗호떡","메밀호떡"]
function Tab() {
  const [menus] = useState(TAB_MENUS)
  const [selected,setSelected] = useState(0)
  const sliderRef = useRef()
  const handleMenuClick = (e) => {
    const order = Number(e.currentTarget.dataset.order)
    setSelected(order)
    sliderRef.current.style.transform = `translateX(${200*order}px)`
  }

  return (
    <div className={styles.tabBox}>
      <ul className={styles.menuList}>
        {menus.map((menu, i) => 
         (<li key={`li-key-${menu}`} className={cx(styles.menu)} >
           <button type='button' data-order={i} className={cx(styles.menuBtn,{[styles.selected]: selected===i})} onClick = {handleMenuClick}>{menu}</button> 
         </li>)
         )}
      </ul>
      <div className = {styles.sliderBox}>
        <div className={styles.slider} ref={sliderRef} />
      </div>
    </div>
  )
}

export default Tab