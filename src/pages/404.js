import React from "react"
import { Container, Heading, Text } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <Container
      sx={{
        maxWidth: "1244px",
        my: 9,
        width: "auto",
      }}>
      <Heading sx={{ mb: 3, variant: "headings.workH1" }}>404 Page Not Found</Heading>
      <Text sx={{ variant: "texts.workSubheadLight" }}>Sorry, we can’t seem to find this page.</Text>
    </Container>
  </Layout>
)

export default NotFoundPage
