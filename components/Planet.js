import React from "react";
import Navigation from "./Navigation";
import * as style from "./Planet.module.css";
import styled from "styled-components";
import Link from "next/link";

const Planet = ({ planetData }) => {
  const { name, images, description, distance, travel } = planetData;

  return (
    <Wrapper>
      <div className={style.background}>
        <Navigation />
        <div className="flex-container">
          <div className="first-section">
            <h6 className="header">PICK YOUR DESTINATION</h6>
            <img className="planet-image" src={images.webp} alt="" />
          </div>
          <div className="second-section">
            <ul className="links" role="list">
              <li>
                <Link href="/Moon">MOON</Link>
              </li>
              <li>
                <Link href="/Mars">MARS</Link>
              </li>
              <li>
                <Link href="/Europa">EUROPA</Link>
              </li>
              <li>
                <Link href="/Titan">TITAN</Link>
              </li>
            </ul>
            <h2 className="planet-name">{name.toUpperCase()}</h2>
            <p className="planet-description">{description}</p>
            <div className="sub-headers">
              <div className="avg-distance">
                <h6 className="sub-header">AVG. DISTANCE</h6>
                <h4 className="planet-distance margin-bottom">
                  {distance.toUpperCase()}
                </h4>
              </div>
              <div className="travel-time">
                <h6 className="sub-header">EST. TRAVEL TIME</h6>
                <h4 className="planet-travel margin-bottom">
                  {travel.toUpperCase()}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: var(--clr-white);
  max-width: 100%;
  margin: 0 auto;
  text-align: center;

  .margin-bottom {
    margin-bottom: 3rem;
  }

  .flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 3rem;
    /* gap: 1rem; */

    .first-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      .header {
        font-size: 2rem;
        margin-bottom: 4rem;
        &::before {
          content: "01";
          margin-right: 1.5rem;
          color: var(--clr-blue);
          opacity: 0.4;
        }
      }

      .planet-image {
        max-width: 100%;
        width: 65%;
        margin-bottom: 3rem;
      }
    }

    .second-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      .links {
        display: flex;
        gap: 3rem;
        letter-spacing: 0.3rem;
        font-size: 1.8rem;
        font-family: var(--ff-content);
        font-weight: 100;
        cursor: pointer;
        margin-bottom: 3rem;

        li {
          a {
            color: var(--clr-white);
            position: relative;

            &:focus {
              outline: none;
            }

            &::after {
              content: "";
              position: absolute;
              top: 3.2rem;
              left: 0;
              height: 3px;
              width: 100%;
              background-color: white;
              opacity: 0;
              transition: opacity 250ms ease-in;
            }

            &:hover::after {
              opacity: 0.4;
            }
            &:active::after,
            &:focus::after {
              opacity: 1;
            }
          }
        }
      }

      .planet-name {
        font-size: 7rem;
        line-height: 1.3;
      }

      .planet-description {
        font-size: 1.9rem;
        color: var(--clr-blue);
        letter-spacing: 0.1rem;
        max-width: 43ch;
        line-height: 1.6;
        font-weight: 100;
        position: relative;
        padding-bottom: 10rem;
        &::after {
          content: "";
          position: absolute;
          top: 20rem;
          left: 0;
          height: 1px;
          transform: scaleX(1.1);
          opacity: 0.2;
          text-align: center;
          width: 100%;
          background-color: var(--clr-white);
        }
      }

      .sub-header {
        font-size: 1.6rem;
        color: var(--clr-blue);
        margin-bottom: 1rem;
        font-weight: 100;
      }

      .planet-distance,
      .planet-travel {
        font-size: 3.8rem;
      }
    }
  }

  @media (min-width: 768px) {
    .flex-container {
      padding-top: 7rem;

      .first-section {
        .header {
          font-size: 2.7rem;
          margin-bottom: 5rem;
        }

        .planet-image {
          width: 65%;
          margin-bottom: 5rem;
        }
      }
      .second-section {
        .links {
          gap: 4.5rem;
          font-size: 2.1rem;
          margin-bottom: 5rem;

          li {
            a {
              &::after {
                top: 4rem;
              }
            }
          }
        }

        .planet-name {
          font-size: 10rem;
        }

        .planet-description {
          max-width: 70%;
          font-size: 2.1rem;
          &::after {
            top: 16rem;
          }
        }

        .sub-headers {
          display: flex;
          gap: 13rem;
          .avg-distance,
          .travel-time {
            h6 {
              font-size: 1.7rem;
            }
            h4 {
              font-size: 3.2rem;
            }
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .flex-container {
      padding-top: 12rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding-left: 10rem;
      padding-right: 10rem;
      gap: 15rem;
      .first-section {
        align-items: flex-end;
        gap: 5rem;
        .header {
          font-size: 3rem;
          align-self: flex-start;
          margin-left: 6rem;
          margin-top: -5rem;
        }

        .planet-image {
          width: 85%;
        }
      }
      .second-section {
        align-items: flex-start;
        text-align: left;
        .links {
          margin-bottom: 3rem;
        }

        .planet-name {
        }

        .planet-description {
          padding-bottom: 8rem;
          max-width: 85%;
          &::after {
            top: 19rem;
            transform: scaleX(1);
          }
        }

        .sub-headers {
          gap: 10rem;
          .avg-distance,
          .travel-time {
            h6 {
              font-size: 1.5rem;
            }
            h4 {
              font-size: 3rem;
            }
          }
        }
      }
    }
  }
`;

export default Planet;
