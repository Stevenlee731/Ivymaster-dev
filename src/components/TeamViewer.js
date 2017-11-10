import React, { Component } from 'react'
import ProfileModal from './Modal'
import styled from 'styled-components'
import headshotOne from '../images/headshot-3.jpeg'
import headshotTwo from '../images/headshot-2.jpeg'
import headshotThree from '../images/student-2.jpg'

const Section = styled.section`
  width: 100vw;
  min-height: 400px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 991px) {
		flex-direction: column;
	}
`

const TextContainer = styled.div`
  width: 45%;
  @media (max-width: 991px) {
    width: 100vw;
    padding: 1rem 2rem;
	}
`

const TextHeader = styled.h1`
  color: black;
  font-size: 2rem;
  padding-left: 3%;
  border-left: 2px solid palevioletred;
`

const TextBody = styled.p`
  font-size: 1rem;
  padding-left: 10%;
`

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  @media (max-width: 767px) {
    width: 100vw;
    margin: 2rem;
	}
  
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
          <TextHeader>加入我们</TextHeader>
          <TextBody>
          University HS 的商业及国际发展与领导是与美国和外国学生而设计的. UHSLB 的目的是让青年领袖学员有创业心态在.
          </TextBody>
          <TextBody>
          与 Concordia University School of Business and Leadership Academy 的伙伴关系、 UHSLB 让学生有机会获得高中毕业证书以及某种程度的高等教育学院点数. 所有预先安排的课程转让给学院和大学。可能赚取高达二年大学的学分用是否可用.
          </TextBody>
        </TextContainer>
        <ProfileContainer>
          <ProfileModal {...this.state.profileOne} />
          <ProfileModal {...this.state.profileTwo}/>
          <ProfileModal {...this.state.profileThree}/>
        </ProfileContainer>
      </Section>
    )
  }
}
