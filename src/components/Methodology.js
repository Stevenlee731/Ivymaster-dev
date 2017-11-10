import React, { Component } from 'react'
import styled from 'styled-components'
import photoOne from '../images/graduation.jpg'
import Img from 'gatsby-image'

const Section = styled.section`
  width: 100vw;
  max-height: 600px;
  overflow-y: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LeftImage = styled.div`
  margin: 0;
  height: 600px;
  width: 55%;
  background: url(${photoOne}) no-repeat;
  background-size: cover;
  background-position: right;
  @media (max-width: 991px) {
		display: none;
	}
`

const TextSquare = styled.div`
  height: 600px;
  background-color: rgb(77, 29, 124);
  margin: 0;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  @media (max-width: 991px) {
    width: 100vw;
    padding: 1rem;
	}
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

export default class Methodology extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Section>
        {console.log(this.props,'steve')}
        {/* <Img resolutions={data.file.childImageSharp.resolutions} /> */}
        <LeftImage></LeftImage>
        <TextSquare>
          <Header>Our Mission</Header>
          <TextBody>大学的使命任务说明高中的掌握和领 导国际是让学生获得创新的教育机 会,准备就绪他们毕生的成功来自一种教育历程达成有创业心态.</TextBody>
          <Header>Our Vision</Header>
          <TextBody>大学的使命任务说明高中的掌握和领 导国际是让学生获得创新的教育机会, 准备就绪他们毕生的成功来自一种教 育历程达成有创业心态.</TextBody>
          <Header>学院 / 大学学分</Header>
          <TextBody>学生在 UHSBL 采取研究进阶课程 已获 Concordia University 批 准. 此外,学生可以选择学院和/ 或大学课程, 而能导致取得副学 士学位或学士学位. 98成的高中 毕业生都考上学院和大学.</TextBody>
          <Header>年级</Header>
          <TextBody>学生入读 University HS 将接受并招收学生从九年级至十二年.</TextBody>
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