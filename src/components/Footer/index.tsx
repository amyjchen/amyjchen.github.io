import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  font-size: 12px;
  padding: 10px;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    website made by me using React and Typescript. resume generator made with <a href="https://www.npmjs.com/package/react-pdf">@react-pdf</a>. font: <a href="https://indestructibletype.com/Jost.html"> Jost </a> by indestructible type*
  </StyledFooter>
);

export default Footer;