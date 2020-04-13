import PropTypes from "prop-types"
import React from "react"
import { Flex, Box, Link } from "theme-ui"

const Header = ({ siteTitle }) => (
  <Box
    as='header'
    sx={{
      backgroundColor: [`grays.6`, `transparent`],
      position: [`relative`, `absolute`],
      px: ["21px", 4, 0],
      pt: [4, 0],
      top: [`auto`, 4],
      left: [`auto`, 2, 6],
      right: [`auto`, 2, 6],
    }}>
    <Box
      sx={{
        display: ['block', 'flex'],
        pb: [1, 0],
      }}>
      <Box
        sx={{
          flex: '1',
          mb: [1, 0],
        }}>
        <Link
        href="/"
        sx={{
          color: `grays.2`,
          fontFamily: `sans`,
          fontSize: 1,
          fontWeight: `bold`,
          letterSpacing: `extrawide`,
          textDecoration: `none`,
          textTransform: `uppercase`,
        }}>
          Sean Dillingham
        </Link>
      </Box>
      <Box
        as='nav'
        sx={{
          mb: [1, 0],
        }}>
        <Flex>
          <Link
            href="/"
            sx={{
              color: `grays.4`,
              fontFamily: `sans`,
              fontSize: `14px`,
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
              fontSize: `14px`,
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
              fontSize: `14px`,
              fontWeight: `medium`,
              letterSpacing: `wide`,
              textDecoration: `none`,
              textTransform: `uppercase`,
            }}>
            Writing
          </Link>
        </Flex>
      </Box>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
