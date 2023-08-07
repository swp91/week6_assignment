import React from "react";
import { styled } from "styled-components";

const Search = ({ setmodal }) => {
  const ModalopenHandler = () => {
    setmodal(true);
  };

  return (
    <SearchWarp onClick={ModalopenHandler}>
      <div>검색하기</div>
    </SearchWarp>
  );
};

export default Search;

const SearchWarp = styled.div`
  margin: 150px auto;
  width: 200px;
  height: 100px;
  background-color: #333;
  color: white;
  font-size: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
