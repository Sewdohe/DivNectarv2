import React from 'react'
import styled from 'styled-components'
import NectarLink from './NectarLink'

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1rem;
  height: 60px;
  background: ${(props) => props.theme.colors.surface};
  margin-bottom: 1rem;
`

const Spacer = styled.div`
  flex-grow: 1;
`

const NavLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

const Brand = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.colors.pink};
  font-size: 1.7rem;
`
const BrandAccent = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.colors.green};
  font-size: 2rem;
`

const Navbar = () => {
  return (
    <Nav>
      <Brand> <BrandAccent>&lt;</BrandAccent>DivNectar<BrandAccent>/&gt;</BrandAccent></Brand>
      <Spacer />
      <NavLinks>
        <NectarLink to='/'>Home</NectarLink>
        <NectarLink to='/blog'>Blog</NectarLink>
        <NectarLink to='/projects'>Projects</NectarLink>
      </NavLinks>
    </Nav>
  )
}

export default Navbar