import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alert from "../Alert";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const IconLinkGrid = styled.a`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 0.25rem;
  grid-auto-columns: max-content;
  align-items: center;
`;

const LeftAlignedSpan = styled.div`
  display: flex;
  text-align: left;
`;



const JobAlert = () => {
  return (
    <Alert>
      <div style={{ paddingBottom: "0.5rem" }}><b>Looking for work!</b><br />open to frontend or fullstack engineering roles</div>
      <IconLinkGrid href="https://www.linkedin.com/posts/amyjchen_lookingfornewopportunities-lookingforajob-activity-7069711638458740736-pCfC">
        <FontAwesomeIcon icon={faLinkedin} size="sm" /><LeftAlignedSpan>linkedin post</LeftAlignedSpan>
      </IconLinkGrid>
      <IconLinkGrid href="mailto:me@amyjchen.com?subject=[amyjchen.com] I have an opportunity for you!">
        <FontAwesomeIcon icon={faEnvelope} size="sm" /><span>contact</span>
      </IconLinkGrid>
    </Alert>
  );
}

export default JobAlert;