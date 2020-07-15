import React from "react"
import headerStyle from './header.module.css'
console.log(headerStyle)
const Header = ({ location, children }) => {

  return (
      <header style={{backgroundColor:'#81b29a'}}>
          <div className={headerStyle.container}>
          {children}
          </div>
          </header>
  )
}

export default Header
