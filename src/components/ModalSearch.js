import React, { useEffect } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import ModalWindow from "./ModalWindow";

const ModalSearch = ({ setmodal }) => {
  const modalRoot = document.getElementById("modal-root");

  const ModalcloseHandler = () => {
    setmodal(false);
  };

  useEffect(() => {
    // 모달이 마운트될 때 body의 overflow를 hidden으로 설정
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    return () => {
      // 모달이 언마운트될 때 원래 overflow 스타일로 되돌림
      document.body.style.overflow = originalOverflow;
    };
  }, []); // 빈 의존성 배열을 전달하여 마운트와 언마운트 때만 효과가 실행되도록 함

  return ReactDOM.createPortal(
    <ModalWarp onClick={ModalcloseHandler}>
      <ModalWindow setmodal={setmodal} />
    </ModalWarp>,
    modalRoot
  );
};

export default ModalSearch;

const ModalWarp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
