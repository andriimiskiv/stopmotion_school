import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import group from "../images/group.png";
function GroupsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Groups"
      />
      <section>
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-4"
          src={group}
        />
      </section>
    </Layout>
  );
}

export default GroupsPage;
