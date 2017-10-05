import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import typography from '../utils/typography'
import logo from '../images/ivymasterlogo_temp.png'
import SidebarTopPush from '../components/Sidebar'
import {Icon} from 'semantic-ui-react'

import 'normalize.css'
import 'semantic-ui-css/semantic.min.css';
import './index.css'

const BusinessName = styled.h1`
  font-size: 1.5em;
  color: white;
  display: flex;
  align-items: center;
`
const IvyLogo = styled.img`
  width: 40px;
  height: 40px;
  margin: 0.5rem;
`

const HamburgerButton = styled.button`
  color: white;
  background-color: transparent;
  border: 0;
`

const HeaderStyle = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  width: 100vw;
  margin: 1em;
  background: transparent;
  justify-content: space-between;
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
        <BusinessName>
          <IvyLogo src={logo}/><span>Ivy Master Academy</span>
        </BusinessName>
        </Link>
      <div>
        <Link to="/about/">About</Link>
        <Link to="/contact/">Contact</Link>
        <HamburgerButton><Icon name='content' size='large' /></HamburgerButton>
      </div>
      {/* <SidebarTopPush/> */}
  </HeaderStyle>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ivy Master | Aspire to More"
      meta={[
        { name: 'description', content: 'Ivy Master Academy is dedicated to teaching and helping students in all aspects of high school education: maintaining great GPAs, improving test scores, and simplifying college admissions. Spark Your Dream, today!' },
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
