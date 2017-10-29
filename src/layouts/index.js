import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import typography from '../utils/typography'
import {Icon} from 'semantic-ui-react'
import logo from '../images/UHSBL-logo.png'

import 'normalize.css'
import 'semantic-ui-css/semantic.min.css';
import './index.css'

const BusinessBox = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;
`

const BusinessHeader = styled.h1`
  margin: 0;
  font-size: 1.7em;
`

const BusinessSubHeader = styled.h3`
  margin: 0;
  font-size: 1em;
`

const NavButton = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 3em;
  font-size: 1.1em;
  border-left: ${props => props.left ? '1px solid #eee' : '0'};
  border-right: 1px solid #eee;
  min-width: 30%;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: rgb(77, 29, 124);
    color: white !important;
	}
`

const IvyLogo = styled.img`
  width: 40px;
  height: 40px;
  margin: 0.5rem;
`

const HamburgerButton = styled.button`
  color: black;
  background-color: transparent;
  border: 0;
`

const HeaderStyle = styled.div`
  display: flex;
  position: absolute; !important;
  z-index: 1;
  width: 100vw;
  margin: 0;
  background: white;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
`

const RightHeader = styled.div`
  display: flex;
  min-width: 40%;
  justify-content: flex-end;
`

const Header = () => (
  <HeaderStyle>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
        <BusinessBox>
          <img style={{margin: 0}} height='50px' src={logo}/>
          <div>
            <BusinessHeader>University High School</BusinessHeader>
            <BusinessSubHeader>of Business and Leadership</BusinessSubHeader>
          </div>
        </BusinessBox>
        </Link>
        <RightHeader>
          <NavButton left>
          <Link style={{textDecoration: "none", color: "inherit"}} to="/contact/">加入我们</Link>
          </NavButton>
          <NavButton >
            <Link style={{textDecoration: "none", color: "inherit"}} to="/about/">大学的使命任</Link>
          </NavButton>
          <NavButton>
            <Link style={{textDecoration: "none", color: "inherit"}} to="/contact/">Contact</Link>
          </NavButton>
        </RightHeader>
  </HeaderStyle>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="University High School of Business"
      meta={[
        { name: 'description', content: 'University High School of Business & Leadership International' },
        { name: 'keywords', content: 'college, SAT, ACT, university, tutoring, UCLA, Harvard' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
