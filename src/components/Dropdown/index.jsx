import {useRef, useState} from 'react'
import styles from './Dropdown.module.scss'
import {GoTriangleDown, GoSearch } from 'react-icons/go'
import {cx} from '../../styles'
import {useClickAway} from 'react-use'

const ITEM_DATA = ['C','JAVA','javascript','typescript','kotlin','go','apple','banana','chocolate','develop']
function Dropdown() {
  const [items] = useState(ITEM_DATA)
  const [searchedItems, setSearchedItems] = useState(items)
  const [selectedItem, setSelectedItem] = useState(items[0])
  const [showList,setShowList] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const dropdownRef = useRef()

  const handleSearchInputChange = (e) => {
    const input = e.currentTarget.value
    setSearchInput(input)
    
    const regex = new RegExp(input,'i')
    const filteredItems = items.filter(item=>item.match(regex))
    setSearchedItems(filteredItems)
  }
  const handleButtonClick = () => {
    setShowList(prev => !prev)
  }
  const onClickAway = () => {
    setShowList(false)
  }
  const handleItemClick = (e) => {
    const {item} = e.currentTarget.dataset
    setSelectedItem(item)
    setShowList(false)
  }
  useClickAway(dropdownRef, onClickAway)
  return (
    <div className={styles.dropdownBox} ref={dropdownRef}>
      <div className={styles.buttonBox}>
        <button type='button' className = {styles.dropdownButton} onClick={handleButtonClick}>{selectedItem}
        </button>
        <GoTriangleDown className={styles.dropdownIcon} />
      </div>
      <ul className={cx({[styles.hidden]:!showList})} >
        <li>
          <div className={styles.searchBox}>
            <GoSearch className = {styles.searchIcon}/>
            <input type='text' value={searchInput} onChange={handleSearchInputChange} />
          </div>
        </li>
        {searchedItems.map(item=><li key={`key-li-${item}`} >
          <button type='button' className={styles.itemButton} data-item = {item} onClick={handleItemClick}>
            {item}
          </button>
        </li>)}
      </ul>
    </div>
  )
}

export default Dropdown