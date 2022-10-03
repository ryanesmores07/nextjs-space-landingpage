import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <div className="flex-container open">
        {isOpen && (
          <aside className="sidebar ">
            <img
              src="icon-close.svg"
              alt=""
              className="close-button"
              onClick={toggleHandler}
            />
            <ul role="list" className="links">
              <li>
                <span>00</span>
                <Link href="#"> HOME</Link>
              </li>
              <li>
                <span>01</span>
                <Link href="#"> DESTINATION</Link>
              </li>
              <li>
                <span>03</span>
                <Link href="#"> CREW</Link>
              </li>
              <li>
                <span>04</span>
                <Link href="#"> TECHNOLOGY</Link>
              </li>
            </ul>
          </aside>
        )}
        <img src="logo.svg" alt="" className="logo" />
        {!isOpen && (
          <img
            src="icon-hamburger.svg"
            alt=""
            className="toggle"
            onClick={toggleHandler}
          />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: transparent;
  max-width: 100%;
  width: 100%;

  .flex-container {
    /* position: fixed; */
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    padding: 3rem;

    .logo {
      width: 5rem;
      height: 5rem;
    }

    .toggle {
      height: 3rem;
    }
  }

  .open {
  }

  .sidebar {
    /* background-color: var(--clr-black); */
    width: 65%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    isolation: isolate;
    display: flex;
    padding: 13rem 2rem 0 3rem;

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: var(--clr-black);
      opacity: 0.8;
    }

    .close-button {
      width: 2.5rem;
      height: 2.5rem;
      position: absolute;
      top: 3rem;
      right: 3rem;
    }

    a {
      color: white;
    }

    .links {
      text-align: left;

      li {
        margin: 1rem 1rem 3rem;
        font-family: var(--ff-content);
        font-weight: 300;
        font-size: 1.8rem;
      }
    }
  }
`;

export default Navigation;
