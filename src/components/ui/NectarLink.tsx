import { Link } from 'gatsby'
import styled from 'styled-components'

const NectarLink = styled(Link)`
  text-shadow: none;
  background-image: none;
  margin: 0 0.2rem;
  text-decoration: underline 0.15em rgba(0, 0, 0, 0);
  text-underline-offset: 0.2em;
  transition: text-decoration-color 300ms ease-in-out, text-underline-offset ease-in-out 300ms, color ease-in-out 800ms;
  :hover, :focus {
    color: ${(props) => props.theme.colors.cyan};
    background-size: 0 0.1em, 100% 0.1em;
    text-decoration-color: ${(props) => props.theme.colors.pink};
  }
`

export default NectarLink