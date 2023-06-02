import { ReactNode, useState } from "react";
import styled from "styled-components";

const AlertWrapper = styled.div`
  z-index: 2;
  background-color: white;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  padding: 1.5rem 1rem 1rem 1rem;
  border-radius:0.5rem;
  border-style: solid;
  box-shadow: 0 0 15px 5px #fff;
  max-width: 75%;
  @media print {
    display: none;
  }
`;

const Dismiss = styled.div`
  font-size: 1.25rem;
  position: absolute;
  right: 0.65rem;
  top: 0rem;
  text-align: right;
  text-color: gray;
`;

const Alert = ({
  children
}: {
  children: ReactNode,
}) => {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <AlertWrapper>
      <Dismiss onClick={() => setShow(false)}>
        ×
      </Dismiss>
      {children}
    </AlertWrapper>
  );
}

export default Alert;