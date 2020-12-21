import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import lesson from "../images/hero.png";

function LessonsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Lessons"
      />
      <section className="flex flex-col items-center md:flex-row">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/3 mx-auto mb-4"
          src={lesson}
        />
      </section>
    </Layout>
  );
}

export default LessonsPage;
