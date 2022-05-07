import { useState } from 'react'
import styles from './Input.module.scss'
import {AiFillCheckCircle, AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import {cx} from '../../styles'

function Input() {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showEmailWrongMsg, setShowEmailWrongMsg] = useState(false)
  const emailValidRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  
  const handleEmailChange = (e) => {
    const input = e.currentTarget.value
    setEmail(input)
    if(input.match(emailValidRegex)){
      setIsEmailValid(true)
    }else{
      setIsEmailValid(false)
    }
  }
  const handlePwChange = (e) => {
    const input = e.currentTarget.value
    setPw(input)
  }

  const handleIdFocus = () => {
    setShowEmailWrongMsg(false)
  }
  const handleIdBlur = () => {
    if(!isEmailValid)setShowEmailWrongMsg(true)
  }
  const handlePwIconClick = () => {
    setShowPassword(prev=>!prev)
  }
  return (
    <form className={styles.inputBox}>
      <label htmlFor='email'>E-mail</label>
      <div className = {styles.inputWrapper}>
        <input id='email' className={styles.input} type="text" value={email} onChange={handleEmailChange} onFocus={handleIdFocus} onBlur={handleIdBlur} />
        <AiFillCheckCircle className={cx(styles.inputIcon,{[styles.valid]:isEmailValid})} />
      </div>
      {showEmailWrongMsg?<p className={styles.emailValidMsg}>Email is not valid</p>:null}
        
      <label htmlFor='password'>password</label>
      <div className={styles.inputWrapper}>
        <input id='password' className={styles.input} type={showPassword?'text':'password'} value={pw} onChange={handlePwChange} />
        {showPassword?
          <AiFillEye className={cx(styles.inputIcon, styles.pwIcon)} onClick={handlePwIconClick} />
        :<AiFillEyeInvisible className={cx(styles.inputIcon, styles.pwIcon)} onClick={handlePwIconClick} />}
      </div>
    </form>
  )
}

export default Input