import React from "react"
import { Grid, Flex, Box } from "theme-ui"
import profile from "../images/img-profile.jpg"
import "./constants.css"
import "./index.css"

import LayoutHome from "../components/layoutHome"
import SEO from "../components/seo"

const IndexPage = () => (
  <LayoutHome>
    <SEO title="Home" />
    <Grid
      gap={0}
      columns={[2, '1fr 2fr']}>
      <Box>
        <img className="profilePic" src={profile} />
      </Box>
      <Box>
        <Box
          sx={{ py: 8 }}
          as='section'>
            <Grid
              gap={3}
              columns={[8]}
              sx={{ mx: 3, maxWidth: '820px' }}>
              <Box sx={{ gridColumn: '2 / 8' }}>
                <h1 className="homeHeading">Sean Dillingham</h1>
                <p className="homeDek">I'm a design leader based in Los Angeles. I build teams, design products, and write code.</p>
                <p className="homeDescription">I've been designing professionally since 2001. I'm passionate about leading teams, building design systems, and creating tools that help people get meaningful work done.</p>
              </Box>
            </Grid>
        </Box>
        <Box 
          bg='grays.0'
          sx={{ py: 6 }}
          as='section' >
            <Grid
              gap={3}
              columns={[8]}
              sx={{ mx: 3, maxWidth: '820px' }}>
              <Box sx={{ gridColumn: '2 / 7' }}>
                <h3 className="homeSubhead">Experience</h3>
                <div className="job">
                  <summary className="jobDates">2016 - present</summary>
                  <h2 className="jobCompany"><a href="#">Signal Sciences</a></h2>
                  <p className="jobDescription">I'm currently Head of Design at Signal Sciences, where we help companies protect their applications and data against hackers and attacks.</p>
                </div>
                <div className="job">
                  <summary className="jobDates">2011 - 2016</summary>
                  <h2 className="jobCompany"><a href="#">American Public Media</a></h2>
                  <p className="jobDescription">As  Director of UX for American Public Media and KPCC, I led design and engineering. I helped define product strategy, and shipped flagship products and award-winning editorial projects.</p>
                </div>
              </Box>
            </Grid>
        </Box>
        <Box
          bg='grays.6'
          sx={{ py: 6 }}
          as='section' >
            <Grid
              gap={3}
              columns={[8]}
              sx={{ mx: 3, maxWidth: '820px' }}>
              <Box sx={{ gridColumn: '2 / 9' }}>
                <h3 className="homeSubhead">Recent Writing</h3>
                <div className="articleSummary">
                  <summary className="articleType">Notes</summary>
                  <h2 className="articleTitle"><a href="#">The Emotional Side of People Management</a></h2>
                  <p className="articleTeaser">Random thoughts on the hard and seldom talked-about emotional dimension of being a manager.</p>
                </div>
                <div className="articleSummary">
                  <summary className="articleType">Article</summary>
                  <h2 className="articleTitle"><a href="#">The Design Loop and The Hero’s Journey</a></h2>
                  <p className="articleTeaser">Finding echoes of the monomyth in the design process.</p>
                </div>
                <div className="articleSummary">
                  <summary className="articleType">Notes</summary>
                  <h2 className="articleTitle"><a href="#">The Emotional Side of People Management</a></h2>
                  <p className="articleTeaser">Random thoughts on the hard and seldom talked-about emotional dimension of being a manager.</p>
                </div>
                <div className="articleSummary">
                  <summary className="articleType">Article</summary>
                  <h2 className="articleTitle"><a href="#">The Design Loop and The Hero’s Journey</a></h2>
                  <p className="articleTeaser">Finding echoes of the monomyth in the design process.</p>
                </div>
              </Box>
            </Grid>
            <Grid
              gap={3}
              columns={[8]}
              sx={{ mx: 3, maxWidth: '820px' }}>
              <Box sx={{ gridColumn: '2 / 9' }}>
                <footer>
                  © {new Date().getFullYear()} Sean Dillingham
                </footer>
              </Box>
            </Grid>
        </Box>
      </Box>
    </Grid>

  </LayoutHome>
)

export default IndexPage
