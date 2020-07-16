import React from "react"

import footerStyle from './footer.module.css'
import containerStyle from '../container/container.module.css'
const Footer = ({ location, children }) => {

  return (
      <footer className={footerStyle.footer}>
          <div className={containerStyle.slimContainer}>
          {children}
          </div>
          </footer>
  )
}

export default Footer
