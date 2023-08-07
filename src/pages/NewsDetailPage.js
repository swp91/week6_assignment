import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const NewsDetailPage = (props) => {
  const { publishedAt } = useParams();
  const data = useSelector((state) => state.news.news);
  const newsDetail = data.find((item) => item.publishedAt === publishedAt);

  return (
    <DetailWrap>
      <NewsTitle>{newsDetail.title}</NewsTitle>
      <Imgbox>
        <NewsImg src={newsDetail.urlToImage} alt="" />
      </Imgbox>
      <p>{newsDetail.content}</p>
    </DetailWrap>
  );
};

export default NewsDetailPage;

const DetailWrap = styled.section`
  margin: 0 auto;
  width: 800px;
  height: auto;
`;

const NewsTitle = styled.h1`
  margin: 50px 0 50px;
  font-size: 30px;
`;

const Imgbox = styled.div`
  width: 100%;
  height: auto;
  margin: 30px 0 30px;
`;

const NewsImg = styled.img`
  width: 100%;
`;
