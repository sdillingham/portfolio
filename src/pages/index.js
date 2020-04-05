import React from "react"
import { Link } from "gatsby"
import profile from "../images/img-profile.jpg"
import "./constants.css"
import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="profilePic">
      <img src={profile} />
    </div>

    <h1 className="homeHeading">Sean Dillingham</h1>
    <p className="homeSubhead">I'm a design leader based in Los Angeles. I build teams, design products, and write code.</p>
    <p className="homeDescription">I've been designing professionally since 2001. I'm passionate about leading teams, building design systems, and creating tools that help people get meaningful work done.</p>

  </Layout>
)

export default IndexPage
