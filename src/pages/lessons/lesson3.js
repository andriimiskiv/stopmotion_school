import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import linear from "../../images/linear.svg";
import inout from "../../images/inout.svg";
import easyout from "../../images/easyout.svg";
import easyin from "../../images/easyin.svg";
import middle from "../../images/middle.svg";
import onionskin from "../../images/onionskin.png";

function Lesson3() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Lesson3"
      />
      <section>
        <div className="flex flex-col items-center mt-4">
          <h2 className="font-display text-lg text-gray font-light uppercase mb-12 md:text-2xl">
            Занняття 3. Прості типи руху
          </h2>
          <h2 className="font-display text-xl font-medium text-gray">Linear</h2>
          <img
            alt="Cat and human sitting on a couch"
            className="block w-5/6 mx-auto mb-4 mt-4"
            src={linear}
          />
          <h2 className="font-display text-xl font-medium text-gray">
            Easy In Out
          </h2>
          <img
            alt="Cat and human sitting on a couch"
            className="block w-5/6 mx-auto mb-4 mt-4"
            src={inout}
          />
          <h2 className="font-display text-xl font-medium text-gray">
            Easy Out
          </h2>
          <img
            alt="Cat and human sitting on a couch"
            className="block w-5/6 mx-auto mb-4 mt-4"
            src={easyout}
          />
          <h2 className="font-display text-xl font-medium text-gray">
            Easy In
          </h2>
          <img
            alt="Cat and human sitting on a couch"
            className="block w-5/6 mx-auto mb-4 mt-4"
            src={easyin}
          />
          <h2 className="font-display text-xl font-medium text-gray">
            Middle Hold
          </h2>
          <img
            alt="Cat and human sitting on a couch"
            className="block w-5/6 mx-auto mb-4 mt-4"
            src={middle}
          />
          <h2 className="font-display text-xl font-medium text-gray mt-12">
            Onion Skin
          </h2>
          <img
            alt="Cat and human sitting on a couch"
            className="block w-5/6 mx-auto mb-4 mt-4"
            src={onionskin}
          />
        </div>
      </section>
    </Layout>
  );
}

export default Lesson3;
