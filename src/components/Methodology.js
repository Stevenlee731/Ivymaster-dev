import React, { Component } from 'react'
import styled from 'styled-components'
import photoOne from '../images/photo-3.jpeg'
import photoTwo from '../images/student-1.jpeg'

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
  width: 45%;
`

const TextSquare = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: #A41034;
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
          <Header>Our Method</Header>
          <TextBody>Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,</TextBody>
          <TextBody>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</TextBody>
        </TextSquare>
        <RightImage src={photoTwo}/>
      </Section>
    )
  }
}
