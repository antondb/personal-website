import React from "react"
import navStyle from './nav.module.css'
import containerStyle from '../container/container.module.css'
import { Link } from "gatsby"

const Nav = ({ location, children }) => {

  return (
      <nav className={[containerStyle.slimContainer, navStyle.nav].join(' ')}>
          <span  className={navStyle.section}>
          <Link className={navStyle.item} to="/">The Build Log</Link>
          </span>
          <span  className={navStyle.sectionRight}>
          <Link  className={navStyle.item} to="/">Home</Link>
          <Link  className={navStyle.item} to="https://github.com/antondb">Github</Link>
          </span>
      </nav>
  )
}

export default Nav
