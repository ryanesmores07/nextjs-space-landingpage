import React from "react";
import styled from "styled-components";
import * as style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Wrapper>
      <div className={style.hero}>
        <div className="flex-container">
          <div className="details">
            <h6>SO, YOU WANT TO TRAVEL TO</h6>
            <h1>SPACE</h1>
            <p className="yawa">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="explore">
            <div className="text-container">
              <h4>EXPLORE</h4>
            </div>
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
    position: absolute;
    top: 0;
    left: 0;
    bottom: 10%;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    /* border: solid 3px #fff; */
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
`;

export default HomePage;
