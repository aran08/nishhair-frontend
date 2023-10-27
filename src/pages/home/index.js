import React from 'react'
import Banner from './banner/Banner'
import SliderBlock from './upperslider/SliderBlock'
// import Titlebar from './titlebar/Titlebar'
import Collection from './collection/Collection'
import Loved from './loved/Loved'
import Look from './look/Look'
import Spotted from './spotted/Spotted'
import Shop from './Brands/Shop'
import Lower from './lower/Lower'
import Latest from './latest/Latest'
import Nish from './nish/Nish'
import Slider2 from './slider2/Slider2'
import Index from './hair/Index'
import Justin from './justin/index'

function Home() {
  return (
    <div>
        <SliderBlock/>
        <Banner/>
        <Justin/>
        {/* <Titlebar/> */}
        <Collection/>
        <Loved/>
        <Index/>
        <Look/>
        <Spotted/>
        <Shop/>
        <Lower/>
        <Slider2/>
        <Latest/>
        <Nish/>
    </div>
  )
}

export default Home