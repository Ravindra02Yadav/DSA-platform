import React from 'react'
import Filter from '../components/Filter'
import Cars from './Cars'
import styles from '../modules/Home.module.css'

const Home = () => {
  return (
    <div className={styles.home_container}>
        <Filter />
        <Cars />
    </div>
  )
}

export default Home