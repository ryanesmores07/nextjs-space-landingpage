import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import * as style from "./Person.module.css";
import { Carousel } from "react-responsive-carousel";

const Person = ({ data }) => {
  const [index, setIndex] = React.useState(0);
  const { name, bio, images, role } = data[index];

  const nextPerson = index;

  return (
    <Wrapper>
      <div className={style.background}>
        <Navigation />

        <h6 className="header">MEET YOUR CREW</h6>
        <section className="flex-container">
          <div className="image-container">
            <img className="crew-image" src={images.webp} alt="" />
          </div>
          <ul role="list" style={{ display: "flex" }}>
            <li>
              <button onClick={() => setIndex(0)}>⚪️</button>
            </li>
            <li>
              <button onClick={() => setIndex(1)}>⚪️</button>
            </li>
            <li>
              <button onClick={() => setIndex(2)}>⚪️</button>
            </li>
            <li>
              <button onClick={() => setIndex(3)}>⚪️</button>
            </li>
          </ul>
          <h4 className="crew-role">{role.toUpperCase()}</h4>
          <h3 className="crew-name">{name.toUpperCase()}</h3>
          <p className="crew-bio">{bio}</p>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 100%;
  color: var(--clr-white);
  text-align: center;

  .header {
    font-size: 1.8rem;
    margin-bottom: 4rem;
    font-weight: 100;
    &::before {
      content: "02";
      margin-right: 1.5rem;
      color: var(--clr-blue);
      opacity: 0.4;
    }
  }

  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 10rem;

    ul {
      gap: 2rem;
      margin-bottom: 3.5rem;
      button {
        border: none;
        color: var(--clr-white);
        background: none;
        opacity: 0.3;
        transition: opacity 250ms ease-out;
        cursor: pointer;

        &:hover,
        &:focus,
        &:active {
          opacity: 1;
        }
      }
    }

    .image-container {
      display: flex;
      justify-content: center;
      position: relative;
      margin-bottom: 4rem;
      .crew-image {
        width: 40%;
      }
      &::after {
        content: "";
        position: absolute;
        width: 85%;
        bottom: 0;
        height: 1px;
        background-color: var(--clr-white);
        opacity: 0.2;
      }
    }

    .crew-role {
      font-size: 2rem;
      opacity: 0.5;
    }

    .crew-name {
      font-size: 3rem;
      opacity: 0.8;
      margin-bottom: 1.6rem;
    }

    .crew-bio {
      letter-spacing: 1.2px;
      font-size: 1.9rem;
      line-height: 1.7;
      max-width: 60ch;
      padding: 0 3rem;
      font-weight: 100;
      color: var(--clr-blue);
    }
  }
`;

export default Person;
