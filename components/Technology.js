import React, { useState } from "react";
import styled from "styled-components";
import * as style from "./Technology.module.css";
import Navigation from "../components/Navigation";

const Technology = ({ data }) => {
  const [index, setIndex] = useState(0);
  const { name, images, description } = data[index];

  return (
    <Wrapper>
      <div className={style.background}>
        <Navigation />
        <div className="flex-container">
          <h6 className="header">SPACE LAUNCH 101</h6>
          <div className="image-container">
            <img
              className="tech-image-landscape"
              src={images.landscape}
              alt=""
            />
            <img src={images.portrait} alt="" className="tech-image-portrait" />
          </div>
          <div className="number-buttons">
            <ul role="list" style={{ display: "flex" }}>
              <li>
                <button
                  onClick={() => setIndex(0)}
                  className={index === 0 ? "active-state" : ""}
                >
                  1
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(1)}
                  className={index === 1 ? "active-state" : ""}
                >
                  2
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(2)}
                  className={index === 2 ? "active-state" : ""}
                >
                  3
                </button>
              </li>
            </ul>
          </div>
          <div className="info-container">
            <h4 className="tech-term">THE TERMINOLOGY...</h4>
            <h3 className="tech-name">{name.toUpperCase()}</h3>
            <p className="tech-description">{description}</p>
          </div>
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
      padding-bottom: 1rem;
      .tech-image-landscape {
        background-size: cover;
        /* height: 23rem; */
        width: 100vw;
        background-position: right center;
        transform: scaleX(1.01);
        transform-origin: left;
      }
      .tech-image-portrait {
        display: none;
      }
    }

    .number-buttons {
      .active-state {
        outline-style: initial;
        background-color: var(--clr-white);
        color: var(--clr-black);
      }
      ul {
        gap: 3rem;
        padding: 3rem;
        button {
          height: 5rem;
          width: 5rem;
          border-radius: 50%;
          color: var(--clr-white);
          background-color: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 2rem;
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

    .info-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      .tech-term {
        font-size: 1.8rem;
        color: var(--clr-blue);
        letter-spacing: 3px;
        font-family: var(--ff-content);
        margin-bottom: 1rem;
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
  }

  @media (min-width: 768px) {
    .flex-container {
      display: grid;
      grid-auto-rows: min-content;
      padding: 7rem 0 10rem;
      place-items: center;
      .header {
        font-size: 2.7rem;
        margin-bottom: 5rem;
        grid-row: 1 / 2;
      }

      .image-container {
        .tech-image-landscape {
          padding-bottom: 3rem;
        }
      }

      .number-buttons {
        ul {
          padding-bottom: 5rem;
          button {
            width: 7rem;
            height: 7rem;
            font-size: 3rem;
          }
        }
      }
      .info-container {
        .tech-term {
          font-size: 2rem;
        }
        .tech-name {
          font-size: 5rem;
        }
        .tech-description {
          max-width: 60%;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .flex-container {
      display: grid;
      grid-template-rows: repeat(2, min-content);
      grid-template-columns: 10rem min-content 1fr 1fr;

      .header {
        grid-row: 1 / 2;
        grid-column: 2 / 4;
        justify-self: start;
        letter-spacing: 5px;
        padding-left: 3.5rem;
        align-self: flex-start;
      }
      .number-buttons {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
        align-self: end;
        ul {
          flex-direction: column;
          button {
            width: 8rem;
            height: 8rem;
            font-size: 3rem;
          }
        }
      }
      .info-container {
        grid-row: 2 / 3;
        grid-column: 3 / 4;
        align-items: flex-start;
        padding-left: 5rem;

        .tech-term {
          font-weight: 100;
        }
        .tech-name {
          font-size: 5rem;
          letter-spacing: 1.5px;
          font-size: 5.5rem;
        }
        .tech-description {
          text-align: left;
          padding: 0;
          max-width: 85%;
        }
      }
      .image-container {
        grid-row: 1 / 3;
        grid-column: 4 / 5;
        justify-self: end;
        padding-top: 5rem;
        .tech-image-landscape {
          display: none;
        }
        .tech-image-portrait {
          display: block;
        }
      }
    }
  }
`;

export default Technology;
