import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Nav from "../components/nav"
import Footer from "../components/footer"

import containerStyle from "./container/container.module.css"
import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <>
      <h1
        style={{
          fontFamily: `Libre Caslon Text`,
          fontSize:'3.5em',
          marginBottom: '0.25em',
          marginTop: 0,
        }}
        >
          {title}
      </h1>
      <p style={{fontSize:'1.25em'}}>
      
      A handbook on the things I would have otherwise forgotten.
      </p>
      </>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Libre Caslon Text`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <>
    <Nav/>
      <Header style={{ backgroundColor: "#81b29a" }}>{header}</Header>
      <main className={containerStyle.container}>{children}</main>
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </>
  )
}

export default Layout
