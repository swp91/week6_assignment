import React from "react";
import { styled } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const NewsItem = ({ item }) => {
  return (
    <NewsItemBox>
      <NewsInfo>
        <NewsTitle to={`/news/${item.publishedAt}`}>{item.title}</NewsTitle>
        <NewsCont>{item.content}</NewsCont>
      </NewsInfo>
    </NewsItemBox>
  );
};

export default NewsItem;

const NewsItemBox = styled.div`
  width: 80%;
  height: 150px;
  background-color: green;
  margin: 0 auto 30px;
  color: #fff;
`;

const NewsInfo = styled.div`
  padding: 20px;
`;

const NewsTitle = styled(RouterLink)`
  display: block;
  font-size: 20px;
  margin-bottom: 20px;
  text-decoration: none;
  color: #fff;
`;

const NewsCont = styled.p`
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 표시할 라인 수 */
  -webkit-box-orient: vertical; /* 수직으로 내용을 쌓음 */
  overflow: hidden; /* 초과하는 부분을 숨김 */
`;
