import React from 'react'
import Carrousel from './components/Carrousel'
import Coins from './components/Coins'
import Banner from './components/Banner'

const Home = () => {
  return (
    <div>
        <Banner />
        <Carrousel />   
        <Coins />
    </div>
  )
}

export default Home