import React from "react"
import { Box, Container, Grid, Heading, Link, Text } from "theme-ui"

const WorkFooter = () => (

  <Box 
    backgroundColor="background"
    sx={{
      pt: [5, 7, 7],
      variant: "boxes.wrapper",
    }}>
    <Container
      sx={{
        maxWidth: "1300px",
        px: ["21px", 4, 3],
        width: "auto",
      }}>
      <Grid
        gap={3}
        columns={[12]}>
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
            More Work 
          </Heading>
        </Box>
        <Box sx={{ gridColumn: ['1 / 13', '1 / 13', '1 / 3'] }}>
          <Heading
            as='h3'
            sx={{
              color: `grays.1`,
              fontFamily: `sans`,
              fontSize: 3,
              fontWeight: `normal`,
              letterSpacing: `comfortable`,
            }}>
            Experience
          </Heading>
          <Text
            sx={{
              color: `grays.3`,
              fontFamily: `sans`,
              fontSize: 1,
            }}>
            Places I've worked
          </Text>
        </Box>
        <Box sx={{ gridColumn: ['1 / 13', '1 / 5', '5 / 8'] }}>
          <Text
            sx={{
              color: `slates.2`,
              fontFamily: `mono`,
              fontSize: 0,
              fontWeight: `medium`,
              letterSpacing: `extrawide`,
              lineHeight: `tight`,
              textTransform: `uppercase`,
            }}>
            2020 - Present
            </Text>
          <Heading
            as='h2'>
            <Link
              href='/work/honey/'
              sx={{
                color: `grays.1`,
                fontFamily: `sans`,
                fontSize: 4,
                fontWeight: `normal`,
              }}>
              Honey / PayPal
            </Link>
          </Heading>
        </Box>
        <Box sx={{ gridColumn: ['1 / 13', '5 / 13', '8 / 13'] }}>
          <Text
          sx={{
            color: `grays.3`,
            fontFamily: `sans`,
            fontSize: 1,
            lineHeight: `comfortable`,
            mt: [-2, 0, 0],
            mb: [3, 5, 5],
          }}>
            I lead a team of 15 product designers responsible for global online shopping across Honey and PayPal products.
          </Text>
        </Box>
        <Box sx={{ gridColumn: ['1 / 13', '1 / 5', '5 / 8'] }}>
          <Text
            sx={{
              color: `slates.2`,
              fontFamily: `mono`,
              fontSize: 0,
              fontWeight: `medium`,
              letterSpacing: `extrawide`,
              lineHeight: `tight`,
              textTransform: `uppercase`,
            }}>
            2016 - 2020
            </Text>
          <Heading
            as='h2'>
            <Link
              href='/work/signal-sciences/'
              sx={{
                color: `grays.1`,
                fontFamily: `sans`,
                fontSize: 4,
                fontWeight: `normal`,
              }}>
              Signal Sciences
            </Link>
          </Heading>
        </Box>
        <Box sx={{ gridColumn: ['1 / 13', '5 / 13', '8 / 13'] }}>
          <Text
          sx={{
            color: `grays.3`,
            fontFamily: `sans`,
            fontSize: 1,
            lineHeight: `comfortable`,
            mt: [-2, 0, 0],
            mb: [3, 5, 5],
          }}>
          Signal Sciences helps companies protect their applications against attacks. As Head of Design, I helped the startup scale through several stages of growth up through acquisition.
          </Text>
        </Box>
        <Box sx={{ gridColumn: ['1 / 13', '1 / 5', '5 / 8'] }}>
          <Text
            sx={{
              color: `slates.2`,
              fontFamily: `mono`,
              fontSize: 0,
              fontWeight: `medium`,
              letterSpacing: `extrawide`,
              lineHeight: `tight`,
              textTransform: `uppercase`,
            }}>
            2011 - 2016</Text>
          <Heading>
            <Link
              href='/work/american-public-media/'
              sx={{
                color: `grays.1`,
                fontFamily: `sans`,
                fontSize: 4,
                fontWeight: `normal`,
              }}>
              American Public Media
            </Link>
          </Heading>
        </Box>
        <Box
          sx={{ 
            gridColumn: ['1 / 13', '5 / 13', '8 / 13'],
            mb: [0, 5, 5],
          }}>
          <Text
          sx={{
            color: `grays.3`,
            fontFamily: `sans`,
            fontSize: 1,
            lineHeight: `comfortable`,
            mt: [-2, 0, 0],
            mb: [3, 5, 5],
          }}>
          As Director of UX for American Public Media and KPCC, I led design and engineering. I helped define product strategy, designed all our platform products, and shipped award winning editorial projects.
          </Text>
        </Box>
        <Box
          sx={{
            gridColumn: ['1 / 13', '1 / 13', '1 / 3'],
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
            Case Studies
          </Heading>
          <Text
          sx={{
              color: `grays.3`,
              fontFamily: `sans`,
              fontSize: 1,
            }}>
            Selected work
          </Text>
        </Box>
        {/* <Box sx={{ gridColumn: '5 / 8' }}>
          <Text
            sx={{
              color: `slates.2`,
              fontFamily: `mono`,
              fontSize: 0,
              fontWeight: `medium`,
              letterSpacing: `extrawide`,
              lineHeight: `tight`,
              textTransform: `uppercase`,
            }}>
            Web App
          </Text>
          <Heading>
            <Link
              href='/work/rules-platform/'
              sx={{
                color: `grays.1`,
                fontFamily: `sans`,
                fontSize: 4,
                fontWeight: `normal`,
              }}>
              Signal Sciences Rules Platform
            </Link>
          </Heading>
        </Box>
        <Box sx={{ gridColumn: '8 / 13' }}>
          <Text
          sx={{
            color: `grays.3`,
            fontFamily: `sans`,
            fontSize: 1,
            lineHeight: `comfortable`,
            mb: 5,
          }}>
          Signal Sciences has the most intelligent decision-making engine of any app security platform. I designed features to put that power into users' hands, enabling them to tailor security rules to match their business.
          </Text>
        </Box> */}
        <Box sx={{ gridColumn: ['1 / 13', '1 / 5', '5 / 8'] }}>
          <Text
            sx={{
              color: `slates.2`,
              fontFamily: `mono`,
              fontSize: 0,
              fontWeight: `medium`,
              letterSpacing: `extrawide`,
              lineHeight: `tight`,
              textTransform: `uppercase`,
            }}>
            Mobile App
          </Text>
          <Heading>
            <Link
              href='/work/kpcc-iphone/'
              sx={{
                color: `grays.1`,
                fontFamily: `sans`,
                fontSize: 4,
                fontWeight: `normal`,
              }}>
              KPCC for iPhone
            </Link>
          </Heading>
        </Box>
        <Box sx={{ gridColumn: ['1 / 13', '5 / 13', '8 / 13'] }}>
          <Text
          sx={{
            color: `grays.3`,
            fontFamily: `sans`,
            fontSize: 1,
            lineHeight: `comfortable`,
            mt: [-2, 0, 0],
            mb: [3, 5, 5],
          }}>
          KPCC, the second largest public radio station in the U.S., earned a loyal audience of 700,000 weekly radio listeners. In 2014, I designed their new iOS app to help them garner an equally devoted smartphone audience.
          </Text>
        </Box>
        <Box sx={{ gridColumn: ['1 / 13', '1 / 5', '5 / 8'] }}>
          <Text
            sx={{
              color: `slates.2`,
              fontFamily: `mono`,
              fontSize: 0,
              fontWeight: `medium`,
              letterSpacing: `extrawide`,
              lineHeight: `tight`,
              textTransform: `uppercase`,
            }}>
            Web App
          </Text>
          <Heading>
            <Link
              href='/work/outpost/'
              sx={{
                color: `grays.1`,
                fontFamily: `sans`,
                fontSize: 4,
                fontWeight: `normal`,
              }}>
              Outpost CMS
            </Link>
          </Heading>
        </Box>
        <Box
          sx={{
            gridColumn: ['1 / 13', '5 / 13', '8 / 13'],
            mb: 5,
          }}>
          <Text
          sx={{
            color: `grays.3`,
            fontFamily: `sans`,
            fontSize: 1,
            lineHeight: `comfortable`,
            mt: [-2, 0, 0],
            mb: [3, 5, 5],
          }}>
          I designed KPCC’s publishing platform to bring structure and clarity to the content authoring experience. Clear, powerful authoring flows allow reporters to move quickly from blank canvas to published article.
          </Text>
        </Box>
      </Grid>
    </Container>
  </Box>
)

export default WorkFooter