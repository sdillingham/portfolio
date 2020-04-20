import React from "react"
import { graphql } from "gatsby"
import { Box, Flex, Grid, Heading, Link, Text } from "theme-ui"
import Img from "gatsby-image"

import LayoutHome from "components/layoutHome"
import Header from "components/header"
import SEO from "components/seo"

const IndexPage = ({ data }) => {
  const articles = data.allMarkdownRemark.edges

  return (
  <LayoutHome>
    <SEO title="Home" description="The personal website of Sean Dillingham" />
    <Header />
    <Grid
      gap={0}
      columns={[1, '1fr 2fr']}>
      <Box
        sx={{
          display: ['none', 'block'],
        }}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="A photo of me"
          style={{
            height: `100vh`,
            overflow: `hidden`,
            marginBottom: 0,
            position: `sticky`,
            top: 0,
          }}
          imgStyle={{
            objectFit: `cover`,
            objectPosition: `top`,
          }}/>
      </Box>
      <Box>
        <Box
          sx={{
            pb: [4, 5, 8],
            pt: [5, 8, 8],
          }}
          as='section'>
            <Grid
              gap={3}
              columns={[8]}
              sx={{ mx: ["21px", 5, 3], maxWidth: '820px' }}>
              <Box
                sx={{
                  gridColumn: ['1 / 9', '1 / 9', '2 / 8']
                }}>
                <Heading
                  as='h1'
                  sx={{
                    color: `grays.0`,
                    display: ['none', 'block'],
                    fontFamily: `sans`,
                    fontSize: [0, 8, 10],
                    fontWeight: `bold`,
                    lineHeight: `tight`,
                    mb: 3,
                  }}>
                  Sean Dillingham
                </Heading>
                <Text
                  as='p'
                  sx={{
                    color: `grays.1`,
                    fontFamily: `serifText`,
                    fontSize: [3, 4, 5],
                    fontWeight: `normal`,
                    lineHeight: `standard`,
                    mb: 3,
                  }}>
                  I'm a design leader based in Los Angeles. I build teams, design products, and write code.
                </Text>
                <Text
                  as='p'
                  sx={{
                    color: `grays.1`,
                    fontFamily: `serifText`,
                    fontSize: [1, 2, 2],
                    fontWeight: `normal`,
                    lineHeight: `generous`,
                    mb: 3,
                  }}>
                  I've been designing professionally since 2001. I'm passionate about leading teams, building design systems, and creating tools that help people get meaningful work done.
                </Text>
              </Box>
            </Grid>
        </Box>
        <Box 
          bg='grays.0'
          sx={{ py: [5, 6, 6] }}
          as='section' >
            <Grid
              gap={3}
              columns={[8]}
              sx={{ mx: ["21px", 5, 3], maxWidth: '820px' }}>
              <Box
                sx={{
                  gridColumn: ['1 / 9', '1 / 9', '2 / 7']
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
                  Experience
                </Heading>
                <Box
                  mb={4}>
                  <Text
                    as='summary'
                    sx={{
                      color: `slates.2`,
                      fontFamily: `mono`,
                      fontSize: 0,
                      fontWeight: `medium`,
                      letterSpacing: `extrawide`,
                      textTransform: `uppercase`,
                    }}>
                    2016 - present
                  </Text>
                  <Heading as='h2'>
                    <Link 
                      href='/work/signal-sciences/'
                      sx={{
                        color: `grays.8`,
                        fontFamily: `serif`,
                        fontSize: 4,
                        fontWeight: `normal`,
                        lineHeight: `comfortable`,
                        mb: 0,
                      }}>
                      Signal Sciences
                    </Link>
                  </Heading>
                  <Text
                    as='p'
                    sx={{
                      color: `grays.4`,
                      fontFamily: `sans`,
                      fontSize: 1,
                      lineHeight: `comfortable`,
                    }}>
                    I'm currently Head of Design at Signal Sciences, where we help companies protect their applications and data against hackers and attacks.
                  </Text>
                </Box>
                <Box mb={0}>
                  <Text
                    as='summary'
                    sx={{
                      color: `slates.2`,
                      fontFamily: `mono`,
                      fontSize: 0,
                      fontWeight: `medium`,
                      letterSpacing: `extrawide`,
                      textTransform: `uppercase`,
                    }}>
                    2011 - 2016
                  </Text>
                  <Heading as='h2'>
                    <Link 
                      href='/work/american-public-media/'
                      sx={{
                        color: `grays.8`,
                        fontFamily: `serif`,
                        fontSize: 4,
                        fontWeight: `normal`,
                        lineHeight: `comfortable`,
                        mb: 0,
                      }}>
                      American Public Media
                    </Link>
                  </Heading>
                  <Text
                    as='p'
                    sx={{
                      color: `grays.4`,
                      fontFamily: `sans`,
                      fontSize: 1,
                      lineHeight: `comfortable`,
                      mb: 0,
                    }}>
                    As  Director of UX for American Public Media and KPCC, I led design and engineering. I helped define product strategy, and shipped flagship products and award winning editorial projects.
                  </Text>
                </Box>
              </Box>
            </Grid>
        </Box>
        <Box
          bg='grays.6'
          sx={{ py: [5, 6, 6]}}
          as='section' >
            <Grid
              gap={3}
              columns={[8]}
              sx={{ mx: ["21px", 5, 3], maxWidth: '820px' }}>
              <Box
                sx={{ 
                  gridColumn:['1 / 9', '1 / 9', '2 / 9'],
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
                columns={[1, 1, 2]}>
                  {articles.map(({ node }) => {
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
              </Box>
            </Grid>
        </Box>
        <Box
          bg='grays.6'
          sx={{ py: 2 }}
          as='footer' >
          <Grid
            gap={3}
            columns={[8]}
            sx={{ mx: ["21px", 5, 3], maxWidth: '820px' }}>
            <Box sx={{ gridColumn: ['1 / 9', '1 / 9', '2 / 9'] }}>
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
          </Grid>
        </Box>
      </Box>
    </Grid>

  </LayoutHome>
)
}

export default IndexPage

export const pageQuery = graphql`
  query indexPageQuery {
    allMarkdownRemark(limit: 4, sort: { order: DESC, fields: [frontmatter___date] }) {
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
    file(relativePath: { eq: "img-profile.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
