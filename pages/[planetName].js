import React from "react";
import Planet from "../components/Planet";
import { buildFilePath, extractFeedback } from "../helper/helper";

const Destination = ({ data }) => {
  // console.log(data);
  return <>{/* <Planet planetData={data} /> */}</>;
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { planetName: "Moon" },
        // params: { planetName: "Mars" },
        // params: { planetName: "Europa" },
        // params: { planetName: "Titan" },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const planetName = params.planetName;

  const filePath = buildFilePath();
  const data = extractFeedback(filePath);

  const name = data.destinations.find(
    (destination) => destination.name === planetName
  );

  return {
    props: {
      data: name,
    },
  };
};

export default Destination;
