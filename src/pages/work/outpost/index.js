import React from "react"
import { Box, Container, Grid, Heading, Image, Text } from "theme-ui"
import { Global, css } from '@emotion/core'
import outpostDashboard from "images/outpost/dashboard.jpg"
import outpostComments from "images/outpost/comments.jpg"
import outpostContentbot from "images/outpost/contentbot.jpg"
import outpostNotifications from "images/outpost/notifications.jpg"
import outpostEditor from "images/outpost/editor.mp4"

import Layout from "components/layout"
import WorkFooter from "components/workFooter"
import Video from "components/video"
import SEO from "components/seo"

const OutpostPage = () => (
  <Layout>
    <SEO title="Outpost CMS" description="A case study: Reimagining KPCC's publishing system for the needs of a modern newsroom." />
    <Global
      styles={css`
        @media screen and (max-width: 767px) {
          .videoDesktop {
            border-radius: 0 !important;
            border-width: 0 !important;
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
            <Heading sx={{ variant: "headings.workH1" }}>Outpost CMS</Heading>
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
              Reimagining KPCC's publishing system for the needs of a modern
              newsroom
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
              Prototyping
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "4 / 13", "6 / 11"],
            }}>
            <Text sx={{ variant: "texts.workDescription" }}>
              <p>At KPCC, we see the CMS as “<a href="https://twitter.com/JohannavanEeden/status/534416060116922368">the box of all that’s possible.</a>” It’s
              also the tool that our reporters and editors spends their entire day
              in, so we built our publishing platform from the ground up, tailored
              to their specific needs.</p>
              <p>In an industry where most newsrooms hate their CMS, we’re proud of
              the fact that KPCC’s editorial staff find Outpost a pleasure to use.
              And while Outpost did a good job supporting the daily publishing
              needs of KPCC’s growing newsroom, we were missing opportunities to
              delight users, automate repetitive tasks, and free up journalists to
              do more important work.</p>
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.0"
      sx={{
        pt: 6,
        pb: [6, 8, 8],
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
            <Heading sx={{ variant: "headings.workH2" }}>The Redesign</Heading>
          </Box>
          <Box
            sx={{
              mb: [0, 5, 5],
              mt: -2,
              gridColumn: ["1 / 13", "1 / 9", "3 / 9"],
            }}>
            <Text
              sx={{
                mb: [3, 5, 5],
                variant: "texts.workSubheadDark",
              }}>
              Minimize distractions and guiding writers toward creating better content
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
              gridColumn: ["1 / 13", "1 / 13", "2 / 12"],
            }}>
            <Text
              sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
              Article Editor
            </Text>
            <Image 
              src={outpostDashboard}
              sx={{ borderColor: "grays.1", variant: "images.desktopInline" }}
            />
          </Box>
        </Grid>
      </Container>
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
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          In-App Notifications
        </Text>
        <Image 
          src={outpostNotifications}
          sx={{ borderColor: "grays.1", variant: "images.desktop" }}
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
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
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
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          Collaboration & Comments
        </Text>
        <Image 
          src={outpostComments}
          sx={{ borderColor: "grays.1", variant: "images.desktop" }}
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
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          Automated Content Review
        </Text>
        <Image 
          src={outpostContentbot}
          sx={{ borderColor: "grays.1", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    
    <WorkFooter />
  </Layout>
)

export default OutpostPage