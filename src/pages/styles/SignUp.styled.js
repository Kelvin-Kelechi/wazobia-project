import styled from "styled-components";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export const BsEyeIcon = styled(BsEye)`
  position: absolute;
  width: 16.5px;
  height: 90px;
  left: 96%;
  
 
   
`;
export const BsEyeSlashIcon = styled(BsEyeSlash)`
  position: absolute;
  width: 16.5px;
  height: 90px;
  left: 96%;
   
`;
export const Container = styled.div`
  position: relative;
  width: 1440px;
  height: 768px;
  margin: auto;
  background: #fafafa;
`;
export const Container2 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 32px 40px;
  gap: 40px;
  position: absolute;
  width: 720px;
  height: 465px;
  left: 360px;
  top: 100px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
`;
export const Container3 = styled.div`
  width: 656px;
  height: 465px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const Container4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;
`;
export const Container5 = styled.div`
  position: absolute;
  width: 656px;
  height: 229px;
  left: 32px;
  top: 84px;
`;
export const Container6 = styled.div`
  width: 656px;
  height: 48px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
export const H1 = styled.div`
  width: 230px;
  height: 29px;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
  cursor: pointer;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const P = styled.div`
  width: 260px;
  height: 20px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: #777777;

  flex: none;
  order: 1;
  flex-grow: 0;
`;
export const Group = styled.div`
  position: absolute;
  width: 656px;
  height: 61px;
  left: px;
  top: 0px;
`;
export const Li = styled.div`
  color: #07982f;
  display: flex;
`;

export const Base = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  position: absolute;
  width: 320px;
  left: calc(50% - 320px / 2 + 168px);
  top: 0%;
  bottom: 73.36%;
`;
export const Based = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  position: absolute;
  width: 320px;
  right: calc(50% - 320px / 2 + 168px);
  top: 0%;
  bottom: 73.36%;
`;
export const Base3 = styled.div`
  position: absolute;
  width: 656px;
  left: calc(50% - 656px / 2);
  top: 35.81%;
  bottom: 36.68%;
`;
export const Base4 = styled.div`
  position: absolute;
  width: 656px;
  left: calc(50% - 656px / 2);
  top: 73.36%;
  bottom: 36.68%;
`;
export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 8px;

  position: absolute;
  width: 656px;
  height: 40px;
  left: 0px;
  top: 23px;
`;
export const Button = styled.button`
  position: absolute;
  width: 656px;
  height: 48px;
  left: 32px;
  top: 395px;
  border: none;
cursor:pointer;
  background: #b7bcc4;
  border-radius: 4px;
`;

export const P1 = styled.p`
  position: absolute;
  width: 66px;
  line-height: 20px;
  left: 295px;
  top: 1px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;
`;
export const Pv = styled.p`
  position: absolute;

  line-height: 20px;
  top: 60%;
  cursor: pointer;
  width: 126px;
  height: 15px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #f41e10;
`;
export const Ellipse = styled.div`
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: #07982f;
  border: 1px solid #07982f;
`;
export const Group1 = styled.div``;
/*export const Group1 = styled.div`
    width: 243px;
    height: 18px;
    flex: none;
    order: 3;
    flex-grow: 0;
   

`
export const Ellipse = styled.div`
    box-sizing: border-box;

    position: absolute;
    width: 8px;
    height: 8px;
    left: 0px;
    top: 69px;
    border-radius:100%;
    background: #07982F;
    border: 1px solid #07982F;
`
export const Text = styled.div`
    position: absolute;
    width: 227px;
    height: 18px;
    left: 16px;
    top: 65px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;

    color: #07982F;
`
export const Group2 = styled.div`
width: 243px;
height: 18px;

 

flex: none;
order: 3;
flex-grow: 0;
   

`
export const Ellipse1 = styled.div`
    box-sizing: border-box;

    position: absolute;
    width: 8px;
    height: 8px;
    left: 0px;
    top: 91px;
    border-radius:100%;
    background: #07982F;
    border: 1px solid #07982F;
`
export const Text1 = styled.div`
    position: absolute;
    width: 227px;
    height: 18px;
    left: 16px;
    top: 87px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;

    color: #07982F;
`
export const Group3 = styled.div`
width: 194px;
height: 18px;


 

flex: none;
order: 4;
flex-grow: 0;
`
export const Ellipse2 = styled.div`
    box-sizing: border-box;

    position: absolute;
    width: 8px;
    height: 8px;
    left: 0px;
    top:113px;
    border-radius:100%;
    background: #07982F;
    border: 1px solid #07982F;
`
export const Text2 = styled.div`
    position: absolute;
    width: 227px;
    height: 18px;
    left: 16px;
    top: 109px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;

    color: #07982F;
`
export const Group4 = styled.div`
width: 189px;
height: 18px;


 

flex: none;
order: 4;
flex-grow: 0;
`
export const Ellipse3 = styled.div`
    box-sizing: border-box;

    position: absolute;
    width: 8px;
    height: 8px;
    left: 0px;
    top:135px;
    border-radius:100%;
    background: #07982F;
    border: 1px solid #07982F;
`
export const Text3 = styled.div`
    position: absolute;
    width: 227px;
    height: 18px;
    left: 16px;
    top: 131px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;

    color: #07982F;
`*/
