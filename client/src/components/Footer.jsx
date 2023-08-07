import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { openEaimbox } from "../utils";
import { logo } from "../assets";
import { SvgIcon } from "../components";

const Footer = () => (
  <section className="max-w-7xl mx-auto">
    <footer className="mt-4">
      <MDBFooter className="text-center" color="white" bgColor="dark">
        <MDBContainer className="p-4">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>

          <section className="">
            <form action="">
              <MDBRow className="d-flex justify-content-center">
                <MDBCol size="auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>

                <MDBCol md="5" start>
                  <MDBInput
                    contrast
                    type="email"
                    label="Email address"
                    className="mb-4"
                  />
                </MDBCol>

                <MDBCol size="auto">
                  <MDBBtn
                    outline
                    color="light"
                    type="button"
                    className="mb-4"
                    onClick={() => openEaimbox()}
                  >
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>

          <section className="mb-4">
            <p>
              This is a Gneral purpose project for learning and teaching new
              students about artificial general intelligence. Which improves the
              ability of a human to think in a creative way and can use AI for
              problem solving. This project uses openai apis to create visually
              imaginative images.
            </p>
          </section>

          <section className="">
            <MDBRow style={{textAlign:"left",lineHeight:"180%"}}>
              <div className="mt-10">
                <div
                  style={{ flex: 1, height: "1px", backgroundColor: "white" , marginBottom:"15px"}}
                />
              </div>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <div className="container">
                  <SvgIcon fill="white" className="logo-size" />
                  <h1 className="font-extrabold  text-[24px] pl-2 align-items-center">AI Imagery</h1>
                </div>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Research</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Overview
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Product</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Chat GPT
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      GPT-4
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      AI Imagery 2.0
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Mid Journey
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Company</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                     About
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Security
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 copyright: 
          <a className="text-white" href="">
            Ibrahim Abdul
          </a>
        </div>
      </MDBFooter>
    </footer>
  </section>
);

export default Footer;
