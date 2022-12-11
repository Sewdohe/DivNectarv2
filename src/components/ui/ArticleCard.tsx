import { Link } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import NectarLink from './NectarLink'

interface CardProps {
  image: IGatsbyImageData,
  title: string,
  slug: string
}

const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.surface};
  margin: 1rem;
`

const CardContent = styled.div`
  padding: 2px 16px;
  display: flex;
  justify-content: center;
`

const CardImage = styled(GatsbyImage)`
  border-radius: 5px 5px 0 0;
  width: 100%;
`

const Card = ({title, image, slug}: CardProps) => {
  return (
    <CardContainer>
      <CardImage image={image} alt="card-image" />
      <CardContent>
        <h4><b><NectarLink to={slug}>{title}</NectarLink></b></h4>
      </CardContent>
    </CardContainer> 
  )
}

export default Card