import React, { Component } from 'react'
import ProfileModal from './Modal'
import styled from 'styled-components'
import headshotOne from '../images/headshot-1.jpeg'
import headshotTwo from '../images/headshot-2.jpeg'
import headshotThree from '../images/headshot-3.jpeg'

const Section = styled.section`
  width: 100vw;
  min-height: 400px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const TextContainer = styled.div`
  max-width: 30%;
`

const TextHeader = styled.h1`
  color: black;
  font-size: 2rem;
`

const TextBody = styled.p`
  font-size: 1rem;
  margin-left: 10%;
`
console.log(headshotOne)

export default class TeamViewer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profileOne: {
        bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,',
        img: headshotOne,
        name: 'INSERT NAME',
        headline: 'INSERT HEADLINE'
      },
      profileTwo: {
        bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,',
        img: headshotTwo,
        name: 'INSERT NAME',
        headline: 'INSERT HEADLINE'
      },
      profileThree: {
        bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,',
        img: headshotThree,
        name: 'INSERT NAME',
        headline: 'INSERT HEADLINE'
      }
    }
  }
  render() {
    return (
      <Section>
        <TextContainer>
          <TextHeader>Lorem ipsum dolor sit amet, consectetur adipiscing elit</TextHeader>
          <TextBody>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,</TextBody>
        </TextContainer>
        <ProfileModal {...this.state.profileOne} />
        <ProfileModal {...this.state.profileTwo}/>
        <ProfileModal {...this.state.profileThree}/>
      </Section>
    )
  }
}
