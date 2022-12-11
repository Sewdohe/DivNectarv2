import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'


const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.code};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`

const CardContent = styled.div`
  padding: 2px 16px;
`

const Card = ({children}: PropsWithChildren) => {
  return (
    <CardContainer>
      {children}
    </CardContainer> 
  )
}

export default Card