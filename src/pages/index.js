import React from "react"
import { Box, Flex, Grid, Heading, Image, Link, Text } from "theme-ui"
import profile from "../images/img-profile.jpg"
import "./constants.css"

import LayoutHome from "../components/layoutHome"
import Header from "../components/header"
import SEO from "../components/seo"

const IndexPage = () => (
  <LayoutHome>
    <SEO title="Home" />
    <Header />
    <Grid
      gap={0}
      columns={[2, '1fr 2fr']}>
      <Box>
        <Image
          src={profile}
          sx={{
            height: `100vh`,
            mb: 0,
            objectFit: `cover`,
            objectPosition: `top`,
            overflow: `hidden`,
            position: `sticky`,
            top: 0,
            width: `100vw`,
          }}/>
      </Box>
      <Box>
        <Box
          sx={{ py: 8 }}
          as='section'>
            <Grid
              gap={3}
              columns={[8]}
              sx={{ mx: 3, maxWidth: '820px' }}>
              <Box sx={{ gridColumn: '2 / 8' }}>
                <Heading
                  as='h1'
                  sx={{
                    color: 0,
                    fontFamily: `sans`,
                    fontSize: 10,
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
                    fontSize: 5,
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
                    fontSize: 2,
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
          sx={{ py: 6 }}
          as='section' >
            <Grid
              gap={3}
              columns={[8]}
              sx={{ mx: 3, maxWidth: '820px' }}>
              <Box sx={{ gridColumn: '2 / 7' }}>
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
                    }}>
                    As  Director of UX for American Public Media and KPCC, I led design and engineering. I helped define product strategy, and shipped flagship products and award-winning editorial projects.
                  </Text>
                </Box>
              </Box>
            </Grid>
        </Box>
        <Box
          bg='grays.6'
          sx={{ py: 6 }}
          as='section' >
            <Grid
              gap={3}
              columns={[8]}
              sx={{ mx: 3, maxWidth: '820px' }}>
              <Box sx={{ gridColumn: '2 / 9' }}>
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
                columns={[2]}>
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
                      Notes
                    </Text>
                    <Heading as='h2'>
                      <Link 
                        href='#'
                        sx={{
                          color: `grays.2`,
                          fontFamily: `serif`,
                          fontSize: 4,
                          fontWeight: `normal`,
                          lineHeight: `comfortable`,
                          mb: 0,
                        }}>
                        The Emotional Side of People Management
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
                      Random thoughts on the hard and seldom talked-about emotional dimension of being a manager.
                    </Text>
                  </Box>
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
                      Article
                    </Text>
                    <Heading as='h2'>
                      <Link 
                        href='#'
                        sx={{
                          color: `grays.2`,
                          fontFamily: `serif`,
                          fontSize: 4,
                          fontWeight: `normal`,
                          lineHeight: `comfortable`,
                          mb: 0,
                        }}>
                        The Design Loop and The Hero’s Journey
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
                      Finding echoes of the monomyth in the design process.
                    </Text>
                    <summary className="articleType"></summary>
                    <h2 className="articleTitle"><a href="#"></a></h2>
                    <p className="articleTeaser"></p>
                  </Box>
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
                      Notes
                    </Text>
                    <Heading as='h2'>
                      <Link 
                        href='#'
                        sx={{
                          color: `grays.2`,
                          fontFamily: `serif`,
                          fontSize: 4,
                          fontWeight: `normal`,
                          lineHeight: `comfortable`,
                          mb: 0,
                        }}>
                        The Emotional Side of People Management
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
                      Random thoughts on the hard and seldom talked-about emotional dimension of being a manager.
                    </Text>
                  </Box>
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
                      Article
                    </Text>
                    <Heading as='h2'>
                      <Link 
                        href='#'
                        sx={{
                          color: `grays.2`,
                          fontFamily: `serif`,
                          fontSize: 4,
                          fontWeight: `normal`,
                          lineHeight: `comfortable`,
                          mb: 0,
                        }}>
                        The Design Loop and The Hero’s Journey
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
                      Finding echoes of the monomyth in the design process.
                    </Text>
                    <summary className="articleType"></summary>
                    <h2 className="articleTitle"><a href="#"></a></h2>
                    <p className="articleTeaser"></p>
                  </Box>
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
            sx={{ mx: 3, maxWidth: '820px' }}>
            <Box sx={{ gridColumn: '2 / 9' }}>
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
      </Box>
    </Grid>

  </LayoutHome>
)

export default IndexPage
