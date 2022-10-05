import React from "react";
import Person from "../../components/Person";
import { buildFilePath, extractFeedback } from "../../helper/helper";

const Crew = ({ data }) => {
  return (
    <>
      <Person data={data} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const filePath = buildFilePath();
  const data = extractFeedback(filePath);

  const douglasHurley = data.crew.find((c) => c.name === "Douglas Hurley");
  const markShuttleworth = data.crew.find(
    (c) => c.name === "Mark Shuttleworth"
  );
  const victorGlover = data.crew.find((c) => c.name === "Victor Glover");
  const anoushehAnsari = data.crew.find((c) => c.name === "Anousheh Ansari");

  return {
    props: {
      data: [douglasHurley, markShuttleworth, victorGlover, anoushehAnsari],
    },
  };
};

export default Crew;
