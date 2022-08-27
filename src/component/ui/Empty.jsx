import React from "react";
import styled from "styled-components";
import { ImFileEmpty } from "react-icons/im";
const Background = styled.div`
  position: absolute;
  width: 500px;
  height: 370px;
  left: 412px;
  top: 60px;
  background: #fafafa;
  border-radius: 4px;
  color: #fff;
`;
const EmptyItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffff;
  padding-top: 50px;
`;
const Text = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #a9a9a9;
  
`;
const EmptyIcon = styled(ImFileEmpty)`
color: #a9a9a9;
  padding-top: ;
`;

function Empty() {
  return (
    <>
      <Background>
        <EmptyItem>
          <EmptyIcon size={150} />
        </EmptyItem>
        <Text>
          <h1 style={{fontFamily:'verdana'}}>No item yet</h1>
          <p style={{fontFamily:'verdana'}}>Tap the `+` icon to get started</p>
        </Text>
      </Background>
    </>
  );
}

export default Empty;
