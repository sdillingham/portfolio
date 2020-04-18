import React from "react"
import { graphql } from "gatsby"
import { Box, Container, Grid, Heading, Link, Text } from "theme-ui"

import Layout from "components/layout"
import SEO from "components/seo"

const WritingPage = ({ data }) => {
  const articles = data.allMarkdownRemark.edges
    .filter(edge => edge.node.frontmatter.contentType === 'article')
  
  const notes = data.allMarkdownRemark.edges
    .filter(edge => edge.node.frontmatter.contentType === 'notes')
  
  const elsewhere = data.allMarkdownRemark.edges
    .filter(edge => edge.node.frontmatter.contentType === 'elsewhere')

  return (
    <Layout>
      <SEO title="Writing" description="The personal website of Sean Dillingham" />
      <Container
        sx={{
          maxWidth: "1300px",
          px: ["21px", 4, 3],
          width: "auto",
        }}>
        <Grid
          gap={3}
          columns={[12]}
          sx={{
            mt: [5, 9, 9],
            mb: 5,
          }}>
          <Box 
            sx={{
              gridColumn: '1 / 13',
              mb: [3, 5, 5],
            }}>
            <Heading
              as='h1'
              sx={{
                borderBottom: `3px solid`,
                borderColor: `grays.4`,
                color: `grays.1`,
                fontFamily: `sans`,
                fontSize: 6,
                fontWeight: `normal`,
                lineHeight: `compact`,
                pb: 2,
              }}>
              Writing
            </Heading>
          </Box>
          <Box
            sx={{
              gridColumn: ['1 / 13', '1 / 4', '1 / 4'],
            }}>
            <Heading
              as='h3'
              sx={{
                color: `grays.1`,
                fontFamily: `sans`,
                fontSize: 3,
                fontWeight: `normal`,
                letterSpacing: `comfortable`,
              }}>
              Articles
            </Heading>
            <Text
              sx={{
                color: `grays.3`,
                fontFamily: `sans`,
                fontSize: 1,
              }}>
              Thoughts organized as paragraphs
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ['1 / 13', '5 / 13', '5 / 13'],
            }}>
            <Grid
              gap={3}
              columns={[1, 1, 2]}
              mb={5}>
              {articles.map(({ node }) => {
                return (
                  <Box>
                    <Text
                      sx={{
                        color: `slates.2`,
                        fontFamily: `mono`,
                        fontSize: 0,
                        fontWeight: `medium`,
                        letterSpacing: `extrawide`,
                        lineHeight: `tight`,
                        mb: 1,
                        textTransform: `uppercase`,
                      }}>
                      {node.frontmatter.date}
                    </Text>
                    <Heading sx={{
                      mb: 1,
                      }}>
                      <Link
                        href={node.frontmatter.path}
                        sx={{
                          color: `grays.1`,
                          display: `inline-block`,
                          fontFamily: `serif`,
                          fontSize: 4,
                          fontWeight: `normal`,
                          lineHeight: `compact`,
                          mb: 1,
                        }}>
                        {node.frontmatter.title}
                      </Link>
                    </Heading>
                    <Text
                      sx={{
                      color: `grays.3`,
                      fontFamily: `sans`,
                      fontSize: 1,
                      lineHeight: `comfortable`,
                      mb: [2, 5, 5],
                      }}>
                      {node.frontmatter.teaser}
                    </Text>
                  </Box>
                )
              })}
            </Grid>
          </Box>
          <Box
            sx={{
              gridColumn: ['1 / 13', '1 / 4', '1 / 4'],
            }}>
            <Heading
              as='h3'
              sx={{
                color: `grays.1`,
                fontFamily: `sans`,
                fontSize: 3,
                fontWeight: `normal`,
                letterSpacing: `comfortable`,
              }}>
              Notes
            </Heading>
            <Text
            sx={{
                color: `grays.3`,
                fontFamily: `sans`,
                fontSize: 1,
              }}>
              Thoughts organized as lists
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ['1 / 13', '5 / 13', '5 / 13'],
            }}>
            <Grid
              gap={3}
              columns={[1, 1, 2]}
              mb={5}>
              {notes.map(({ node }) => {
                return (
                  <Box>
                    <Text
                      sx={{
                        color: `slates.2`,
                        fontFamily: `mono`,
                        fontSize: 0,
                        fontWeight: `medium`,
                        letterSpacing: `extrawide`,
                        lineHeight: `tight`,
                        mb: 1,
                        textTransform: `uppercase`,
                      }}>
                      {node.frontmatter.date}
                    </Text>
                    <Heading sx={{
                      mb: 1,
                      }}>
                      <Link
                        href={node.frontmatter.path}
                        sx={{
                          color: `grays.1`,
                          display: `inline-block`,
                          fontFamily: `serif`,
                          fontSize: 4,
                          fontWeight: `normal`,
                          lineHeight: `compact`,
                          mb: 1,
                        }}>
                        {node.frontmatter.title}
                      </Link>
                    </Heading>
                    <Text
                      sx={{
                      color: `grays.3`,
                      fontFamily: `sans`,
                      fontSize: 1,
                      lineHeight: `comfortable`,
                      mb: [2, 5, 5],
                      }}>
                      {node.frontmatter.teaser}
                    </Text>
                  </Box>
                )
              })}
            </Grid>
          </Box>
          <Box
            sx={{
              gridColumn: ['1 / 13', '1 / 4', '1 / 4'],
            }}>
            <Heading
              as='h3'
              sx={{
                color: `grays.1`,
                fontFamily: `sans`,
                fontSize: 3,
                fontWeight: `normal`,
                letterSpacing: `comfortable`,
              }}>
              Elsewhere
            </Heading>
            <Text
              sx={{
                color: `grays.3`,
                fontFamily: `sans`,
                fontSize: 1,
              }}>
              Thoughts published other places
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ['1 / 13', '5 / 13', '5 / 13'],
            }}>
            <Grid
              gap={3}
              columns={[1, 1, 2]}
              mb={5}>
              {elsewhere.map(({ node }) => {
                return (
                  <Box>
                    <Text
                      sx={{
                        color: `slates.2`,
                        fontFamily: `mono`,
                        fontSize: 0,
                        fontWeight: `medium`,
                        letterSpacing: `extrawide`,
                        lineHeight: `tight`,
                        mb: 1,
                        textTransform: `uppercase`,
                      }}>
                      {node.frontmatter.date}
                    </Text>
                    <Heading sx={{
                      mb: 1,
                      }}>
                      <Link
                        href={node.frontmatter.url}
                        sx={{
                          color: `grays.1`,
                          display: `inline-block`,
                          fontFamily: `serif`,
                          fontSize: 4,
                          fontWeight: `normal`,
                          lineHeight: `compact`,
                          mb: 1,
                        }}>
                        {node.frontmatter.title}
                        <small> ↗</small>
                      </Link>
                    </Heading>
                    <Text
                      sx={{
                      color: `grays.3`,
                      fontFamily: `sans`,
                      fontSize: 1,
                      lineHeight: `comfortable`,
                      mb: [2, 5, 5],
                      }}>
                      {node.frontmatter.teaser}
                    </Text>
                  </Box>
                )
              })}
            </Grid>
          </Box>
        </Grid>
      </Container> 
    </Layout>
  )
}

export default WritingPage

export const pageQuery = graphql`
  query writingPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
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
`
