import { Link } from "gatsby";
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
      <section className="flex flex-col items-center">
        <img
          alt="Book and pencils"
          className="block w-1/3 mx-auto mb-4"
          src={lesson}
        />
        <div className="font-display font-medium text-xl text-gray mt-8 bg-yellow px-8 py-2 tracking-widest rounded hover:bg-red">
          <Link to="/lessons/lesson3">
            <h2>Заняття 3. Типи Руху</h2>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default LessonsPage;
