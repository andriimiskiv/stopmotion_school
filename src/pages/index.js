import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import hero from "../images/hero.png";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center pt-16">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/3 mx-auto mb-8"
          src={hero}
        />

        <h2 className="font-display text-gray inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Привіт! Я твій онлайн помічник
        </h2>

        <p className="font-display font-regular leading-loose">
          Тут ти зможеш бачити історію наших{" "}
          <Link
            to="/schedule"
            className="font-display font-bold tracking-widest text-red no-underline uppercase"
          >
            Занять
          </Link>
          , прочитати про необхідні тобі{" "}
          <Link
            to="/schedule"
            className="font-display font-bold tracking-widest text-red no-underline uppercase"
          >
            Матеріали
          </Link>
          , дізнатися про {` `}
          <Link
            to="/schedule"
            className="font-display font-bold tracking-widest text-red no-underline uppercase"
          >
            Розклад
          </Link>
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
