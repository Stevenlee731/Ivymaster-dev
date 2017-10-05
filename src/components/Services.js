import React, { Component } from 'react'
import styled from 'styled-components'
import tutor from '../images/tutor.jpg'
import consult from '../images/consult.jpeg'
import test from '../images/test.jpg'

const Section = styled.section`
  width: 100vw;
  min-height: 400px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
`

const Header = styled.h1`
  margin-top: 0.4em;
  width: 100%;
  height: 100%;
  text-align: center;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
`

const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: white;
  padding: 1em;
  margin: 2em 1em;
  box-shadow: 7px 10px 13px 0px rgba(214,214,214,1);
`

export default class Services extends Component {
  render() {
    return (
      <Section>
        <Service>
          <Image src={test} />
          <Header>Test Preparation</Header>
        </Service>
        <Service>
           <Image src={tutor} />     
           <Header>Academic Tutoring</Header>
        </Service>
        <Service>
          <Image src={consult} />
          <Header>College Consultation</Header>
        </Service>
      </Section>
    )
  }
}
