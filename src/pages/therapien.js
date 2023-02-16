import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const Therapien = ({ data }) => {
  return (
    <Layout>
      <div className="h-screen grid grid-cols auto-rows-fr">
        {data.allContentfulTherapien.edges.map(({ node }, i) => {
          const image = getImage(node.bild);
          return (
            <GatsbyImage className="m-1" image={image} alt={node.bild.title} />
          );
        })}
        <div className="absolute flex flex-col h-full w-full">
          {data.allContentfulTherapien.edges.map(({ node }, i) => {
            return (
              <h1 className="flex-1 flex justify-center items-center ">
                {node.bezeichnung}
              </h1>
            );
          })}
        </div>
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
