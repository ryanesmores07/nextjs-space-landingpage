import React from "react";
import styled from "styled-components";
import * as style from "./Technology.module.css";
import Navigation from "../components/Navigation";

const Technology = ({ data }) => {
  const [index, setIndex] = React.useState(0);
  const { name, images, description } = data[index];

  const focus = React.useRef();

  React.useEffect(() => {
    focus.current.focus();
    return () => {};
  }, []);

  return (
    <Wrapper>
      <div className={style.background}>
        <Navigation />
        <div className="flex-container">
          <h6 className="header">SPACE LAUNCH 101</h6>
          <div className="image-container">
            <img className="tech-image" src={images.landscape} alt="" />
          </div>
          <div className="number-buttons">
            <ul role="list" style={{ display: "flex" }}>
              <li>
                <button
                  onClick={() => setIndex(0)}
                  ref={focus}
                  autoFocus={true}
                >
                  1
                </button>
              </li>
              <li>
                <button onClick={() => setIndex(1)}>2</button>
              </li>
              <li>
                <button onClick={() => setIndex(2)}>3</button>
              </li>
            </ul>
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
    padding-bottom: 10rem;
    /* overflow: hidden; */

    .header {
      font-size: 2rem;
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

    .number-buttons {
      ul {
        gap: 2rem;
        padding: 3rem;
        button {
          height: 5rem;
          width: 5rem;
          border-radius: 50%;
          color: var(--clr-white);
          background-color: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 2.5rem;
          cursor: pointer;

          &:active,
          &:focus {
            outline-style: initial;
            background-color: var(--clr-white);
            color: var(--clr-black);
          }

          &:hover {
            border: 1px solid rgba(255, 255, 255, 0.8);
          }
        }
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
