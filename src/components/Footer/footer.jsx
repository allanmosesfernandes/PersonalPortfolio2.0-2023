import React from "react";
import { ContactInfo, ContactMarquee, EditorsNote, FooterContainer, MegaEmail } from "./footerStyles";
import Marquee from "react-fast-marquee";
import Star from "../../assets/images/footer/star.svg";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const footer = () => {
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
        <MegaEmail>fernzallan14@gmail.com</MegaEmail>
        <EditorsNote>
          <p>
            <span>Figma </span> and <span>Visual Studio Code</span> joined forces
            to create this website.<br />Built with <span>Gatsby </span>+{" "}
            <span>Styled Components</span>, deployed on <span>Netlify</span>.
          </p>
        </EditorsNote>
      </ContactInfo>
    </FooterContainer>
  );
};

export default footer;
