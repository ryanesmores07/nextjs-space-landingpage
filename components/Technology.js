import React from "react";
import styled from "styled-components";
import * as style from "./Technology.module.css";

const Technology = () => {
  return (
    <Wrapper>
      <div className={style.background}>
        <h3>Technology</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 100%;
  color: var(--clr-white);
`;

export default Technology;
