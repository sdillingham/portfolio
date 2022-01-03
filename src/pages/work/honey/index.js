/** @jsx jsx */
import { jsx, Box, Container, Grid, Heading, Link, Text } from "theme-ui"

import Layout from "components/layout"
import WorkFooter from "components/workFooter"
import SEO from "components/seo"

const HoneyPage = ({ data }) => (
  <Layout>
    <SEO title="Honey (a PayPal company)" description="Helping to create the smartest, most valuable, and most trusted assistant people turn to every time they shop online." />
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
            <Heading sx={{ variant: "headings.workH1" }}>Honey/PayPal</Heading>
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
              Making the smartest, most valuable, and most trusted assistant people turn to every time they shop online.
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
              Product Design Manager
            </Text>
            <Text color="grays.3" sx={{ mb: 4, variant: "texts.metadata" }}>
              2020 - Present
            </Text>
            <Text color="slates.2" sx={{ mb: 1, variant: "texts.metadata" }}>
              Design Team
            </Text>
            <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
              <Link href="http://www.dayanaalvarez.com/" color="grays.3">Dayana Alvarez</Link>
            </Text>
            <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
              <Link href="https://dribbble.com/jaredbrainerd/" color="grays.3">Jared Brainerd</Link>
            </Text>
            <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
              <Link href="http://www.maliaeugenio.com/" color="grays.3">Malia Eugenio</Link>
            </Text>
            <Text sx={{ mb: 1, variant: "texts.metadata" }}>
              <Link href="https://www.juliehollandlogue.com/" color="grays.3">Julie Logue</Link>
            </Text>
            <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
              <Link href="https://www.katherinew.studio/" color="grays.3">Katherine Wang</Link>
            </Text>
            <Text color="grays.3" sx={{ mb: 1, variant: "texts.metadata" }}>
              <Link href="http://www.lawrenceyong.co/" color="grays.3">Lawrence Yong</Link>
            </Text>
          </Box>
          <Box
            sx={{
              gridColumn: ["1 / 13", "4 / 13", "6 / 11"],
            }}>
            <Text sx={{ variant: "texts.workDescription" }}>
              <p>Honey gives everyone who buys online the information they need to make the best decisions with their money. </p>
              <p>I joined in 2020 and currently manage Honey's Shopping Tools design team. We're responsible for all of the experiences delivered through Honey's web browser extension. Our work helps millions of users make smarter shopping decisions, and is the engine at the core of Honey's business.</p>
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
    <WorkFooter />
  </Layout>
)

export default HoneyPage
