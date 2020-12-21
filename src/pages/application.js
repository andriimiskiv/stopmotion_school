import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import android from "../images/studio_android.svg";
import ios from "../images/studio_ios.svg";
function ApplicationPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="StopMotionStudio Application"
      />
      <section>
        <img
          alt="StopMotion Studio application icon"
          className="block w-1/2 mx-auto mb-4"
          src={android}
        />
        <p className="text-gray text-center font-display uppercase font-medium tracking-widest text-xl pb-8">
          Android
        </p>
        <img
          alt="StopMotion Studio application icon"
          className="block w-1/2 mx-auto mb-4"
          src={ios}
        />
        <p className="text-gray text-center font-display uppercase font-medium tracking-widest text-xl pb-8">
          iOs
        </p>
      </section>
    </Layout>
  );
}

export default ApplicationPage;
