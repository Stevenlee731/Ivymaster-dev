import React, { Component } from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
  width: 100vw;
  background-color: rgb(77, 29, 124);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 1em;
`
const Text = styled.p`
  color: white;
  margin: 0;
`


export default class Footer extends Component {
  render() {
    return (
      <FooterStyle>
        <Text>
        University High School of
Business and Leadership |
624 N. Main Street
Santa Ana, CA 92701
        </Text>
        <Text>
        For More Information Contact:
Dr. Donald Verluer, President
</Text>
<Text>
Phone: 714-915-6017
</Text>
<Text>
E-mail: Doctor-Verleur@nova-academy.org
</Text>
      </FooterStyle>
    )
  }
}
