import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const Therapien = ({ data }) => {
  return (
    <Layout>
      <div className="">
        {data.allContentfulTherapien.edges.map(({ node }, i) => {
          const image = getImage(node.bild);
          return (
            <div className="flex items-center justify-center m-4">
              <GatsbyImage image={image} alt={node.bild.title} />
              <div className="absolute z-10">{node.bezeichnung}</div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TherapienQuery {
    allContentfulTherapien(sort: { reihenfolge: ASC }) {
      edges {
        node {
          bezeichnung
          bild {
            gatsbyImageData
            title
          }
        }
      }
    }
  }
`;

export default Therapien;

export const Head = () => <title>Therapien</title>;
