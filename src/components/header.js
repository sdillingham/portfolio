import PropTypes from "prop-types"
import React from "react"
import { Flex, Box, Link } from "theme-ui"

const Header = ({ siteTitle }) => (
  <Box
    as='header'
    sx={{
      position: `absolute`,
      top: 4,
      left: 6,
      right: 6,
    }}
  >
    <Flex>
      <Box
        sx={{ flex: '1' }}>
        <Link
        href="/">
          Sean Dillingham
        </Link>
      </Box>
      <Box
        as='nav'>
        <Flex>
          <Link
            href="/"
            sx={{
              color: `grays.4`,
              fontFamily: `sans`,
              fontSize: 1,
              fontWeight: `medium`,
              letterSpacing: `wide`,
              mr: 3,
              textDecoration: `none`,
              textTransform: `uppercase`,
            }}>
            Home
          </Link>
          <Link
            href="/work/"
            sx={{
              color: `grays.4`,
              fontFamily: `sans`,
              fontSize: 1,
              fontWeight: `medium`,
              letterSpacing: `wide`,
              mr: 3,
              textDecoration: `none`,
              textTransform: `uppercase`,
            }}>
            Work
          </Link>
          <Link
            href="/blog/"
            sx={{
              color: `grays.4`,
              fontFamily: `sans`,
              fontSize: 1,
              fontWeight: `medium`,
              letterSpacing: `wide`,
              textDecoration: `none`,
              textTransform: `uppercase`,
            }}>
            Writing
          </Link>
        </Flex>
      </Box>
    </Flex>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
