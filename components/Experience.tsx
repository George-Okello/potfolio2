import React from "react";
import { Timeline } from "./ui/timeline";

const Experience = () => {
  const data = [
    {
      title: "2024 - Present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Machine Learning Engineer at [Company Name]. Developed and deployed
            ML models for predictive analytics and automation.
          </p>
        </div>
      ),
    },
    {
      title: "2022 - 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Data Scientist at [Company Name]. Designed and implemented data
            pipelines, conducted statistical analysis, and optimized model
            performance.
          </p>
        </div>
      ),
    },
    {
      title: "Certifications",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Bachelor’s Degree in Computer Science from [University Name].
            Specialized in machine learning and data science.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full" id="about">
      <Timeline data={data} />
    </div>
  );
};

export default Experience;
