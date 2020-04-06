import React from "react"
import { Box, Flex, Grid, Link, Text } from "theme-ui"

const Footer = ({}) => (
  <Box
    bg='grays.6'
    sx={{ py: 2 }}
    as='footer' >
    <Grid
    gap={3}
    columns={[8]}
    sx={{ mx: 6, maxWidth: '820px' }}>
    <Box sx={{ gridColumn: '1 / 9' }}>
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
    </Grid>
  </Box>
)

export default Footer