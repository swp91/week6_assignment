import React, { useState } from "react";
import Search from "../components/Search";
import Newslist from "../components/Newslist";
import { styled } from "styled-components";
import ModalSearch from "../components/ModalSearch";

const Newsmain = () => {
  const [modal, setmodal] = useState(false);

  return (
    <Wrap>
      <Search setmodal={setmodal} />
      <Newslist />
      {modal && <ModalSearch setmodal={setmodal} />}
    </Wrap>
  );
};

export default Newsmain;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;
