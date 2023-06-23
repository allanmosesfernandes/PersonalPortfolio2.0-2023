import React from "react";
import { ContactInfo, ContactMarquee, FooterContainer } from "./footerStyles";
import Marquee from "react-fast-marquee";
import Star from "../../assets/images/footer/star.svg";

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
          
        </div>
        <div className="mega__email">
          fernzallan14@gmail.com
        </div>
      </ContactInfo>
    </FooterContainer>
  );
};

export default footer;
