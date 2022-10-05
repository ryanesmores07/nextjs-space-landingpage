import React from "react";
import Crew from "../../components/Person";
import { buildFilePath, extractFeedback } from "../../helper/helper";

const Person = () => {
  return (
    <>
      <Crew />
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { personName: "Douglas Hurley" } },
      { params: { personName: "Mark Shuttleworth" } },
      { params: { personName: "Victor Glover" } },
      { params: { personName: "Anousheh Ansari" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const personName = params.personName;

  const filePath = buildFilePath();
  const data = extractFeedback(filePath);

  const name = data.crew.find((c) => c.name === personName);

  if (!name) {
    return { notFound: true };
  }

  return {
    props: {
      data: name,
    },
  };
};

export default Person;
