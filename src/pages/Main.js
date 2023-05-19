import React from 'react'
import MyNavsScroll from '../component/MyNavsScroll'
import Home from './Home'
import About from './About'
import ContactUs from './ContactUs'
import Login from './Login'
import TopArtist from './TopArtist'
import TopArtwork from './TopArtwork'
import Footer from './Footer'

const Main = () => {
  return (
    <div>
      
      <MyNavsScroll/> 
       <section id='home'><Home/></section> 
       <section id='about'><About/></section>
       <section id='contactus'><ContactUs/></section>
      <section id='topartist'><TopArtist/></section> 
      <section id='topartwork'><TopArtwork/></section>
      <section id='login'><Login/></section> 
      <Footer/>
    </div>
  )
}

export default Main
