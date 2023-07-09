import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
  return (
    <main>
      <h1>About me!</h1>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://placehold.co/600x400.png"
      />
    </main>
  )
}

export default AboutPage

export const Head: HeadFC = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Your description" />
  </>
)
