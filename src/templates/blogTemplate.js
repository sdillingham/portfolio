import React from "react"
import { Box, Grid, Heading, Text } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Grid
        gap={3}
        columns={[8]}
        sx={{ mx: 'auto', mt: 9, maxWidth: '820px' }}>
        <Box sx={{ gridColumn: '1 / 9' }}>
          <Heading
          as='h1'
          sx={{
            color: `grays.1`,
            fontFamily: `serif`,
            fontSize: 10,
            fontWeight: `medium`,
            lineHeight: `tight`,
            mb: 0,
            pb: 4,
            borderBottom: `3px solid`,
            borderBottomColor: `grays.4`, 
          }}>
            {frontmatter.title}
          </Heading>
        </Box>
        <Box sx={{ gridColumn: '1 / 7' }}>
          <h2>{frontmatter.teaser}</h2>
        </Box>
        <Box sx={{ gridColumn: '3 / 9' }}>
          <p>{frontmatter.date}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Box>
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        teaser
      }
    }
  }
`