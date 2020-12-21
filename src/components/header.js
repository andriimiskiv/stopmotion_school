import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-red">
      <div className="flex flex-wrap items-center justify-between max-w-7xl p-4 md:px-8 md:p-4">
        <Link to="/">
          <h1 className="flex items-center no-underline">
            <span className="font-display text-white text-lg font-semibold tracking-widest md:text-lg lg:text-xl">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <button
          className="text-gray items-center block px-3 py-2  border  rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current "
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block pt-8 pb-8` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/lessons`,
              title: `Заняття`,
            },
            {
              route: `/materials`,
              title: `Матеріали`,
            },
            {
              route: `/schedule`,
              title: `Розклад`,
            },
            {
              route: `/groups`,
              title: `Групи`,
            },
            {
              route: `/blog`,
              title: `Блог`,
            },
          ].map((link) => (
            <div
              key={link.title}
              className="font-display font-regular text-gray block ext-white no-underline py-2 hover:text-yellow md:inline-block md:mt-0 md:ml-6 md:py-0"
            >
              <Link className="" key={link.title} to={link.route}>
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
