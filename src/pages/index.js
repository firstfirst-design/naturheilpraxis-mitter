import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function Index({ data }) {
  const image = getImage(
    data.contentfulLandingPage.hintergrundbild.gatsbyImageData
  );
  return (
    <Layout>
      <GatsbyImage
        className="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
        image={image}
        alt={data.contentfulLandingPage.hintergrundbild.title}
      />
      <h1 className="absolute text-2xl md:text-7xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {data.contentfulLandingPage.einleitung}
      </h1>
    </Layout>
  );
}

export const indexQuery = graphql`
  query {
    contentfulLandingPage {
      hintergrundbild {
        gatsbyImageData(quality: 100)
      }
      einleitung
    }
  }
`;

export default Index;

export const Head = () => <title>Home</title>;
