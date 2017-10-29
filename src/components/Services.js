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
          <Header>我们如何做到这一点</Header>
          <Body>
            <li>加强整个人</li>
            <li>培育创业心态</li>
            <li>在全球范围内的整体思考 </li>
          </Body>
        </Service>
        <Service>
           <Image src={mortarboard} />     
           <Header>为什么我们做这件事</Header>
           <Body>
             <li>机会 / 选择 </li>
             <li>增加更高的期望</li>
             <li>社会的影响</li>
          </Body>
        </Service>
        <Service>
          <Image src={globe} />
          <Header>我们如何做到这一点</Header>
          <Body>
             <li>加强整个人</li>
             <li>培育创业心态</li>
             <li>在全球范围内的整体思考</li>
          </Body>
        </Service>
      </Section>
    )
  }
}
