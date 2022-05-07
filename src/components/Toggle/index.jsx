import styles from './Toggle.module.scss'

function Toggle() {
  return (
    <div className={styles.toggleBox}>
      <input type='checkbox' className={styles.checkBox}  />
      <div className = {styles.textContainer}>
        <span>기본</span>
        <span>상세</span>
      </div>
    </div>
  )
}

export default Toggle