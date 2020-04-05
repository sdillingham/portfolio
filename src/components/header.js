import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      position: `absolute`,
      top: 0,
      left: 72,
      right: 72,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <nav style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
        <Link
          to="/work/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Work
        </Link>
        <Link
          to="/blog/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Writing
        </Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
