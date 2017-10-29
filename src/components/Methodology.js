import React, { Component } from 'react'
import styled from 'styled-components'
import photoOne from '../images/graduation.jpg'
import Img from 'gatsby-image'

const Section = styled.section`
  width: 100vw;
  max-height: 400px;
  overflow-y: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LeftImage = styled.div`
  background-image: url(${photoOne});
  margin: 0;
  width: 60%;
`

const TextSquare = styled.div`
  height: 104vh;
  background-color: rgb(77, 29, 124);
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`

const Header = styled.h1`
  color: white;
  font-size: 2em;
  margin: 0;
  margin-top: 1.3em;
`

const TextBody = styled.h1`
  color: white;
  margin: 0.8em 10% 0 10%;
  font-size: 1em;
`

const RightImage = styled.img`
  height: 100%;
  margin: 0;
`

export default class Methodology extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Section>
        {console.log(this.props,'steve')}
        {/* <Img resolutions={data.file.childImageSharp.resolutions} /> */}
        <LeftImage/>
        <TextSquare>
          <Header>Our Mission</Header>
          <TextBody>大学的使命任务说明高中的掌握和领 导国际是让学生获得创新的教育机 会,准备就绪他们毕生的成功来自一种教育历程达成有创业心态.</TextBody>
          <Header>Our Vision</Header>
          <TextBody>大学的使命任务说明高中的掌握和领 导国际是让学生获得创新的教育机会, 准备就绪他们毕生的成功来自一种教 育历程达成有创业心态.</TextBody>
        </TextSquare>
      </Section>
    )
  }
}

export const query = graphql`
query GatsbyImageSampleQuery {
  file(relativePath: { eq: "images/graduation.jpg"}) {
    childImageSharp {
      # Specify the image processing steps right in the query
      # Makes it trivial to update as your page's design changes.
      resolutions(width: 125, height: 125) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
}
`