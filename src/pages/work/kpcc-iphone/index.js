import React from "react"
import { Box, Container, Grid, Heading, Image, Text } from "theme-ui"
import { Global, css } from '@emotion/core'
import iphoneMap from "../../../images/kpcc-iphone/iphone-map.png"
import iphoneLive from "../../../images/kpcc-iphone/iphone-live.jpg"
import iphoneSegment from "../../../images/kpcc-iphone/iphone-segment.jpg"
import iphoneProgram from "../../../images/kpcc-iphone/iphone-program.jpg"
import iphoneScrubber from "../../../images/kpcc-iphone/iphone-scrubber.jpg"
import iphoneHome from "../../../images/kpcc-iphone/iphone-home.jpg"
import iphoneNotifications from "../../../images/kpcc-iphone/iphone-notifications.jpg"
import iphoneRecommendations from "../../../images/kpcc-iphone/iphone-recommendations.jpg"
import iphoneSwipe from "../../../images/kpcc-iphone/iphone-swipe.jpg"
import flowFavorites from "../../../images/kpcc-iphone/flow-favorites.png"
import flowMembership from "../../../images/kpcc-iphone/flow-membership.png"
import prototypePreroll from "../../../images/kpcc-iphone/iphone-preroll.mp4"
import prototypeRewind from "../../../images/kpcc-iphone/iphone-rewind.mp4"
import prototypeOnboarding from "../../../images/kpcc-iphone/iphone-onboarding.mp4"
import prototypeSeeking from "../../../images/kpcc-iphone/iphone-seeking.mp4"
import prototypeSwipe from "../../../images/kpcc-iphone/iphone-skip.mp4"

import Layout from "../../../components/layout"
import WorkFooter from "../../../components/workFooter"
import VideoMobile from "../../../components/videoMobile"
import SEO from "../../../components/seo"

const iphonePage = () => (
  <Layout>
    <SEO title="KPCC for iPhone" description="A case study: designing new ways for Angelinos to listen to the public radio they love." />
    <Global
      styles={css`
        @media screen and (max-width: 767px) {
          .videoMobile {
            height: auto !important;
            max-width: 100%;
          }
        }
      `}
    />
    <Box
      sx={{
        backgroundColor: "grays.6",
        pt: [5, 9, 9],
        pb: 5,
      }}>
      <Container
        sx={{
          maxWidth: "1300px",
          px: ["21px", 4, 3],
          width: "auto",
        }}>
        <Grid gap={3} columns={[12]}>
          <Box
            sx={{
              gridColumn: ["1 / 13", "1 / 13", "3 / 11"],
            }}>
            <Heading sx={{ variant: "headings.workH1" }}>KPCC for iPhone</Heading>
          </Box>
          <Box
            sx={{
              mb: [3, 5, 5],
              mt: -2,
              gridColumn: ["1 / 13", "1 / 9", "3 / 9"],
            }}>
            <Text
              sx={{
                variant: "texts.workSubheadLight",
              }}>
              Designing new ways for Angelinos to listen to the public radio they love
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ["1 /13", "1 / 4", "3 / 5"],
            }}>
            <Text color="slates.2" sx={{ mb: 1, variant: "texts.metadata" }}>
              My Role
            </Text>
            <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
              Product Design
            </Text>
            <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
              Motion Design
            </Text>
            <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
              Prototyping
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "4 / 13", "6 / 11"],
            }}>
            <Text sx={{ variant: "texts.workDescription" }}>
              <p>KPCC, the second largest public radio station in the U.S., has earned a loyal audience of 700,000 weekly radio listeners. In 2014, KPCC set out to build a new iOS app with the goal of garnering an equally devoted smartphone audience. With so many options for listening on smartphones, making an iPhone app that felt indispensable was a high bar to reach for.</p>
              <p>Working with KPCC’s editorial and business leadership, the product team set out to create compelling listening options beyond live broadcast.</p>
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.1" py="6">
      <Container
      sx={{
        maxWidth: "1300px",
        px: ["21px", 4, 3],
        width: "auto",
      }}>
        <Grid gap={3} columns={[12]}>
          <Box
            sx={{
              gridColumn: ["1 / 13", "1 / 13", "3 / 11"],
            }}>
            <Heading sx={{ variant: "headings.workH2" }}>Discovery</Heading>
          </Box>
          <Box
            sx={{
              mt: -2,
              gridColumn: ["1 / 13", "1 / 9", "3 / 9"],
            }}>
            <Text
              sx={{
                mb: [3, 5, 5],
                variant: "texts.workSubheadDark",
              }}>
              Finding key moments where KPCC’s app supports and enhances users’ daily routines
            </Text>
            <Text sx={{ variant: "texts.workBodyDark" }}>
              <p>The first UX sprint focused on key customer journeys where KPCC's app could fit into people's busy lives. Creating customer journey maps helped us to think beyond simple activities and user stories, exploring the emotional and psychological dimensions of their daily lives and interactions with our app.</p>
              <p>While there were many potential touchpoints worth exploring, we focused our journey map on the casual listening experience.</p>
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "1 / 13", "2 / 12"],
            }}>
            <Text
              sx={{ color: "grays.4", mb: 1, variant: "texts.metadata" }}>
              User Journey Map - Casual listening
            </Text>
            <Image 
              src={iphoneMap}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.0" py="6">
      <Container
      sx={{
        maxWidth: "1300px",
        px: ["21px", 4, 3],
        width: "auto",
      }}>
        <Grid gap={3} columns={[12]}>
          <Box
            sx={{
              gridColumn: ["1 / 13", "1 / 13", "3 / 11"],
            }}>
            <Heading sx={{ variant: "headings.workH2" }}>Design</Heading>
          </Box>
          <Box
            sx={{
              mt: -2,
              gridColumn: ["1 / 13", "1 / 9", "3 / 9"],
            }}>
            <Text
              sx={{
                mb: [3, 5, 5],
                variant: "texts.workSubheadDark",
              }}>
              Establishing the app’s features, structure, flows, and high fidelity polished UI
            </Text>
            <Text sx={{ variant: "texts.workBodyDark" }}>
              <p>Early design phases were spent sketching concepts to support distinct modes of listening beyond the live stream. Once we had established a structure for the app that would support our desired outcomes, I began exhaustively wireframing the app's screens. I created flows around user sign-in and personalization; smarter, more personalized membership appeals; and voice activation.</p>
              <p>In the process of revising the design, we converged on two marquee features for the app:</p>
              <p><strong>Live Rewind</strong>, which gave users the ability to time shift their listening back seconds or even hours (thanks to some cool streaming server tech developed at KPCC).</p>
              <p><strong>Recommendations</strong>, a daily curated listening experience that gave users the best of public radio in short, easy-to-consume segments.</p>
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.7" py="6">
      <Container
        sx={{
          maxWidth: "1300px",
          px: ["21px", 4, 3],
          width: "auto",
        }}>
        <Box sx={{ mb: 8 }}>
          <Text
            sx={{ color: "grays.4", mb: 1, variant: "texts.metadata" }}>
            Flow: Adding Favorites
          </Text>
          <Box sx={{ variant: "boxes.scrollBox" }}>
            <Image src={flowFavorites} sx={{ variant: "images.overflow" }} />
          </Box>
        </Box>
        <Box>
          <Text
            sx={{ color: "grays.4", mb: 1, variant: "texts.metadata" }}>
            Flow: Membership Appeals
          </Text>
          <Box sx={{ variant: "boxes.scrollBox" }}>
            <Image src={flowMembership} sx={{ variant: "images.overflow" }} />
          </Box>
        </Box>
      </Container>
    </Box>
    <Box backgroundColor="grays.1" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1300px",
          px: ["21px", 4, 3],
          width: "auto",
        }}>
        <Grid gap={3} columns={[12]}>
          <Box
          sx={{
              gridColumn: ["1 / 13", "2 / 12", "4 / 10"],
            }}>
            <Text
              sx={{ color: "grays.4", mb: 1, textAlign: "center", variant: "texts.metadata" }}>
              Live Stream UI
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "2 / 7", "4 / 7"],
            }}>
            <Image 
              src={iphoneHome}
              sx={{ borderColor: "grays.2", variant: "images.mobile" }}
            />
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "7 / 12", "7 / 10"],
            }}>
            <Image 
              src={iphoneLive}
              sx={{ borderColor: "grays.2", variant: "images.mobile" }}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.7" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1300px",
          px: ["21px", 4, 3],
          width: "auto",
        }}>
        <Grid gap={3} columns={[12]}>
          <Box
          sx={{
              gridColumn: ["1 / 13", "2 / 12", "4 / 10"],
            }}>
            <Text
              sx={{ color: "grays.4", mb: 1, textAlign: "center", variant: "texts.metadata" }}>
              Notifications and Recommendations
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "2 / 7", "4 / 7"],
            }}>
            <Image 
              src={iphoneNotifications}
              sx={{ borderColor: "grays.8", variant: "images.mobile" }}
            />
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "7 / 12", "7 / 10"],
            }}>
            <Image 
              src={iphoneRecommendations}
              sx={{ borderColor: "grays.8", variant: "images.mobile" }}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.1" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1300px",
          px: ["21px", 4, 3],
          width: "auto",
        }}>
        <Grid gap={3} columns={[12]}>
          <Box
          sx={{
              gridColumn: ["1 / 13", "2 / 12", "4 / 10"],
            }}>
            <Text
              sx={{ color: "grays.4", mb: 1, textAlign: "center", variant: "texts.metadata" }}>
              Programs and Episodes
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "2 / 7", "4 / 7"],
            }}>
            <Image 
              src={iphoneProgram}
              sx={{ borderColor: "grays.2", variant: "images.mobile" }}
            />
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "7 / 12", "7 / 10"],
            }}>
            <Image 
              src={iphoneSegment}
              sx={{ borderColor: "grays.2", variant: "images.mobile" }}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.7" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1300px",
          px: ["21px", 4, 3],
          width: "auto",
        }}>
        <Grid gap={3} columns={[12]}>
          <Box
          sx={{
              gridColumn: ["1 / 13", "2 / 12", "4 / 10"],
            }}>
            <Text
              sx={{ color: "grays.4", mb: 1, textAlign: "center", variant: "texts.metadata" }}>
              Swiping and Scrubbing States
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "2 / 7", "4 / 7"],
            }}>
            <Image 
              src={iphoneSwipe}
              sx={{ borderColor: "grays.8", variant: "images.mobile" }}
            />
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "7 / 12", "7 / 10"],
            }}>
            <Image 
              src={iphoneScrubber}
              sx={{ borderColor: "grays.8", variant: "images.mobile" }}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.0" py="6" sx={{ variant: "boxes.wrapper" }}>
      <Container
        sx={{
          maxWidth: "1300px",
          px: ["21px", 4, 3],
          width: "auto",
        }}>
        <Grid gap={3} columns={[12]}>
          <Box
            sx={{
              gridColumn: ["1 / 13", "1 / 13", "3 / 11"],
            }}>
            <Heading sx={{ variant: "headings.workH2" }}>Prototyping</Heading>
          </Box>
          <Box
            sx={{
              mt: -2,
              gridColumn: ["1 / 13", "1 / 9", "3 / 9"],
            }}>
            <Text
              sx={{
                mb: [3, 5, 5],
                variant: "texts.workSubheadDark",
              }}>
              Designing microinteractions to make KPCC’s iPhone app feel polished and delightful
            </Text>
            <Text sx={{ variant: "texts.workBodyDark" }}>
              <p>Once visual design was complete, I identified areas where comps needed to be prototyped to document detailed animations and transitions. I used Framer.js as my prototyping tool of choice. Its javascript-driven workflow allowed me to iterate quickly, and also allowed me to hack real audio into the prototypes.</p>
              <p>I built prototypes to communicate flows in the app where a complex set of transitions and animations needed to occur in order for the microinteractions to feel polished and delightful. I focused on the most important moments in the app: initiating and rewinding the live stream, moving between on-demand episodes, and a carefully sequenced app onboarding experience.</p>
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.7" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1300px",
          px: ["21px", 4, 3],
          width: "auto",
        }}>
        <Grid gap={3} columns={[12]}>
          <Box
          sx={{
              gridColumn: ["1 / 13", "5 / 9", "5 / 9"],
            }}>
            <Text
              sx={{ color: "grays.4", mb: 1, textAlign: "center", variant: "texts.metadata" }}>
              Live Stream and Preroll Ad
            </Text>
            <VideoMobile 
              src={prototypePreroll}
              borderColor="#09090C"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.1" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1300px",
          px: ["21px", 4, 3],
          width: "auto",
        }}>
        <Grid gap={3} columns={[12]}>
          <Box
          sx={{
              gridColumn: ["1 / 13", "5 / 9", "5 / 9"],
            }}>
            <Text
              sx={{ color: "grays.4", mb: 1, textAlign: "center", variant: "texts.metadata" }}>
              App Onboarding
            </Text>
            <VideoMobile 
              src={prototypeOnboarding}
              borderColor="#D8D7E0"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.7" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1300px",
          px: ["21px", 4, 3],
          width: "auto",
        }}>
        <Grid gap={3} columns={[12]}>
          <Box
          sx={{
              gridColumn: ["1 / 13", "5 / 9", "5 / 9"],
            }}>
            <Text
              sx={{ color: "grays.4", mb: 1, textAlign: "center", variant: "texts.metadata" }}>
              Live Rewind Interaction
            </Text>
            <VideoMobile 
              src={prototypeRewind}
              borderColor="#09090C"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.1" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1300px",
          px: ["21px", 4, 3],
          width: "auto",
        }}>
        <Grid gap={3} columns={[12]}>
          <Box
          sx={{
              gridColumn: ["1 / 13", "5 / 9", "5 / 9"],
            }}>
            <Text
              sx={{ color: "grays.4", mb: 1, textAlign: "center", variant: "texts.metadata" }}>
              Seeking Through Episodes
            </Text>
            <VideoMobile 
              src={prototypeSeeking}
              borderColor="#D8D7E0"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.7" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1300px",
          px: ["21px", 4, 3],
          width: "auto",
        }}>
        <Grid gap={3} columns={[12]}>
          <Box
          sx={{
              gridColumn: ["1 / 13", "5 / 9", "5 / 9"],
            }}>
            <Text
              sx={{ color: "grays.4", mb: 1, textAlign: "center", variant: "texts.metadata" }}>
              Swipe To Next Episode
            </Text>
            <VideoMobile 
              src={prototypeSwipe}
              borderColor="#09090C"
            />
          </Box>
        </Grid>
      </Container>
    </Box>

    <WorkFooter />
  </Layout>
)

export default iphonePage
