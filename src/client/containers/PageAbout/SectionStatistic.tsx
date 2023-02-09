import React, { FC } from "react";
import Heading from "components/Heading/Heading";

export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
}

const FOUNDER_DEMO: Statistic[] = [
  {
    id: "1",
    heading: "10 million",
    subHeading:
      "Articles have been public around the world (as of Sept. 30, 2021)",
  },
  {
    id: "2",
    heading: "100,000",
    subHeading: "Registered users account (as of Sept. 30, 2021)",
  },
  {
    id: "3",
    heading: "220+",
    subHeading:
      "Countries and regions have our presence (as of Sept. 30, 2021)",
  },
];

export interface SectionStatisticProps {
  className?: string;
}

const SectionStatistic: FC<SectionStatisticProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        desc=" We’re impartial and independent, and every day we create distinctive,
          world-class programmes and content"
      >
        🚀 Fast Facts
      </Heading>
      <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3 xl:gap-8">
        {FOUNDER_DEMO.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white dark:bg-black/20 rounded-2xl dark:border-neutral-800"
          >
            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-4xl dark:text-neutral-200">
              {item.heading}
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
              {item.subHeading}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionStatistic;
