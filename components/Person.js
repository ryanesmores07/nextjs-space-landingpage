import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import * as style from "./Person.module.css";
import { Carousel } from "react-responsive-carousel";

const Person = ({ data }) => {
  return (
    <Wrapper>
      <div className={style.background}>
        <Navigation />

        {/* <h6 className="header">PICK YOUR DESTINATION</h6> */}
        <Carousel axis={"horizontal"}>
          <div className="flex-container">
            {data.map((d) => {
              return (
                <section className="container">
                  <img className="crew-image" src={d.images.webp} alt="" />
                  <h4 className="crew-role">{d.role.toUpperCase()}</h4>
                  <h3 className="crew-name">{d.name}</h3>
                  <p className="crew-bio">{d.bio}</p>
                </section>
              );
            })}
          </div>
        </Carousel>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 100%;
  color: var(--clr-white);

  .flex-container {
    display: flex;
    justify-content: center;
    gap: 4rem;

    .header {
      font-size: 1.8rem;
      margin-bottom: 4rem;
      &::before {
        content: "01";
        margin-right: 1.5rem;
        color: var(--clr-blue);
        opacity: 0.4;
      }
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .crew-image {
        width: 30%;
      }
    }
  }
`;

export default Person;
