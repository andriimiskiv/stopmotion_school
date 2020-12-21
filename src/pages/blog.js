import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Link, graphql } from "gatsby";

function BlogPage({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Блог"
      />
      <section className="flex flex-col items-center">
        <div className="bg-yellow m-auto py-4 md:px-10">
          {posts
            .filter((post) => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <>
                  <div
                    className="flex flex-row justify-between items-baseline font-display text-gray px-4 "
                    key={post.id}
                  >
                    <h1 className="text-xl uppercase font-semibold tracking-widest pb-4">
                      <Link to={post.frontmatter.path}>
                        {post.frontmatter.title}
                      </Link>
                    </h1>
                    <h4 className="text-xs md:text-sm">
                      {post.frontmatter.date}
                    </h4>
                  </div>
                  <div className="font-display text-gray">
                    <p>{post.excerpt}</p>
                  </div>
                </>
              );
            })}
        </div>
      </section>
    </Layout>
  );
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

BlogPage.propTypes = {
  data: PropTypes.string,
};
export default BlogPage;
