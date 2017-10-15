import React, { Component } from 'react'
import styled from 'styled-components'
import photoOne from '../images/graduation.jpg'

const Section = styled.section`
  width: 100vw;
  max-height: 400px;
  overflow-y: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(50, 80, 127);
`

const LeftImage = styled.img`
  height: 100%;
  margin: 0;
  width: 60%;
`

const TextSquare = styled.div`
  height: 104vh;
  width: 40%;
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
  render() {
    return (
      <Section>
        <LeftImage src={photoOne}/>
        <TextSquare>
          <Header>Our Mission</Header>
          <TextBody>The Mission of University High School of Business and Leadership International is to provide students access to innovative educational opportunities that readies them for lifelong success through an educational journey to an entrepreneurial mindset.</TextBody>
          <Header>Our Vision</Header>
          <TextBody>The vision of University High School of Business and Leadership International is to prepare all students to succeed both academically and personally in college, career and life.</TextBody>
        </TextSquare>
      </Section>
    )
  }
}