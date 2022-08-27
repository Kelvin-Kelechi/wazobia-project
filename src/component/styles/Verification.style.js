import styled from "styled-components";
import { BiCheckCircle } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";

export const VeriContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 768px;
  margin: auto;
  background: #fafafa;
`;
export const VeriContainer1 = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 720px;
  height: 450px;
  left: 360px;
  top: 159px;

  background: #ffffff;
  border: 1px solid #f0f0f0;
`;
export const VeriContainer2 = styled.div`
  position: absolute;
  width: 64px;
  height: 64px;
  left: 328px;
  top: 112px;
`;
export const BiCheckIcon = styled(BiCheckCircle)`
  position: absolute;
  right: 0%;
  top: 0;
  bottom: 29.69%;
  color: #07982f;
`;
export const VerifyText = styled.div`
  position: absolute;
  width: 378px;
  height: 24px;
  left: 171px;
  top: 212px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
`;
export const RightIcon = styled(FaChevronRight)`
  position: absolute;
  top: 5%;
  bottom: -61.03%;
  color: #004cbd;
`;

export const Gotodash = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;

  position: absolute;
  width: 162px;
  height: 20px;
  left: 279px;
  top: 257px;

  height: 20px;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #004cbd;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const LeftCon = styled.div`
idth: 20px;
height: 20px;
transform: rotate(-180deg)
flex: none;
order: 1;
flex-grow: 0;
`;
