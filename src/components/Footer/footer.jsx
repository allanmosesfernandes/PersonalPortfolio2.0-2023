import React from "react";
import {
  ContactInfo,
  ContactMarquee,
  EditorsNote,
  FooterContainer,
  MegaEmail,
} from "./footerStyles";
import Marquee from "react-fast-marquee";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Star from "../../assets/images/footer/star.svg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { useState } from "react";

const Footer = () => {
  const [copy, setCopy] = useState(false);
  const copyEmail = "fernzallan14@gmail.com";
  const handleCopy = () => {
    setCopy(true);
    //reset after 3 seconds
    setTimeout(() => {
      setCopy(false);
    }, 9000);
  };
  return (
    <FooterContainer className="wrapper">
      <ContactMarquee>
        <Marquee>
          {Array.from({ length: 5 }).map((_, i) => (
            <p className="contact" key={i}>
              <span>Contacts</span>
              <img src={Star} alt="star" key={i} />
            </p>
          ))}
        </Marquee>
      </ContactMarquee>
      <ContactInfo>
        <div className="contact__icons">
          <a
            href="https://www.instagram.com/predominantlyallan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram size={50} />
          </a>
          <a
            href="https://twitter.com/fernzallan14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/allanmosesfernandes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoLinkedin size={50} />
          </a>
        </div>
        <>
          <MegaEmail title={copy ? "Copied" : "Click to copy"}>
            <CopyToClipboard text={copyEmail} onCopy={handleCopy}>
              <div>{copyEmail}</div>
            </CopyToClipboard>
          </MegaEmail>
        </>

        <EditorsNote>
          <p>
            <a
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma{" "}
            </a>
            &{" "}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visual Studio Code{" "}
            </a>{" "}
             were my trusty sidekicks in creating this website.
            <br />
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>{" "}
            &{" "}
            <a
              href="https://www.styled-components.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Styled Components
            </a>{" "}
            were my weapons of choice.
            <br />
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>{" "}
            was my trusty deploy soldier. <br />
          </p>
        </EditorsNote>
      </ContactInfo>
    </FooterContainer>
  );
};

export default Footer;
