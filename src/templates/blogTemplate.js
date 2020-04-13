import React from "react"
import { Box, Grid, Heading, Text } from "theme-ui"
import { Global, css } from '@emotion/core'
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
      <Global
        styles={css`
          .postContent h2 {
            color: #D8D7E0;
            font-family: apercu-pro, sans-serif;
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 24px;
          }
          .postContent p, 
          .postContent li {
            color: #D8D7E0;
            font-family: apercu-pro, sans-serif;
            font-size: 17px;
            line-height: 24px;
            margin-bottom: 24px;
            opacity: 0.85;
          }
          .postContent a {
            color: #D8D7E0;
            text-decoration: underline;
          }
          .postContent a:hover {
            color: #FFFFFF;
          }
          .postContent blockquote {
            border-left: 3px solid #655EFF;
            color: #FFFFFF;
            margin: 0 0 28px;
            padding: 7px 0 7px 35px;
          }
          .postContent blockquote p {
            font-size: 22px;
            font-style: italic;
            line-height: 30px;
            margin-bottom: 0;
          }
          .postContent hr {
            background: #655EFF;
            border: 0;
            display: block;
            height: 3px;
            margin: 56px auto;
            width: 184px;
          }
          .postContent figure {
            margin: 56px 0;
            position: relative;
          }
          .postContent figure img {
            margin-bottom: 0;
          }
          .postContent figcaption {
            border-bottom: 3px solid #4A495D;
            bottom: 3px;
            color: #6F6E87;
            font-family: apercu-mono-pro, monospace;
            font-size: 12px;
            font-weight: 500;
            left: auto;
            line-height: 1.5;
            padding: 14px 0;
            position: relative;
            text-transform: uppercase;
            width: 100%; 
          }
          .notes .postContent li:after {
            background: #6F6E87;
            content: "";
            display: block;
            height: 1px;
            margin-top: 28px;
            width: 184px;
          }
          .notes .postContent li li {
            margin-left: 28px;
          }
          .notes .postContent li li:after {
            display: none;
          }
          .notes .postContent li i {
            display: block;
            font-style: normal;
          }
          .notes .postContent li cite {
            color: #6F6E87;
            display: block;
            font-size: 17px;
            font-style: normal;
          }
          @media screen and (min-width: 768px) {
            .postContent figcaption {
              left: -34.8%;
              padding-bottom: 7px;
              position: absolute;
              width: 30.2%; 
            }
            .notes .postContent ul {
              margin-left: 0;
            }
            .postContent h2 {
              font-size: 22px;
              line-height: 28px;
              margin-bottom: 28px;
            }
            .postContent p, 
            .postContent li {
              font-size: 19px;
              line-height: 28px;
              margin-bottom: 28px;
            }
            .postContent blockquote p {
              font-size: 20px;
              line-height: 28px;
            }
            .notes .postContent li li {
              margin-left: 14px;
            }
            .notes .postContent li cite {
              font-size: 15px;
            }
          }
        `}
      />
      <Grid
        as="article"
        gap={3}
        columns={[8]}
        sx={{
          mx: 'auto',
          mt: [5, 9, 9],
          mb: [5, 7, 7],
          maxWidth: '820px'
        }}>
        <Box sx={{ gridColumn: '1 / 9' }}>
          {frontmatter.contentType!=='notes' &&
            <Heading
            as='h1'
            sx={{
              color: `grays.1`,
              fontFamily: `serif`,
              fontSize: [6, 10, 10],
              fontWeight: `medium`,
              lineHeight: `tight`,
              mb: 0,
              pb: [3, 4, 4],
              borderBottom: `3px solid`,
              borderBottomColor: `grays.4`, 
            }}>
              {frontmatter.title}
            </Heading>
          }
          {frontmatter.contentType==='notes' &&
            <Heading
            as='h1'
            sx={{
              color: `grays.1`,
              fontFamily: `serif`,
              fontSize: [5, 8, 8],
              fontWeight: `medium`,
              lineHeight: `tight`,
              mb: 0,
              pb: [3, 4, 4],
              borderBottom: `3px solid`,
              borderBottomColor: `grays.4`, 
            }}>
              {frontmatter.title}
            </Heading>
          }
        </Box>
        {frontmatter.contentType!=='notes' &&
        <Box
          sx={{
            gridColumn: ['1 / 9', '1 / 7'] 
          }}>
          <Text
            as='p'
            sx={{
              color: `grays.2`,
              fontFamily: `sans`,
              fontSize: [3, 5, 5],
              fontWeight: `light`,
              lineHeight: [`standard`, `tight`, `tight`],
              mb: [1, 7, 7],
            }}>
            {frontmatter.teaser}
          </Text>
        </Box>
        }
        <Box
          as='aside'
          sx={{
            gridColumn: ['1 / 9', '1 / 3'] 
          }}>
          <Text
            as='p'
            sx={{
              color: `grays.4`,
              fontFamily: `mono`,
              fontSize: 0,
              fontWeight: `medium`,
              letterSpacing: `comfortable`,
              lineHeight: `standard`,
              mb: 0,
              mt: `6px`,
              textTransform: `uppercase`,
            }}>
            Published
          </Text>
          <Text
            as='time'
            sx={{
              color: `slates.1`,
              fontFamily: `mono`,
              fontSize: 0,
              fontWeight: `medium`,
              letterSpacing: `comfortable`,
              lineHeight: `standard`,
              textTransform: `uppercase`,
            }}>
            {frontmatter.date}
          </Text>
        </Box>
        <Box
          as='section'
          className={frontmatter.contentType}
          sx={{
            gridColumn: ['1 / 9', '3 / 9'] 
          }}>
          <div
            className="postContent"
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
        contentType
      }
    }
  }
`