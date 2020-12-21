import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layout";

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds your post data
  return (
    <Layout>
      <div className="bg-yellow p-4">
        <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
        <div className="font-display">
          <h1 className="text-gray text-xl uppercase tracking-widest font-semibold pb-8">
            {post.frontmatter.title}
          </h1>
          <div
            className="text-gray"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <img className="bg-green mt-8 h-64" src="#" alt="image" />
        </div>
        <button className="flex flex-row justify-end items-center font-display lowercase bg-red text-green p-2 mt-4 hover:bg-blue hover:text-gray">
          <svg
            width="26"
            height="13"
            viewBox="0 0 26 13"
            fill="text-green"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6.33333H25M6.33333 11.6667L1 6.33333L6.33333 11.6667ZM1 6.33333L6.33333 1L1 6.33333Z"
              stroke="#C5FF98"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Link className="px-2" to="/blog">
            До Блогу
          </Link>
        </button>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

Template.propTypes = {
  data: PropTypes.string,
};
