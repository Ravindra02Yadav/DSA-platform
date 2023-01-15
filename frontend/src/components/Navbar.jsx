import React from 'react'
import styles from '../modules/Navbar.module.css'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
<div>logo</div>
<div><Searchbar /></div>
<div className={styles.left_navbar}>
<div>login</div>
<div>bag</div>
</div>

    </nav>
  )
}

export default Navbar