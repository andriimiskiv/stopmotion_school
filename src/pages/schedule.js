import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import calendar from "../images/calendar.png";
function SchedulePage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Schedule"
      />
      <section>
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/4 mx-auto mb-4"
          src={calendar}
        />
        <div>
          <h2 className="font-display font-semibold tracking-widest text-center text-xl text-gray pt-4 md:text-2xl">
            Наш Розклад
          </h2>
        </div>
        <div className="flex items-center justify-between bg-yellow w-auto h-12 mt-8">
          <h4 className="font-display text-gray px-4 tracking-widest uppercase text-center">
            Понеділок
          </h4>
          <h4 className="font-display text-gray px-4 tracking-widest uppercase text-center">
            16.00 - 18.00
          </h4>
        </div>
        <div className="flex items-center justify-between bg-yellow w-auto h-12 mt-8">
          <h4 className="font-display text-gray px-4 tracking-widest uppercase text-center">
            Середа
          </h4>
          <h4 className="font-display text-gray px-4 tracking-widest uppercase text-center">
            16.00 - 18.00
          </h4>
        </div>
      </section>
    </Layout>
  );
}

export default SchedulePage;
