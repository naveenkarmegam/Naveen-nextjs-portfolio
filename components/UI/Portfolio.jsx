import React, { useState, useEffect } from "react";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

import portfolioData from "../data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState("Mobile App");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Mobile App") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Web Design") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-5">
            <SectionSubtitle subtitle=" My portfolio" />
            <h4 className="mt-4">Some of my distinguished works</h4>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${
                  filter === "Mobile App" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Mobile App")}
              >
                Mobile App
              </button>
              <button
                className={`${
                  filter === "Web Design" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Web Design")}
              >
                Web Design
              </button>
            </div>
          </div>

          {data?.map((item) => (
            <div className="col-lg-4 col-md-4 col-sm-6" lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
