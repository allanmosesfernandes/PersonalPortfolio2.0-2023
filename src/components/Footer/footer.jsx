import React from "react";
import { ContactMarquee, FooterContainer } from "./footerStyles";
import Marquee from "react-fast-marquee";
import Star from "../../assets/images/footer/star.svg";

const footer = () => {
  return (
    <FooterContainer className="wrapper">
      <ContactMarquee>
        <Marquee>
          {Array.from({ length: 10 }).map((_, i) => (
            <p className="contact" key={i}>
              <span>Contacts</span>
              <img src={Star} alt="star" key={i} />
            </p>
          ))}
        </Marquee>
      </ContactMarquee>
    </FooterContainer>
  );
};

export default footer;
