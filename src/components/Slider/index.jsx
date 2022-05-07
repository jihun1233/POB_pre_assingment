import {useEffect, useRef, useState} from 'react'
import styles from './Slider.module.scss'
import {cx} from '../../styles'

const POINTS_DATA = [1,25,50,75,100]
function Slider() {
  const [sliderInput, setSliderInput] = useState(1)
  const sliderBoxRef = useRef()
  const handleSliderChange = (e) => {
    setSliderInput(e.currentTarget.value)
  }
  const handleSliderButtonClick = (e) => {
    const {value} = e.currentTarget.dataset
    setSliderInput(value)
  }
  useEffect(()=>{
    sliderBoxRef.current.style.setProperty('--slider-width',`${sliderInput}%`)
  },[sliderInput])
  const [points] = useState(POINTS_DATA)
  return (
    <div className={styles.sliderBox} ref={sliderBoxRef}>
      <div className={styles.display}><span>{sliderInput}%</span></div>
      <div className={styles.sliderWrapper}>
        <input type="range" min={1} max={100} className={styles.slider} value={sliderInput} onChange={handleSliderChange}/>
        <div className={styles.markerBox}>
          {points.map(point=>(<div className={cx(styles.marker, {[styles.passed]:point <= sliderInput})} key={`marker-key-${point}`} />))}
        </div>
      </div>
      <div className={styles.sliderButtonBox}>
        {points.map(point=><button className={styles.sliderButton} key={`slider-button-key-${point}`} type="button" data-value={point} onClick={handleSliderButtonClick} >{point}</button>)}
      </div>
    </div>
  )
}

export default Slider