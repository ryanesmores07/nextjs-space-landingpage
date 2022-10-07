import React from "react";
import styled from "styled-components";
import * as style from "./Technology.module.css";
import Navigation from "../components/Navigation";

const Technology = ({ data }) => {
  const [index, setIndex] = React.useState(0);
  const { name, images, description } = data[index];
  console.log(name);
  return (
    <Wrapper>
      <div className={style.background}>
        <Navigation />
        <div className="flex-container">
          <h6 className="header">SPACE LAUNCH 101</h6>
          <div className="image-container">
            <img className="tech-image" src={images.landscape} alt="" />
          </div>

          <h4 className="tech-term">THE TERMINOLOGY...</h4>
          <h3 className="tech-name">{name.toUpperCase()}</h3>
          <p className="tech-description">{description}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 100%;
  color: var(--clr-white);
  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 5rem;
    /* overflow: hidden; */

    .header {
      font-size: 1.8rem;
      margin-bottom: 4rem;
      &::before {
        content: "03";
        margin-right: 1.5rem;
        color: var(--clr-blue);
        opacity: 0.4;
      }
    }
    .image-container {
      margin: 0;
      overflow: hidden;
      /* height: 35vh; */
      .tech-image {
        background-size: cover;
        /* height: 23rem; */
        width: 100vw;
        background-position: right center;
        transform: scaleX(1.01);
        transform-origin: left;
      }
    }

    .tech-term {
      font-size: 2rem;
      color: var(--clr-blue);
    }

    .tech-name {
      font-size: 3rem;
      opacity: 0.8;
      margin-bottom: 1.6rem;
    }

    .tech-description {
      padding: 0 3rem;
      max-width: 70ch;
      text-align: center;
      font-weight: 100;
      letter-spacing: 1.2px;
      font-size: 1.9rem;
      line-height: 1.7;
      color: var(--clr-blue);
    }
  }
`;

export default Technology;
