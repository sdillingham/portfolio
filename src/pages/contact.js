import React from "react"
import { Box, Button, Container, Heading, Input, Label, Text, Textarea } from "theme-ui"

import Layout from "components/layout"
import SEO from "components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Me" description="Drop me a line and say hi! I love to chat about design and new opportunities." />
    <Container
      sx={{
        maxWidth: "1300px",
        my: [5, 9, 9],
        px: ["21px", 4, 3],
        width: "auto",
      }}>
      <Heading sx={{ mb: 3, variant: "headings.workH1" }}>Get in Touch</Heading>
      <Text sx={{ mb: 5, variant: "texts.workSubheadLight" }}><span role="img" aria-label="hand waving">👋</span> Drop me a line and say hi! I love to chat about design and new opportunities.</Text>
          <Container
            sx={{
              maxWidth: "600px",
              mx: 0,
            }}>
            <Box
              as="form"
              action="https://formspree.io/xknvlrae"
              method="POST">
              <Label
                htmlFor="_replyto"
                sx={{
                  color: "grays.2",
                  mb: 1,
                  variant: "texts.formLabel",
                }}>
                Your email:
              </Label>
              <Input 
                type="email"
                name="_replyto"
                mb={5}
                placeholder="yourname@email.com"
              />
              <Label
                htmlFor="message"
                sx={{
                  color: "grays.2",
                  mb: 1,
                  variant: "texts.formLabel",
                }}>
                Your message:
              </Label>
              <Textarea 
                name="message"
                rows="6"
                mb={3}
                placeholder="Enter message"
              />
              <Input
                type="text"
                name="_gotcha"
                style={{display: "none"}}
              />
              <Button type="submit">Submit</Button>
            </Box>
          </Container>
    </Container>
  </Layout>
)

export default ContactPage
