import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Site = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100vw;
  overflow: hidden;
`

const PageContent = styled.div`
  margin-top: 65px;
  max-width: 100vw;
  overflow: hidden;
  padding: 0 1rem;
`

const Layout = ({children}: PropsWithChildren) => {
  return (
    <Site>
      <Navbar />
      <PageContent>
        {children} 
      </PageContent>
    </Site>
  )
}

export default Layout