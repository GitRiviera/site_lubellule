import React from "react";
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

import Container from '@material-ui/core/Container'

import MatUi_Navbar from '../components/matUi-nav'
import MatUiHeader from '../components/header'
// import MatUiGalleries from '../components/matUi-galleries'
import Footer from '../components/footer'
import GalleryTabs from '../components/gallery-tabs'
import About from '../components/about'


import 'fontsource-roboto';
const IndexPage = () => (
  <>
    <MatUi_Navbar/>
    <MatUiHeader/>
    <Container
    >
      <h1 style={{
        'textDecoration':'underline', 'textAlign':'center'
      }}
        >
        projets
        </h1>
        <GalleryTabs/>
        <Footer/>
    </Container>
  </>
)

export default IndexPage
//
// <Layout>
//   <SEO title="Home" />
//   <h1>Hi people</h1>
//   <p>Welcome to your new Gatsby site.</p>
//   <p>Now go build something great.</p>
//   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//     <Image />
//   </div>
//   <Link to="/page-2/">Go to page 2</Link> <br />
//   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
// </Layout>
