import styles from './Routes.module.scss'
import Toggle from '../components/Toggle'
import Tab from '../components/Tab'
import Slider from '../components/Slider'
import Input from '../components/Input'
import Dropdown from '../components/Dropdown'

function App() {
  return (
    <div className={styles.app}>
      <h1>Toggle</h1>
      <Toggle />
      <h1>Tab</h1>
      <Tab />
      <h1>Slider</h1>
      <Slider />
      <h1>Input</h1>
      <Input />
      <h1>Dropdown</h1>
      <Dropdown />
    </div>
  )
}

export default App
