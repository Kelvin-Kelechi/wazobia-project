import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { Rectangle } from "../styles/CreateItem.style";
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 520px;
  height: 320px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  margin: 15.5% 5%;
`;

const ModalImg = styled(BiError)`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  color: #f41e10;
  cursor: pointer;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  background: #f5f5f5;
  border-radius: 10px;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
const Button = styled.h3`
  background: #f41e10;
  padding: 5px 60px;
  cursor: pointer;
  color: #fff;
  border: none;
  border-radius: 10px;
`;
const LogModal = ({ erro }) => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <>
      {openModal && (
        <Background>
          <Rectangle></Rectangle>
          <ModalWrapper>
            <ModalImg size={300} />
            <ModalContent>
              <h1 style={{ color: "#000", cursor: "pointer" }}>Error!</h1>
              <p
                style={{
                  color: "#777777",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                {" "}
                {erro.message}
              </p>

              <Button onClick={() => setOpenModal((prev) => !prev)}>
                Dismiss{" "}
              </Button>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setOpenModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default LogModal;
