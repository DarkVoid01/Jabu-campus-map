import React from 'react'
import "./Home.scss"
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Header/>
        <Menu/>
      <Footer/>
    </div>
  )
}

export default Home