// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout/layout';

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Page"> 
      <p>About page</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => {
  return (
    <>
      <title title>About</title>
      <meta name="description" content="Your description" />
    </>
  )
}

// Step 3: Export your component
export default AboutPage;