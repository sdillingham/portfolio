/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import "../fonts/fonts.css"

const LayoutHome = ({ children }) => {

  return (
    <>
      <main>{children}</main>
    </>
  )
}

LayoutHome.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutHome
