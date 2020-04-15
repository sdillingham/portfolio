import React from "react"
import { Box, Container, Grid, Heading, Image, Link, Text } from "theme-ui"
import kpccStory from "../../../images/american-public-media/scpr-story.jpg"
import kpccProgram from "../../../images/american-public-media/scpr-program.jpg"
import iphoneLive from "../../../images/kpcc-iphone/iphone-live.jpg"
import iphoneSegment from "../../../images/kpcc-iphone/iphone-segment.jpg"
import iphoneProgram from "../../../images/kpcc-iphone/iphone-program.jpg"
import iphoneScrubber from "../../../images/kpcc-iphone/iphone-scrubber.jpg"
import apmComponents from "../../../images/american-public-media/apmreports-components.jpg"
import apmFeature from "../../../images/american-public-media/apmreports-feature.jpg"
import apmHomepage from "../../../images/american-public-media/apmreports-homepage.jpg"
import outpostDashboard from "../../../images/outpost/dashboard.jpg"
import outpostComments from "../../../images/outpost/comments.jpg"
import audiovisionStory from "../../../images/american-public-media/scpr-audiovision-story.jpg"
import audiovisionLanding from "../../../images/american-public-media/scpr-audiovision-landing.jpg"
import firetrackerIncident from "../../../images/american-public-media/scpr-firetracker-incident.jpg"
import firetrackerHome from "../../../images/american-public-media/scpr-firetracker-home.jpg"
import officerNarrative from "../../../images/american-public-media/scpr-officer-narrative.jpg"
import officerArticle from "../../../images/american-public-media/scpr-officer-article.jpg"
import brandsOne from "../../../images/american-public-media/brands-1.png"
import brandsTwo from "../../../images/american-public-media/brands-2.png"

import Layout from "../../../components/layout"
import WorkFooter from "../../../components/workFooter"
import SEO from "../../../components/seo"

const APMPage = () => (
  <Layout>
    <SEO title="American Public Media" description="A case study: designing flagship products and award-winning editorial projects." />
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
            <Heading sx={{ variant: "headings.workH1" }}>American Public Media</Heading>
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
              Designing flagship products and award-winning editorial projects
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
              Director of UX
            </Text>
            <Text color="grays.3" sx={{ mb: 4, variant: "texts.metadata" }}>
              2011 - 2016
            </Text>
            <Text color="slates.2" sx={{ mb: 1, variant: "texts.metadata" }}>
              Design Team
            </Text>
            <Text sx={{ mb: 1, variant: "texts.metadata" }}>
              <Link href="https://www.katie-briggs.com/" color="grays.3">Katie Briggs</Link>
            </Text>
            <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
              <Link href="https://jonwhitestudio.com/" color="grays.3">Jon White</Link>
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "4 / 13", "6 / 11"],
            }}>
            <Text sx={{ variant: "texts.workDescription" }}>
              <p>American Public Media is a public radio powerhouse. It produces popular programs like Marketplace, Dinner Party Download, and The Splendid Table. APM also owns Southern California Public Radio (KPCC), the second largest newsroom in Los Angeles and one of the most listened-to public radio stations in the U.S.</p>
              <p>In 2011, I joined KPCC to lead product design and engineering. I redesigned KPCC's website, designed native apps for iPhone and iPad, and led the creation of a custom CMS and innovative live streaming server. Later I focused on leading UX across all of American Public Media, leading design for APM's national investigative unit, APM Reports.</p>
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.0" sx={{ py: [5, 6, 6] }}>
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
            <Heading sx={{ variant: "headings.workH2" }}>Audience Products</Heading>
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
              Designing new ways for Angelenos to connect to the public radio station they love
            </Text>
            <Text sx={{ variant: "texts.workBodyDark" }}>
              <p>Public radio is not a number on your radio dial. Public radio is an ethos. It's a way of viewing the world with curiosity and care. I joined KPCC at a pivotal moment when the company aspired to become as essential on digital platforms as they were on broadcast radio.</p>
              <p>I was responsible for defining, designing, and leading the development of KPCC's core audience product offerings – our websites, mobile apps, and digital listening experiences. During my time at KPCC, I shipped multiple new native apps and websites, redesigned legacy websites, and launched new revenue products for both membership and corporate underwriting.</p>
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.1" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          Redesigned Story Pages
        </Text>
        <Image 
          src={kpccStory}
          sx={{ borderColor: "grays.2", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.2" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          Redesigned Show Pages
        </Text>
        <Image 
          src={kpccProgram}
          sx={{ borderColor: "grays.3", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.0" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "608px",
        }}>
        <Text sx={{ variant: "texts.cardText"}}>
          <p>In 2014, KPCC set out to build a new iOS app with the goal of garnering an equally devoted smartphone audience. With so many options for listening on smartphones, making an iPhone app that felt indispensable was a high bar to reach for.</p>
          <p>We leveraged KPCC’s great audio to build an app that fits into people’s busy lives in new ways. The app lets users time shift their listening back seconds or even hours, and delivers a daily curated listening experience of short, easy-to-consume segments.</p>
        </Text>
      </Container>
    </Box>
    <Box backgroundColor="grays.1" sx={{ variant: "boxes.card" }}>
      <Grid gap={3} columns={[12]} sx={{ mx: "auto", maxWidth: "1244px" }}>
        <Box
        sx={{
            gridColumn: ["1 / 13", "4 / 10", "4 / 10"],
          }}>
          <Text
            sx={{ color: "grays.4", mb: 1, textAlign: "center", variant: "texts.metadata" }}>
            Live and Segment Player Views
          </Text>
        </Box>
        <Box
          sx={{
            gridColumn: ["1 / 13", "4 / 7", "4 / 7"],
          }}>
          <Image 
            src={iphoneLive}
            sx={{ borderColor: "grays.2", variant: "images.mobile" }}
          />
        </Box>
        <Box
          sx={{
            gridColumn: ["1 / 13", "7 / 10", "7 / 10"],
          }}>
          <Image 
            src={iphoneSegment}
            sx={{ borderColor: "grays.2", variant: "images.mobile" }}
          />
        </Box>
      </Grid>
    </Box>
    <Box backgroundColor="grays.7" sx={{ variant: "boxes.card" }}>
      <Grid gap={3} columns={[12]} sx={{ mx: "auto", maxWidth: "1244px" }}>
        <Box
        sx={{
            gridColumn: ["1 / 13", "4 / 10", "4 / 10"],
          }}>
          <Text
            sx={{ color: "grays.4", mb: 1, textAlign: "center", variant: "texts.metadata" }}>
            Show And Episode Views
          </Text>
        </Box>
        <Box
          sx={{
            gridColumn: ["1 / 13", "4 / 7", "4 / 7"],
          }}>
          <Image 
            src={iphoneProgram}
            sx={{ borderColor: "grays.8", variant: "images.mobile" }}
          />
        </Box>
        <Box
          sx={{
            gridColumn: ["1 / 13", "7 / 10", "7 / 10"],
          }}>
          <Image 
            src={iphoneScrubber}
            sx={{ borderColor: "grays.8", variant: "images.mobile" }}
          />
        </Box>
      </Grid>
    </Box>
    <Box backgroundColor="grays.0" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "608px",
        }}>
        <Text sx={{ variant: "texts.cardText"}}>
          <p>In 2015, American Public Media's launched a national investigative news division, APM Reports. The Peabody-winning team of journalists publishes groundbreaking stories and podcasts, focusing on powerful institutions and people, injustice and accountability.</p>
          <p>I led product design and frontend development for its website. I tried to create a beautiful and flexible destination to elevate APM Reports’ hard-hitting and nationally recognized investigative journalism.</p>
        </Text>
      </Container>
    </Box>
    <Box backgroundColor="grays.1" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          APM Reports: Homepage
        </Text>
        <Image 
          src={apmHomepage}
          sx={{ borderColor: "grays.2", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.7" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          APM Reports: Feature Pages
        </Text>
        <Image 
          src={apmFeature}
          sx={{ borderColor: "grays.8", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.0" sx={{ variant: "boxes.card" }}>
      <Image 
          src={apmComponents}
          sx={{ variant: "images.full" }}
      />
    </Box>
    <Box backgroundColor="grays.0" sx={{ py: [5, 6, 6], variant: "boxes.wrapper" }}>
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
            <Heading sx={{ variant: "headings.workH2" }}>Publishing Platform</Heading>
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
              Reimagining publishing systems for the needs of a modern newsroom
            </Text>
            <Text sx={{ variant: "texts.workBodyDark" }}>
              <p>At KPCC, we see the CMS as “the box of all that’s possible.” It’s also the tool that our reporters and editors spends their entire day in, so we built our publishing platform from the ground up, tailored to their specific needs. Since 2012, all of our websites have been powered by a custom Rails engine we call Outpost. In an industry where most newsrooms hate their CMS, we’re proud of the fact that KPCC’s editorial staff find Outpost a pleasure to use.</p>
              <p>And since KPCC is know for great live radio, we looked for opportunities to innovate in live streaming, a space where the tech had stagnated for years. We built our own Node.js-based streaming server, StreamMachine, the first open source project that brought DVR-style replay and rewind to live radio. KPCC was the first public radio station to allow listeners options like "play the current program from its start", or "play the 9am broadcast." Our idea was so compelling that other stations followed suit, and the biggest vendor in the industry even copied our tech and turned it into part of their flagship service offering. </p>
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.1" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          Outpost: Article Editor
        </Text>
        <Image 
          src={outpostDashboard}
          sx={{ borderColor: "grays.2", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.2" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          Outpost: Collaboration & Comments
        </Text>
        <Image 
          src={outpostComments}
          sx={{ borderColor: "grays.3", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.0" sx={{ py: [5, 6, 6], variant: "boxes.wrapper" }}>
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
            <Heading sx={{ variant: "headings.workH2" }}>Editorial Projects</Heading>
          </Box>
          <Box
            sx={{
              mt: -2,
              gridColumn: ["1 / 13", "1 / 9", "3 / 9"],
            }}>
            <Text
              sx={{
                mb: 5,
                variant: "texts.workSubheadDark",
              }}>
              Elevating important stories with bespoke design
            </Text>
            <Text sx={{ variant: "texts.workBodyDark" }}>
              <p>There's good journalism, and there's journalism that changes things. Journalism that impacts policy, inspires change, holds the powerful accountable, or helps the public make better decisions.</p>
              <p>At KPCC I designed and provided creative direction on multiple special editorial projects. These bespoke projects gave us a chance to think expansively about how to use design as a way to tell stories. Our work won multiple awards, made national headlines, and helped changed the public conversation about important issues.</p>
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.1" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          AudioVision: Story Pages
        </Text>
        <Image 
          src={audiovisionStory}
          sx={{ borderColor: "grays.2", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.2" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          AudioVision: Landing Pages
        </Text>
        <Image 
          src={audiovisionLanding}
          sx={{ borderColor: "grays.3", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.0" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "608px",
        }}>
        <Text sx={{ variant: "texts.cardText"}}>
          <p>2013 was the year that California wildfires caught the world's attention. Instead of passively reporting on horrific spectacle, KPCC wanted to build a useful tool for audiences to learn about active fires and evacuation warnings.</p>
          <p>We created Fire Tracker, automatically merging CalFire data, KPCC coverage, and relevant tweets into the best wildfire resource in the state. Fire Tracker won awards and its shareable cards were embedded in articles from CNN, the New York Times, NPR, and the Guardian.</p>
        </Text>
      </Container>
    </Box>
    <Box backgroundColor="grays.2" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          Fire Tracker: Homepage
        </Text>
        <Image 
          src={firetrackerHome}
          sx={{ borderColor: "grays.3", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.7" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          Fire Tracker: Incident Page
        </Text>
        <Image 
          src={firetrackerIncident}
          sx={{ borderColor: "grays.8", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.0" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "608px",
        }}>
        <Text sx={{ variant: "texts.cardText"}}>
          <p>If you live in Los Angeles, you know anecdotally that civilians are shot by police far too often. But police officials don't share data that would help the public understand the true size and shape of the problem.</p>
          <p>KPCC used District Attorney documents as a backdoor into data that answered key questions: How often do police in L.A. county shoot civilians? How frequently are unarmed people shot? (A lot.) Is race a factor?  (It is.)</p>
          <p>Officer Involved combined interactive data, visual storytelling, and long form articles to turn this story into national news.</p>
        </Text>
      </Container>
    </Box>
    <Box backgroundColor="grays.7" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          Officer Involved: Visual Narrrative
        </Text>
        <Image 
          src={officerNarrative}
          sx={{ borderColor: "grays.8", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.1" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          Officer Involved: Long Form Articles
        </Text>
        <Image 
          src={officerArticle}
          sx={{ borderColor: "grays.2", height: "75vh", variant: "images.desktop" }}
        />
      </Container>
    </Box>
    <Box backgroundColor="grays.0" sx={{ py: [5, 6, 6], variant: "boxes.wrapper" }}>
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
            <Heading sx={{ variant: "headings.workH2" }}>The Team</Heading>
          </Box>
          <Box
            sx={{
              mt: -2,
              gridColumn: ["1 / 13", "1 / 9", "3 / 9"],
            }}>
            <Text
              sx={{
                mb: 5,
                variant: "texts.workSubheadDark",
              }}>
              Finding great talent to work together on a great mission
            </Text>
            <Text sx={{ variant: "texts.workBodyDark" }}>
              <p>Working at KPCC gave me the opportunity to hone my hiring skills. From 2011-2016, I hired all the designers and engineers at KPCC, finding talented people who wanted to apply their craft to a public service mission.</p>
              <p>My vision was to create great products delivering inspiring journalism to all Angelinos. But with modest resources, I had to build a team that could punch above its weight. During my five years at KPCC, I built one of the strongest product teams in public media, in part by embracing distributed teams and hiring outside the L.A. market. The people I hired eventually went on to work at companies like NPR, Square, Microsoft, Zillow, Tinder, Disney, and PayPal.</p>
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "1 / 13", "3 / 11"],
              mb: [3, 7, 7],
            }}>
            <Grid gap={3} columns={[1, 2, 2]}>
              <Box>
                <Image src={brandsOne} />
              </Box>
              <Box>
                <Image src={brandsTwo} />
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>

    <WorkFooter />
  </Layout>
)

export default APMPage