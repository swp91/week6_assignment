import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseDisplayCount, loadnews } from "../features/counter/newsSlice";
import NewsItem from "./NewsItem";
import styled from "styled-components";

const Newslist = () => {
  const dispatch = useDispatch();
  const targetRef = useRef(null);
  const searchData = useSelector((state) => state.news.keyword);
  console.log(searchData);
  const [searchKeyword, setSearchKeyword] = useState(searchData);

  useEffect(() => {
    // 콜백 정의
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 대상 요소가 뷰포트와 교차할 때의 로직
          dispatch(increaseDisplayCount());
        } else {
          // 대상 요소가 뷰포트에서 벗어났을 때의 로직
        }
      });
    };

    // 옵저버 생성
    const observer = new IntersectionObserver(callback);

    // 대상 요소 감시 시작
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // 클린업
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    dispatch(loadnews({ keyword: searchKeyword }));
  }, [searchKeyword]);

  const newslist = useSelector((state) => state.news.news);
  const newscount = useSelector((state) => state.news.displayCount);
  const displayNews = newslist.slice(0, newscount);

  console.log(displayNews);

  return (
    <NewsWrap>
      {displayNews.map((item, i) => (
        <NewsItem key={i} item={item} />
      ))}
      <ObserverDiv ref={targetRef}></ObserverDiv>
    </NewsWrap>
  );
};

export default Newslist;

const NewsWrap = styled.section`
  width: 1000px;
  margin: 0 auto;
  height: auto;
`;

const ObserverDiv = styled.div`
  width: 100px;
  height: 100px;
`;
