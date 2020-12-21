import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="bg-blue flex-1 w-full max-w-4xl px-8 py-8 mx-auto md:px-8 md:py-6">
        {children}
      </main>

      <footer className="bg-white">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm">
          <p className="font-display tracking-widest text-gray opacity-75">
            Created by{` `}
            <a
              className="font-bold no-underline opacity-75 text-sm"
              href="https://github.com/Munime"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andrew AJ
            </a>
          </p>

          <p>
            <a
              className="font-display tracking-widest font-bold text-gray opacity-75 no-underline"
              href="https://github.com/Munime"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
