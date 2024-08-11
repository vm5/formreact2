import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Styled components
const FooterContainer = styled.footer`
  background: #111;
  color: white;
  padding: 20px 10px;
  text-align: center;
  border-top: 1px solid #444;
  width: 100%;
  font-family: 'Verdana';
  animation: ${fadeIn} 1s ease-in-out;

  @media (min-width: 768px) {
    padding: 40px 20px;
  }
`;

const HighlightedText = styled.span`
  color: #6a1b9a;
  font-weight: bold;
`;

const AdditionalContent = styled.div`
  margin-top: 20px;
  font-size: 14px;
  animation: ${slideIn} 1s ease-out;

  @media (min-width: 768px) {
    margin-top: 40px;
    font-size: 16px;
  }

  p {
    margin-top: 10px;

    @media (min-width: 768px) {
      margin-top: 20px;
    }
  }
`;

// Footer component
const Footer = () => (
  <FooterContainer>
    <div>
      <p>&copy; {new Date().getFullYear()} <HighlightedText>nucleusFUSION</HighlightedText>. All rights reserved.</p>
      <AdditionalContent>
        <p>Frequently Asked Questions | <a href="/contributors" style={{ color: '#6a1b9a' }}>Contributors</a> | <a href="/terms" style={{ color: '#6a1b9a' }}>Terms of Service</a> | <a href="/contact" style={{ color: '#6a1b9a' }}>Contact Us</a></p>
      </AdditionalContent>
    </div>
  </FooterContainer>
);

export default Footer;
