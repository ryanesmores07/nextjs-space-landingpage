import React from "react";
import Technology from "../../components/Technology";
import { buildFilePath, extractFeedback } from "../../helper/helper";

const Tech = ({ data }) => {
  return (
    <div>
      <Technology data={data} />
    </div>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFilePath();
  const data = extractFeedback(filePath);

  const tech = data.technology;
  console.log(tech);
  return {
    props: {
      data: tech,
    },
  };
};

export default Tech;
