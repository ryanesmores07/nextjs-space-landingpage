import React from "react";
import Planet from "../../components/Planet";
import { buildFilePath, extractFeedback } from "../api/feedback";

// import moduleName from "../../public/image-moon.webp";

const Destination = (props) => {
  return (
    <>
      <Planet destinations={props.feedback.destinations} />
    </>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFilePath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedback: data,
    },
  };
};

export default Destination;
