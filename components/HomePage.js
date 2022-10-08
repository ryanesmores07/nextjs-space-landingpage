import React from "react";
import styled from "styled-components";
import * as style from "./HomePage.module.css";
import Navigation from "./Navigation";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <div className={style.hero}>
        <Navigation />
        <div className="flex-container">
          <div className="details">
            <h6>SO, YOU WANT TO TRAVEL TO</h6>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="explore">
            <button
              className="text-container"
              onClick={() => router.push("/Moon")}
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 100%;
  color: var(--clr-white);
  margin: 0 auto;
  position: relative;

  .flex-container {
    text-align: center;

    .details {
      text-align: center;
      padding: 2rem;
      width: 90%;
      margin: 0 auto;

      h6 {
        font-size: 2rem;
        font-weight: 100;
      }

      h1 {
        font-size: 10rem;
        line-height: 1.8;
      }

      p {
        font-weight: 100;
        line-height: 1.6;
        font-size: 2rem;
        letter-spacing: 0.1rem;
        color: var(--clr-blue);
      }
    }

    .explore {
      padding: 8rem 0 6rem;
      display: flex;
      justify-content: center;
      /* background-color: red; */
      position: relative;

      .text-container {
        width: 21rem;
        height: 21rem;
        background-color: var(--clr-white);
        border-radius: 50%;
        position: relative;
        font-size: 2.5rem;
        letter-spacing: 0.2rem;
        color: var(--clr-black);
        position: relative;
        isolation: isolate;

        &::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          box-shadow: 0 0 0 6rem rgba(255, 255, 255, 0.1);
          cursor: pointer;
          transition: opacity 200ms ease-in;
          opacity: 0;
        }

        &:hover::after,
        &:focus::after {
          outline-style: initial;
          opacity: 1;
        }
      }
    }
  }

  /*  
  @media (min-width: 50em) {
    .flex-container {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 15%;
      width: 100%;
      max-width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: flex-end;
      justify-content: center;

      .details {
        width: 50%;
        max-width: 90ch;

        h1 {
          line-height: 1.3;
        }

        p {
          line-height: 1.4;
        }
      }

      .explore {
        display: flex;
        justify-content: flex-end;
        width: 50%;
        .text-container {
          width: 274px;
          height: 274px;
          background-color: var(--clr-white);
          border-radius: 50%;
          position: relative;

          h4 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: var(--clr-black);
          }
        }
      }
    }
  }
  */
`;

export default HomePage;
