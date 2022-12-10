import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import GlobalStyle from "../styles/global"
import Navbar from "../components/ui/Navbar"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <p>Dev Tooling; Done Right</p>
      <p>Welcome to DivNectar, a place for developers to perfect thier craft!</p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
