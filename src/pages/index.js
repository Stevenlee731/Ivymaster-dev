import React from 'react'
import Link from 'gatsby-link'
import Slider from 'react-slick'
import Carousel from '../components/Carousel'
import TeamViewer from '../components/TeamViewer'
import Methodology from '../components/Methodology'
import Services from '../components/Services'
import Footer from '../components/Footer'

const IndexPage = () => (
  <div>
    <Carousel/>
    <TeamViewer/>
    <Methodology/>
    <Services/>
    <Footer/>
  </div>
)

export default IndexPage
