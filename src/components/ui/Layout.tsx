import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Site = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100vw;
`

const PageContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 65px;
  max-width: 100vw;
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