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
          <h6>PICK YOUR DESTINATION</h6>
          <img className="planet-image" src={images.webp} alt="" />
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

  .flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* gap: 1rem; */

    h6 {
      font-size: 1.8rem;
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
      width: 50%;
      margin-bottom: 3rem;
    }

    .links {
      display: flex;
      gap: 3rem;
      letter-spacing: 0.3rem;
      font-size: 1.8rem;
      font-family: var(--ff-content);
      font-weight: 100;
      cursor: pointer;
      margin-bottom: 2rem;

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

        &:active::after,
        &:hover::after {
          opacity: 1;
        }
      
    }

    .planet-name {
      font-size: 7rem;
      /* line-height: 0; */
    }

    .planet-description {
      font-size: 1.9rem;
      color: var(--clr-blue);
      letter-spacing: 0.1rem;
      max-width: 43ch;
      line-height: 1.6;
      font-weight: 100;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 20rem;
        left: 0;
        bottom: 5rem;
        height: 0.5px;
        width: 100%;
        background-color: red;
      }
    }
  }
`;

export default Planet;
