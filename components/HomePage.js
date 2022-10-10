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
          transition: opacity 300ms ease-in-out;
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

  @media (min-width: 768px) {
    .flex-container {
      padding-top: 10rem;
      .details {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h6 {
          font-size: 2.5rem;
          letter-spacing: 4px;
        }

        h1 {
          font-size: 18rem;
          line-height: 1.3;
        }

        p {
          max-width: 70%;
          font-size: 2.3rem;
          letter-spacing: 1px;
        }
      }

      .explore {
        padding: 14rem 0 10rem;
      }
    }
  }
`;

export default HomePage;
