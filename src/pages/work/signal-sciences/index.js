/** @jsx jsx */
import { jsx, Box, Container, Grid, Heading, Image, Link, Text } from "theme-ui"
import Img from "gatsby-image"
import consoleAgent from "images/signal-sciences/console-agent.png"
import consoleEvent from "images/signal-sciences/console-event.png"
import consoleRules from "images/signal-sciences/console-rules.png"

import Layout from "components/layout"
import WorkFooter from "components/workFooter"
import SEO from "components/seo"

const SigSciPage = ({ data }) => (
  <Layout>
    <SEO title="Signal Sciences" description="A case study: making the world’s best web security technology accessible to every business." />
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
            <Heading sx={{ variant: "headings.workH1" }}>Signal Sciences</Heading>
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
              Making the world’s best web security technology accessible to every business
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
              Head of Product Design
            </Text>
            <Text color="grays.3" sx={{ mb: 4, variant: "texts.metadata" }}>
              2016 - Present
            </Text>
            <Text color="slates.2" sx={{ mb: 1, variant: "texts.metadata" }}>
              Design Team
            </Text>
            <Text sx={{ mb: 1, variant: "texts.metadata" }}>
              <Link href="https://www.juliehollandlogue.com/" color="grays.3">Julie Logue</Link>
            </Text>
            <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
              <Link href="https://www.behance.net/thepatrickmorgan/" color="grays.3">Patrick Morgan</Link>
            </Text>
            <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
              <Link href="https://www.ashleysoo.com/" color="grays.3">Ashley Soo</Link>
            </Text>
            <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
              <Link href="https://alitorbati.com/" color="grays.3">Ali Torbati</Link>
            </Text>
            <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
              <Link href="http://www.shannontsai.com/" color="grays.3">Shannon Tsai</Link>
            </Text>
            <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
              <Link href="http://jbarr.co/" color="grays.3">Justin Young</Link>
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "4 / 13", "6 / 11"],
            }}>
            <Text sx={{ variant: "texts.workDescription" }}>
              <p>Signal Sciences is a powerful web security platform founded in 2014 by the practitioners who ran security at Etsy. Signal Sciences protects over 1.5 trillion requests per month across 34,000 web apps, helping brands like Datadog, Vimeo, Duo, and WeWork keep their customers’ data safe from hackers.</p>
              <p>In 2016, I joined Signal Sciences to <a href="https://www.signalsciences.com/blog/effective-product-design/">lead product design</a>. I’ve hired a team of talented designers, <a href="https://building.signalsciences.com/enterprise-design/">created an environment</a> for them to do their best work, and touched every aspect of the product. I’ve been fortunate to play a part in helping the company scale through several stages of growth.</p>
            </Text>
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
            <Heading sx={{ variant: "headings.workH2" }}>The Product</Heading>
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
              Delivering clarity and coherence while scaling a complex technical product
            </Text>
            <Text sx={{ variant: "texts.workBodyDark" }}>
              <p>Signal Sciences inspects and acts on our customers' web traffic, protecting them against attacks and other malicious behavior. Security teams struggle to gain visibility and insight into malicious traffic patterns at scale, and my team and I work hard to reduce that friction.</p>
              <p>We've designed default dashboards that prioritize active attacks and security events, and make it easy for users to drill down and see the story behind an attack or filter requests to quickly detect patterns in attacker behavior. We also recognize that security teams don't need one more tool to log in to, so we push notifications and data to the tools our customers already use like Slack, DataDog, PagerDuty, and Splunk.</p>
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "1 / 13", "2 / 12"],
            }}>
            <Text
              sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
              Workspace Dashboard
            </Text>
            <Img
              fluid={data.workspace.childImageSharp.fluid}
              alt="Signal Sciences Console workspace overview"
              sx={{
                borderColor: "grays.1",
                variant: "images.desktopInline"
              }}/>
          </Box>
        </Grid>
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
          Agent Performance Metrics
        </Text>
        <Image 
          src={consoleAgent}
          alt="Signal Sciences Console agent detail view"
          sx={{ borderColor: "grays.8", height: "75vh", variant: "images.desktop" }}
        />
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
          Security Events View
        </Text>
        <Image 
          src={consoleEvent}
          alt="Signal Sciences Console event detail view"
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
          <p>In my first two years, I redesigned and simplified Signal Sciences' self service rule building experience. Rules are composed of complex combinations of conditions and actions (image a Russian nesting doll of if-then statements), and the existing experience was incomplete and incoherent.</p>
          <p>I took a systems thinking approach to simplify the underling elements and interconnections that make up the feature. I also designed the rule builder interface, solving complex interaction design and UI state problems in the process.</p>
        </Text>
      </Container>
    </Box>
    <Box backgroundColor="grays.7" sx={{ variant: "boxes.card" }}>
      <Container
        sx={{
          margin: "0 auto",
          maxWidth: "1244px",
          width: "auto",
        }}>
        <Text
          sx={{ color: "grays.4", mb: 1, ml: [0, 3, 3], variant: "texts.metadata" }}>
          Custom Rule Builder
        </Text>
        <Image 
          src={consoleRules}
          alt="Signal Sciences Console rules editor view"
          sx={{
            borderColor: "grays.8",
            height: "75vh",
            variant: "images.desktop" 
          }}/>
      </Container>
    </Box>
    <Box
      backgroundColor="grays.0"
      py="6"
      sx={{ variant: "boxes.wrapper" }}>
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
            <Heading sx={{ variant: "headings.workH2" }}>Design Leadership</Heading>
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
              Growing and empowering a high-performing team
            </Text>
            <Text sx={{ variant: "texts.workBodyDark" }}>
              <p>As design hire number two at Signal Sciences, I've had the opportunity to recruit and build a high-performing team of seven with roles focused on product design, visual design, content strategy, and UX engineering. I challenged myself to grow as a <a href="https://sean.dillingh.am/blog/on-hiring-designers/">recruiter and talent scout</a>. I created a transparent interview process that makes candidates feel valued. I led the launch of an "<a href="https://building.signalsciences.com/">inside Signal Sciences</a>" blog that gets candidates excited about our culture and craft. I was able to lure some crazy talented designers away from jobs at places like Squarespace and Disney to come work for an obscure security startup.</p>
              <p>To align the team around what great work looks like at Signal Sciences, I created a set of design principles that help guide our decision making and how we assess potential solutions. To set clear expectations about what it means to be a great team members, we collaboratively established a set of team values. We check in annually to iterate on our principles and values as the company grows and evolves</p>
            </Text>
          </Box>
        </Grid>
        <Grid gap={3} columns={[1, 2, 2]} sx={{ mb: [4, 6, 6] }}>
          <Box>
            <Img
              fluid={data.principlePragmatic.childImageSharp.fluid}
              alt="Signal Sciences design principle: Be Pragmatic"
              />
          </Box>
          <Box>
            <Img
              fluid={data.principleVisibility.childImageSharp.fluid}
              alt="Signal Sciences design principle: Champion Visibility"
              />
          </Box>
          <Box>
            <Img
              fluid={data.principleUncertainty.childImageSharp.fluid}
              alt="Signal Sciences design principle: Reduce Uncertainty"
              />
          </Box>
          <Box>
            <Img
              fluid={data.principleInsights.childImageSharp.fluid}
              alt="Signal Sciences design principle: Unlock Insights"
              />
          </Box>
        </Grid>
        <Grid gap={3} columns={[12]} sx={{ mb: [4, 6, 6] }}>
          <Box
            sx={{
              gridColumn: ["1 / 13", "1 / 13", "3 / 11"],
            }}>
            <Heading sx={{
                color: "grays.6",
                fontFamily: "sans",
                fontSize: "24px",
                lineHeight: "tight",
                mb: 3,
              }}>
              Growing careers and culture
            </Heading>
            <Text sx={{ variant: "texts.workBodyDark" }}>
              <p>Having a shared set of values is essential to improving individual and team performance, but so is continuous feedback. I instituted weekly 1:1s and quarterly check-ins with my team to help grow their skills and their careers. We also hold weekly design reviews with the entire team, facilitated by one of our senior product designers. I've spoken and <a href="https://building.signalsciences.com/design-feedback/">written</a> about how to give great feedback to help designers and others inside the company level up the quality of critique.</p>
              <p>We're a tight knit team, but that needs nurturing and care if it's going to endure. To create a sense of belonging and psychological safety on the team, we have regular rituals that enrich our work life: "<a href="https://medium.com/@itsmejon/a-list-of-creative-exercises-for-creative-teams-c43b36f9dbde">Creative Mondays</a>," where we draw our personalities as sandwiches, try to guess song lyrics we translate into emoji, or just share creative people and things that inspire us. I also organize quarterly field trips where the design team steps away from working on a technical software product and recharges by getting out into the world and getting our hands dirty.</p>
            </Text>
          </Box>
        </Grid>
        <Grid gap={3} columns={[1, 2, 2]}>
          <Box>
            <Img
              fluid={data.cultureBirdcall.childImageSharp.fluid}
              alt="Ali teaches the design team bird calls"
              />
          </Box>
          <Box>
            <Img
              fluid={data.cultureThrowing.childImageSharp.fluid}
              alt="The design team learns wheel throwing at POT LA"
              />
          </Box>
          <Box>
            <Img
              fluid={data.cultureArchery.childImageSharp.fluid}
              alt="The design team learns archery in case anyone wants the logo bigger"
              />
          </Box>
          <Box>
            <Img
              fluid={data.cultureMatching.childImageSharp.fluid}
              alt="The one day I wasn't in the office and everyone on the team accidentally dressed the same"
              />
          </Box>
        </Grid>
      </Container>
    </Box>
    <Box backgroundColor="grays.1" py="6" sx={{ variant: "boxes.wrapper"}}>
      <Container
      sx={{
        maxWidth: "1300px",
        px: ["21px", 4, 3],
        width: "auto",
      }}>
        <Grid gap={3} columns={[12]} sx={{ mb: [4, 6, 6] }}>
          <Box
            sx={{
              gridColumn: ["1 / 13", "1 / 13", "3 / 11"],
            }}>
            <Heading sx={{ variant: "headings.workH2" }}>Design Systems</Heading>
          </Box>
          <Box
            sx={{
              mt: -2,
              mb: [3, 6, 6],
              gridColumn: ["1 / 13", "1 / 9", "3 / 9"],
            }}>
            <Text
              sx={{
                mb: [3, 5, 5],
                variant: "texts.workSubheadDark",
              }}>
              Improving product consistency and team velocity
            </Text>
            <Text sx={{ variant: "texts.workBodyDark" }}>
              <p>In my first year at Signal Sciences, I created our design system from the ground up. I established our product's design principles, visual style and copywriting voice. I designed a comprehensive Sketch component library, and worked with a talented UX Engineer to create and document a corresponding library of React components.</p>
              <p>Our design system improved our product's consistency and our engineers' velocity, and was successful enough that Signal Sciences established a permanent cross-functional team to continue investing in our system. With a team of two product designers, a content strategist, and two UX engineers, I've shifted into a product owner role. I establish our roadmap and priorities, set the bar for quality, and <a href="https://building.signalsciences.com/ui-desire-paths/">balance flexibility and consistency</a> across design and code.</p>
              <p>In 2019, we switched to Figma, completely <a href="https://building.signalsciences.com/color-design-system/">refreshed the visual design</a> of our entire system, and refactored all our React components using Styled System and Styled Components. We invested heavily in content strategy, creating editorial guidelines that define our voice and tone, product glossary, grammar, mechanics, and preferred terms.</p>
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: "1 / 13",
            }}>
            <Img
              fluid={data.designSystems.childImageSharp.fluid}
              alt="Signal Sciences' component library artboards"
              />
          </Box>
        </Grid>
      </Container>
    </Box>


    <WorkFooter />
  </Layout>
)

export default SigSciPage

export const pageQuery = graphql`
  query sigsciPageQuery {
    workspace: file(relativePath: { eq: "signal-sciences/console-workspace.png" }) {
      childImageSharp {
        fluid(maxWidth: 1300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    principleInsights: file(relativePath: { eq: "signal-sciences/principle-insights.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    principlePragmatic: file(relativePath: { eq: "signal-sciences/principle-pragmatic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    principleUncertainty: file(relativePath: { eq: "signal-sciences/principle-uncertainty.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    principleVisibility: file(relativePath: { eq: "signal-sciences/principle-visibility.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cultureArchery: file(relativePath: { eq: "signal-sciences/culture-archery.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cultureBirdcall: file(relativePath: { eq: "signal-sciences/culture-birdcall.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cultureMatching: file(relativePath: { eq: "signal-sciences/culture-matching.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cultureThrowing: file(relativePath: { eq: "signal-sciences/culture-throwing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    designSystems: file(relativePath: { eq: "signal-sciences/design-systems.png" }) {
      childImageSharp {
        fluid(maxWidth: 1300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
