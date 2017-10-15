import React, { Component } from 'react'
import styled from 'styled-components'
import globe from '../images/earth-globe.png'
import mortarboard from '../images/mortarboard.png'
import book from '../images/book.png'

const Section = styled.section`
  width: 100vw;
  padding: 0 2em;
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

const Body = styled.ul`
  font-size: 1.2em;
  margin-top: 0;
`

const Image = styled.img`
  width: 50%;
  height: 50%;
  margin: 0;
  padding: 1em;
`

const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
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
          <Image src={book} />
          <Header>What We Do</Header>
          <Body>
            <li>College Readiness</li>
            <li>21st Century Careers</li>
            <li>Purposeful Life</li>
          </Body>
        </Service>
        <Service>
           <Image src={mortarboard} />     
           <Header>Why We Do It</Header>
           <Body>
             <li>Opportunities/Choices</li>
             <li>Increased Expectations</li>
             <li>Impact Community</li>
          </Body>
        </Service>
        <Service>
          <Image src={globe} />
          <Header>How We Do It</Header>
          <Body>
             <li>Strengthening The Whole Child</li>
             <li>Fostering Entrepreneurial Mindset</li>
             <li>Thinking Globally</li>
          </Body>
        </Service>
      </Section>
    )
  }
}
