// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout/layout';


// Step 2: Define your component
const CatPage = () => {
  return (
    <Layout pageTitle="Cat Page">      
        <p>It`s all abou cats</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Cat Page</title>

// Step 3: Export your component
export default CatPage