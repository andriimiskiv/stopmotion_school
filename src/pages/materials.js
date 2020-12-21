import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import mobile from "../images/mobile.png";
function MaterialsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Materials"
      />

      <section className="flex flex-col items-center ">
        <img
          alt="Smartphone in hands"
          className="block w-1/4 mx-auto mb-4"
          src={mobile}
        />
        <h2 className="font-display font-semibold tracking-widest text-center text-xl text-gray pt-4 md:text-2xl">
          Що потрібно мати для заняття
        </h2>
        <div className="bg-green w-full mt-6">
          <ul className="font-display text-gray px-4 tracking-widest uppercase text-center">
            <li className="py-4">Смартфон або Планшет</li>
            <li className="py-4">Штатив</li>
            <li className="py-4">
              Аплікейшн{" "}
              <Link to="/application">
                <p className="text-red hover:underline">StopMotion Studio</p>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="block font-display text-gray text-sm pt-12">
            Який штатив? а ось вам лінки
          </p>
        </div>
        <div className="flex flex-col space-between">
          <div className=" font-display w-auto px-2 text-gray bg-yellow mt-4 hover:bg-green">
            <a
              href="https://grey.com.ua/p931073365-universalnyj-derzhatel-dlya.html?gclid=CjwKCAiAkan9BRAqEiwAP9X6UdfyZ61G6Pz85wXkYvI64q9qrySY_F7wVKKHdrQlku1XaL4u4VJAtBoCd08QAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Штaтив 1
            </a>
          </div>
          <div className="font-display w-auto px-2 text-gray bg-yellow mt-4 hover:bg-green">
            <a
              href="https://barabashowo.com.ua/p1243032862-gibkij-shtativ-dlya.html?gclid=CjwKCAiAkan9BRAqEiwAP9X6UYy5XkTvvEl1LvxTv8BqU92A_z8oQArr4rG-mHYEcV_BevwXGdroBhoCbFMQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Штaтив 2
            </a>
          </div>
          <div className=" font-display w-auto px-2 text-gray bg-yellow mt-4 hover:bg-green">
            <a
              href="https://kolonka.kh.ua/p1221199619-shtativ-dlya-telefona.html?gclid=CjwKCAiAkan9BRAqEiwAP9X6UU4A-UNkXYKNv0HDLAMbdP_rQ4_LOOPKeCI01fX1hQsJdqbhyyINKRoCMEoQAvD_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Штaтив 3
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default MaterialsPage;
