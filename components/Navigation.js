import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useGlobalContext } from "../context/context";

const Navigation = () => {
  const { toggleHandler, isOpen } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container">
        {isOpen && (
          <aside className="sidebar ">
            <img
              src="icon-close.svg"
              alt=""
              className="close-button"
              onClick={toggleHandler}
            />
            <ul role="list" className="links" onClick={toggleHandler}>
              <li>
                <span>00</span>
                <Link href="/"> HOME</Link>
              </li>
              <li>
                <span>01</span>
                <Link href="/Moon"> DESTINATION</Link>
              </li>
              <li>
                <span>02</span>
                <Link href="/crew"> CREW</Link>
              </li>
              <li>
                <span>03</span>
                <Link href="/technology"> TECHNOLOGY</Link>
              </li>
            </ul>
          </aside>
        )}
        <Link href="/">
          <img src="logo.svg" alt="" className="logo" />
        </Link>

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

  .container {
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
      cursor: pointer;
    }
  }

  .open {
  }

  .sidebar {
    background-color: transparent;
    width: 65%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    isolation: isolate;
    display: flex;
    padding: 13rem 2rem 0 3rem;
    z-index: 1;
    backdrop-filter: blur(3rem);

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: var(--clr-black);
      opacity: 0.3;
    }

    .close-button {
      width: 2.5rem;
      height: 2.5rem;
      position: absolute;
      top: 3rem;
      right: 3rem;
      cursor: pointer;
    }

    a {
      color: white;
    }

    .links {
      text-align: left;

      li {
        margin: 1rem 1rem 3rem;
        font-family: var(--ff-content);
        font-weight: 100;
        font-size: 1.8rem;

        span {
          font-weight: 700;
          margin-right: 0.5rem;
        }
      }
    }
  }

  @media (min-width: 35em) {
    .close-button {
      display: none;
    }

    .toggle {
      display: none;
    }
    .sidebar {
      width: 55%;
      padding: 3rem;
      bottom: 48rem;
      .links {
        display: flex;
        margin: 0 auto;
        span {
          display: none;
        }
        li {
        }
      }
    }
  }
`;

export default Navigation;
