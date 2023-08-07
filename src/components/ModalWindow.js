import React from "react";
import { styled } from "styled-components";
import useInput from "../hook/useInput";
import { useDispatch } from "react-redux";
import {
  initDisplatCount,
  keywordChange,
  loadnews,
} from "../features/counter/newsSlice";

const ModalWindow = ({ setmodal }) => {
  const dispatch = useDispatch();

  const [keyword, handleKeywordChange] = useInput("");
  const [startDate, handleStartDateChange] = useInput("");
  const [endDate, handleEndDateChange] = useInput("");

  const EventStop = (e) => {
    e.stopPropagation();
  };
  const ModalcloseHandler = () => {
    setmodal(false);
  };

  const handleSubmit = () => {
    const searchKeyword = keyword || "korea";
    dispatch(loadnews({ keyword: searchKeyword, startDate, endDate }));
    dispatch(initDisplatCount());
    dispatch(keywordChange(searchKeyword));
    setmodal(false);
  };

  return (
    <WindowWrap onClick={EventStop}>
      <div>
        <div>키워드검색</div>
        <TextInput type="text" value={keyword} onChange={handleKeywordChange} />
      </div>
      <div>
        <div>기간검색</div>
        <DateInputbox>
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
          />{" "}
          부터
          <input
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
          />{" "}
          까지
        </DateInputbox>
      </div>
      <Btnbox>
        <button onClick={handleSubmit}>검색하기</button>
        <button onClick={ModalcloseHandler}>취소</button>
      </Btnbox>
    </WindowWrap>
  );
};

export default ModalWindow;

const WindowWrap = styled.div`
  width: 400px;
  height: 200px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const TextInput = styled.input`
  width: 200px;
  height: 25px;
  margin: 10px 0 20px;
`;

const DateInputbox = styled.div`
  margin: 10px 0 50px;
`;

const Btnbox = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;
