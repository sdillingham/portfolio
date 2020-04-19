import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Box, Container, Grid, Heading, Link, Text } from "theme-ui"

const WritingFooter = ({ data }) => (
  <Box
    bg='grays.6'
    sx={{ py: [5, 6, 6]}}
    as='section' >
    <Container
      sx={{
        maxWidth: "876px",
        px: ["21px", 4, 3],
        width: "auto",
      }}>
      <Heading
        as='h3'
        sx={{
          color: `grays.4`,
          fontFamily: `sans`,
          fontSize: 2,
          fontWeight: `medium`,
          mb: 4,
          letterSpacing: `wide`,
          textTransform: `uppercase`,
        }}>
        Recent Writing
      </Heading>
      <Grid
        gap={3}
        columns={[1, 2, 3]}>
        {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <Box mb={0}>
            <Text
              as='summary'
              sx={{
                color: `slates.1`,
                fontFamily: `mono`,
                fontSize: 0,
                fontWeight: `medium`,
                letterSpacing: `extrawide`,
                textTransform: `uppercase`,
              }}>
              {node.frontmatter.contentType}
            </Text>
            <Heading as='h2'>
              <Link 
                href={node.frontmatter.url ? node.frontmatter.url : node.frontmatter.path}
                sx={{
                  color: `grays.2`,
                  display: `inline-block`,
                  fontFamily: `serif`,
                  fontSize: 4,
                  fontWeight: `normal`,
                  lineHeight: `compact`,
                  mb: 0,
                }}>
                {node.frontmatter.title}
              </Link>
            </Heading>
            <Text
              as='p'
              sx={{
                color: `grays.3`,
                fontFamily: `sans`,
                fontSize: 1,
                lineHeight: `comfortable`,
              }}>
              {node.frontmatter.teaser}
            </Text>
          </Box>
        )
        })}
      </Grid>
    </Container>
  </Box>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(limit: 6, sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
              node {
              id
              frontmatter {
                path
                title
                teaser
                contentType
                url
              }
            }
          }
        }
      }
    `}
    render={data => <WritingFooter data={data} />}
  />
)
