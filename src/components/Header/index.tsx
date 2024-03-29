import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faImages, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faUtensils, faHome } from '@fortawesome/free-solid-svg-icons';

const HeaderWrapper = styled.div`
  text-align: center;
`;

const LargeImage = styled.img`
  padding: 50px 0px 0px 0px;
  height: 250px;
`;

const SmallImage = styled.img`
  padding: 25px 0px 0px 0px;
  height: 100px;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const IconWrapper = styled.div`
  padding: 10px;
`;

const IconWithText = styled.div`
  min-width: 70px;
  display: flex;
  flex-direction: column;
  color: #cc735a;
  align-items: center;
`;

const LinkSubtitle = styled.p`
  font-size: 11px;
`;

const ExtraPadding = styled.div`
  height: 10px;
`;

const InternalIcon = ({
  icon,
  url,
  sameTab = false,
  text,
}:
  FontAwesomeIconProps & {
    url: string,
    sameTab?: boolean,
    text: string,
  }) => (
  <IconWrapper>
    <Link to={url} target={sameTab ? "_top" : "_blank"} rel="noreferrer">
      <IconWithText>
        <FontAwesomeIcon size="lg" icon={icon} color="#cc735a" />
        <LinkSubtitle>{text}</LinkSubtitle>
      </IconWithText>
    </Link>
  </IconWrapper>
);

const HeaderIcon = ({
  icon,
  url,
  sameTab = false,
  text,
}:
  FontAwesomeIconProps & {
    url: string,
    sameTab?: boolean,
    text: string,
  }) => (
  <IconWrapper>
    <a href={url} target={sameTab ? "_top" : "_blank"} rel="noreferrer">
      <IconWithText>
        <FontAwesomeIcon size="lg" icon={icon} color="#cc735a" />
        <LinkSubtitle>{text}</LinkSubtitle>
      </IconWithText>
    </a>
  </IconWrapper>
);

const Header = () => {
  const large = useLocation().pathname === "/";
  return (
    <HeaderWrapper>
      <Link to="/">
        {large ? <LargeImage src={logo} /> : <SmallImage src={logo} />}
      </Link>
      <h1> Amy J. Chen </h1>
      {large && <>
        <p>creative, people-driven software engineer at <a href="https://discord.com/" target='_blank'>discord</a></p>
        <p>cookin' <a href="https://ollie.fyi" target='_blank'>ollie.fyi</a> on the backburner</p>
        <p>stanford computer science (B.S. '18, M.S. '20)</p>
      </>}
      <ExtraPadding />
      <IconsWrapper>
        <InternalIcon icon={faHome} text="home" url="/" sameTab />
        <InternalIcon icon={faFileAlt} text="resume" url="resume" sameTab />
        <HeaderIcon icon={faEnvelope} text="email" url="mailto:me@amyjchen.com" />
        <HeaderIcon icon={faImages} text="portfolio" url="https://amyjchen.myportfolio.com/" />
        <HeaderIcon icon={faLinkedin} text="linkedin" url="https://www.linkedin.com/in/amyjchen" />
        <HeaderIcon icon={faGithub} text="github" url="https://github.com/amyjchen/" />
        <HeaderIcon icon={faInstagram} text="@artwritecode" url="http://www.instagram.com/artwritecode/" />
        <HeaderIcon icon={faUtensils} text="@amyjchen.food" url="https://www.instagram.com/amyjchen.food/" />
      </IconsWrapper>
    </HeaderWrapper>
  );
}

export default Header;