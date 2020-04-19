import React from "react"
import { Box, Flex, Container, Link, Text } from "theme-ui"

const Footer = () => (
  <Box
    bg='grays.6'
    sx={{ py: [3, 2] }}
    as='footer' >
    <Container
      sx={{
        my: "0",
        maxWidth: "1300px",
        px: ["21px", 4, 3],
        width: "auto",
      }}>
      <Box>
        <Flex>
          <Link
              href="/"
              sx={{
              color: `grays.4`,
              fontFamily: `sans`,
              fontSize: 0,
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
              fontSize: 0,
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
              fontSize: 0,
              fontWeight: `medium`,
              letterSpacing: `wide`,
              mr: 3,
              textDecoration: `none`,
              textTransform: `uppercase`,
              }}>
              Writing
          </Link>
          <Link
              href="/contact/"
              sx={{
              color: `grays.4`,
              fontFamily: `sans`,
              fontSize: 0,
              fontWeight: `medium`,
              letterSpacing: `wide`,
              mr: 3,
              textDecoration: `none`,
              textTransform: `uppercase`,
              }}>
              Contact
          </Link>
          <Link
              href='/rss.xml'
              color='grays.4'
              sx={{
              color: `grays.4`,
              fontFamily: `sans`,
              fontSize: 0,
              fontWeight: `medium`,
              letterSpacing: `wide`,
              mr: 3,
              textDecoration: `none`,
              textTransform: `uppercase`,
              }}>
              Feed
          </Link>
        </Flex>
        <Text
        as='p'
        color='grays.4'
        sx={{
            fontFamily: 'sans',
            fontSize: 0,
        }}>
        © {new Date().getFullYear()}
        </Text>
      </Box>
    </Container>
  </Box>
)

export default Footer