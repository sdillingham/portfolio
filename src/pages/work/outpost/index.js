import React from "react"
import { Box, Container, Grid, Heading, Image, Link, Text } from "theme-ui"
import outpostDashboard from "../../../images/outpost/dashboard.jpg"
import outpostComments from "../../../images/outpost/comments.jpg"
import outpostContentbot from "../../../images/outpost/contentbot.jpg"
import outpostNotifications from "../../../images/outpost/notifications.jpg"
import outpostEditor from "../../../images/outpost/editor.mp4"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Video from "../../../components/video"

const OutpostPage = () => (
  <Layout>
    <SEO title="Outpost CMS" />
    <Box
      sx={{
        backgroundColor: "grays.6",
        pt: 9,
        pb: 5,
      }}>
      <Grid gap={3} columns={[12]} sx={{ mx: "auto", maxWidth: "1244px" }}>
        <Box
          sx={{
            gridColumn: "3 / 11",
          }}
        >
          <Heading sx={{ variant: "headings.workH1" }}>Outpost CMS</Heading>
        </Box>
        <Box
          sx={{
            mb: 5,
            mt: -2,
            gridColumn: "3 / 9",
          }}
        >
          <Text
            sx={{
              variant: "texts.workSubheadLight",
            }}
          >
            Reimagining KPCC's publishing system for the needs of a modern
            newsroom
          </Text>
        </Box>
        <Box
          sx={{
            gridColumn: "3 / 5",
          }}
        >
          <Text color="slates.2" sx={{ mb: 1, variant: "texts.metadata" }}>
            My Role
          </Text>
          <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
            Product Design
          </Text>
          <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
            Prototyping
          </Text>
        </Box>
        <Box
          sx={{
            gridColumn: "6 / 11",
          }}
        >
          <Text sx={{ variant: "texts.workDescription" }}>
            At KPCC, we see the CMS as “<a href="https://twitter.com/JohannavanEeden/status/534416060116922368">the box of all that’s possible.</a>” It’s
            also the tool that our reporters and editors spends their entire day
            in, so we built our publishing platform from the ground up, tailored
            to their specific needs.
          </Text>
          <Text sx={{ variant: "texts.workDescription" }}>
            In an industry where most newsrooms hate their CMS, we’re proud of
            the fact that KPCC’s editorial staff find Outpost a pleasure to use.
            And while Outpost did a good job supporting the daily publishing
            needs of KPCC’s growing newsroom, we were missing opportunities to
            delight users, automate repetitive tasks, and free up journalists to
            do more important work.
          </Text>
        </Box>
      </Grid>
    </Box>
    <Box backgroundColor="grays.0" pt="6" pb="8">
      <Grid gap={3} columns={[12]} sx={{ mx: "auto", maxWidth: "1244px" }}>
        <Box
          sx={{
            gridColumn: "3 / 11",
          }}
        >
          <Heading sx={{ variant: "headings.workH2" }}>The Redesign</Heading>
        </Box>
        <Box
          sx={{
            mb: 5,
            mt: -2,
            gridColumn: "3 / 9",
          }}
        >
          <Text
            sx={{
              mb: 5,
              variant: "texts.workSubheadDark",
            }}
          >
            Delivering clarity and coherence while scaling a complex technical
            product
          </Text>
          <Text sx={{ variant: "texts.workBodyDark" }}>
            The new Outpost UI strives to bring structure and clarity to the
            content authoring experience. A clear and direct authoring flow
            allows reporters to move quickly from blank canvas to published
            article. Typography and interface contrast were carefully considered
            to improve legibility, reduce fatigue and allow users to focus on
            discreet task areas.
          </Text>
        </Box>
        <Box
          sx={{
            gridColumn: "2 / 12",
          }}>
          <Text
            sx={{ color: "grays.4", mb: 1, ml: 3, variant: "texts.metadata" }}>
            Article Editor
          </Text>
          <Image 
            src={outpostDashboard}
            sx={{ borderColor: "grays.1", variant: "images.desktop" }}
          />
        </Box>
      </Grid>
    </Box>
    <Box backgroundColor="grays.1" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "608px",
        }}>
        <Text sx={{ variant: "texts.cardText"}}>
          <p>The newsroom doesn’t stop caring about their stories after they hit the publish button.</p>
          <p>A new notifications view points reporters and editors to items that require their attention and keeps them up to date as others make changes to their stories.</p>
        </Text>
      </Container>
    </Box>
    <Box backgroundColor="grays.0" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: 3, variant: "texts.metadata" }}>
          In-App Notifications
        </Text>
        <Image 
          src={outpostNotifications}
          sx={{ borderColor: "grays.1", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.1" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "608px",
        }}>
        <Text sx={{ variant: "texts.cardText"}}>
          <p>Outpost’s previous WYSIWYG editor didn’t guide users to create well-structured content. Producers often embeded complex JavaScript or iFrames, resulting in brittle or broken content.</p>
          <p>Outpost’s new highly structured inline editor is there when you need it, and gets out of the way when you’re typing.</p>
        </Text>
      </Container>
    </Box>
    <Box backgroundColor="grays.0" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: 3, variant: "texts.metadata" }}>
          Elegant Text Editing
        </Text>
        <Video 
          src={outpostEditor}
          borderColor="#F3F2F7"
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.1" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "608px",
        }}>
        <Text sx={{ variant: "texts.cardText"}}>
          <p>KPCC conducts too much of its editorial workflow over email. As a result, important discussions about stories, sources and status updates are all lost in the inbox.</p>
          <p>To bring communication closer to the content, I designed an editorial-focused commenting system integrated into Outpost, adding the ability to associate a comment with a specific part of a story.</p>
        </Text>
      </Container>
    </Box>
    <Box backgroundColor="grays.0" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: 3, variant: "texts.metadata" }}>
          Collaboration & Comments
        </Text>
        <Image 
          src={outpostComments}
          sx={{ borderColor: "grays.1", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.1" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "608px",
        }}>
        <Text sx={{ variant: "texts.cardText"}}>
          <p>Contentbot is an always-present robot editor in Outpost, reviewing content every time it’s saved and auditing changes against KPCC’s editorial style guide.</p>
          <p>As it finds mistakes or style violations, it flags them and suggests improvements, reducing the burden on editors.</p>
          <p>By integrating with Outpost’s commenting feature, Contentbot behaves like any other user in the system, humanizing the process of automated content review.</p>
        </Text>
      </Container>
    </Box>
    <Box backgroundColor="grays.0" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: 3, variant: "texts.metadata" }}>
          Automated Content Review
        </Text>
        <Image 
          src={outpostContentbot}
          sx={{ borderColor: "grays.1", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="background" sx={{ pt: 7, variant: "boxes.wrapper"}}>
      <Grid
        gap={3}
        columns={[12]}
        sx={{ mx: 'auto', maxWidth: '1244px' }}>
        <Box 
          sx={{
            gridColumn: '1 / 13',
            mb: 5,
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
        <Box sx={{ gridColumn: '1 / 3' }}>
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
        <Box sx={{ gridColumn: '5 / 8' }}>
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
            2016 - Present
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
        <Box sx={{ gridColumn: '8 / 13' }}>
          <Text
          sx={{
            color: `grays.3`,
            fontFamily: `sans`,
            fontSize: 1,
            lineHeight: `comfortable`,
            mb: 5,
          }}>
          I'm currently Head of Product Design at Signal Sciences. We help companies defend their applications and data against hackers and attacks, protecting over 1.5 trillion requests each month.
          </Text>
        </Box>
        <Box sx={{ gridColumn: '5 / 8' }}>
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
            gridColumn: '8 / 13',
            mb: 5,
          }}>
          <Text
          sx={{
            color: `grays.3`,
            fontFamily: `sans`,
            fontSize: 1,
            lineHeight: `comfortable`,
            mb: 5,
          }}>
          As Director of UX for American Public Media and KPCC, I led design and engineering. I helped define product strategy, designed all our platform products, and shipped award-winning editorial projects.
          </Text>
        </Box>
        <Box
          sx={{
            gridColumn: '1 / 3',
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
        <Box sx={{ gridColumn: '5 / 8' }}>
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
        </Box>
        <Box sx={{ gridColumn: '5 / 8' }}>
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
        <Box sx={{ gridColumn: '8 / 13' }}>
          <Text
          sx={{
            color: `grays.3`,
            fontFamily: `sans`,
            fontSize: 1,
            lineHeight: `comfortable`,
            mb: 5,
          }}>
          KPCC, the second largest public radio station in the U.S., earned a loyal audience of 700,000 weekly radio listeners. In 2014, I designed their new iOS app to help them garner an equally devoted smartphone audience.
          </Text>
        </Box>
        <Box sx={{ gridColumn: '5 / 8' }}>
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
            gridColumn: '8 / 13',
            mb: 5,
          }}>
          <Text
          sx={{
            color: `grays.3`,
            fontFamily: `sans`,
            fontSize: 1,
            lineHeight: `comfortable`,
            mb: 5,
          }}>
          I designed KPCC’s publishing platform to bring structure and clarity to the content authoring experience. Clear, powerful authoring flows allow reporters to move quickly from blank canvas to published article.
          </Text>
        </Box>
      </Grid>
    </Box>
  </Layout>
)

export default OutpostPage