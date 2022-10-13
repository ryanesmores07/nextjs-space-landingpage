import React from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import * as style from "./Person.module.css";

const Person = ({ data }) => {
  const [index, setIndex] = React.useState(0);
  const { name, bio, images, role } = data[index];

  const focus = React.useRef();

  React.useEffect(() => {
    focus.current.focus();
  }, []);

  return (
    <Wrapper>
      <div className={style.background}>
        <Navigation />

        <section className="flex-container">
          <h6 className="header">MEET YOUR CREW</h6>
          <div className="image-container">
            <img className="crew-image" src={images.webp} alt="" />
          </div>
          <div className="info-container">
            <ul role="list" style={{ display: "flex" }}>
              <li>
                <button
                  onClick={() => setIndex(0)}
                  className={index === 0 ? "active-state" : ""}
                  ref={focus}
                >
                  ⚪️
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(1)}
                  className={index === 1 ? "active-state" : ""}
                >
                  ⚪️
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(2)}
                  className={index === 2 ? "active-state" : ""}
                >
                  ⚪️
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIndex(3)}
                  className={index === 3 ? "active-state" : ""}
                >
                  ⚪️
                </button>
              </li>
            </ul>
            <h4 className="crew-role">{role.toUpperCase()}</h4>
            <h3 className="crew-name">{name.toUpperCase()}</h3>
            <p className="crew-bio">{bio}</p>
          </div>
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
    font-size: 2rem;
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
      .active-state {
        outline-style: initial;
        opacity: 1;
      }
      gap: 2rem;
      margin-bottom: 3.5rem;
      button {
        border: none;
        color: var(--clr-white);
        background: none;
        opacity: 0.3;
        transition: opacity 250ms ease-out;
        cursor: pointer;

        /* &:focus,
        &:active {
          outline-style: initial;
          opacity: 1;
        } */

        &:hover {
          opacity: 0.6;
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

  @media (min-width: 768px) {
    .flex-container {
      display: grid;
      grid-template-rows: repeat(3, min-content);
      padding-top: 7rem;
      place-items: center;
      padding-bottom: 0;
      .header {
        font-size: 2.7rem;
        margin-bottom: 5rem;
      }
      .info-container {
        display: grid;
        place-items: center;
        .crew-role {
          font-size: 3rem;
        }
        .crew-name {
          font-size: 4.5rem;
        }
        .crew-bio {
          max-width: 65%;
          font-size: 2.2rem;
          padding-bottom: 5rem;
        }

        ul {
          grid-row: 4 / 5;
          /* padding-bottom: 3rem; */
        }
      }

      .image-container {
        grid-row: 3 / 4;
        margin-bottom: 0;
        .crew-image {
          grid-row: 6 / 7;
          width: 75%;
        }
        &::after {
          height: 0;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .flex-container {
      grid-template-columns: 17rem 1fr 1fr 17rem;
      justify-content: left;

      .header {
        grid-column: 2 / 3;
        align-self: start;
        justify-self: start;
        font-size: 3rem;
        letter-spacing: 6px;
      }
      .info-container {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        text-align: left;
        justify-items: start;
        align-self: start;

        .crew-role {
          padding-top: 7rem;
          font-size: 3.5rem;
        }
        .crew-name {
          font-size: 6rem;
        }
        .crew-bio {
          padding-left: 0;
          max-width: 78%;
          margin-bottom: 5rem;
        }

        ul {
          gap: 3rem;

          li {
            button {
              font-size: 1.5rem;
            }
          }
        }
      }

      .image-container {
        grid-column: 3 / 4;
        grid-row: 1 / 4;
        justify-items: end;
        /* position: absolute; */
        /* bottom: 0; */
        /* right: 13rem; */

        .crew-image {
          width: 70%;
        }
      }
    }
  }
`;

export default Person;
