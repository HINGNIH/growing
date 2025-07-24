
import styled from "styled-components";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ButtonGroup = styled.div`
  position: fixed;
  right: 20px;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;
`;

const ScrollButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  color: #666;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  transition: background-color 0.3s;

  display :flex;
  align-items:center;
  justify-content : center;
  &:hover {
    background-color: #8ED973;
    color : #fff;
  }
`;

const ScrollButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <ButtonGroup>
      <ScrollButton onClick={scrollToTop} aria-label="스크롤 맨 위로"><FaArrowUp /></ScrollButton>
      <ScrollButton onClick={scrollToBottom} aria-label="스크롤 맨 아래로"><FaArrowDown/></ScrollButton>
    </ButtonGroup>
  );
};

export default ScrollButtons;
