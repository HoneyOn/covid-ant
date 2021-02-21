import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { today } from '../../constants/mocks';
import SearchBar from '../SearchBar/index';
import { getCount } from '../../modules/count';

const MainWrapper = styled.div`
  min-width: 280px;
  max-width: 640px;
  height: 62vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.darkgray};
`;

const BodyBottomText = styled.div`
  font-weight: 600;
  margin: 0 auto;
  margin-top: 5vh;
  margin-bottom: -1vh;
  font-size: 20px;
  font-family: '맑은 고딕';
`;

const MainBlock = () => {
  const dispatch = useDispatch();
  const { coronaCount } = useSelector((state) => state.count);
  // console.log(coronaCount);
  useEffect(() => {
    dispatch(getCount(today));
  }, [dispatch]);

  return (
    <MainWrapper>
      <SearchBar />
      <BodyBottomText>
        금일 집계된 코로나 관련 뉴스 수: {coronaCount}
      </BodyBottomText>
      <p>다음 뉴스 기준</p>
      <p>현재 검색 가능한 기업: 한진칼, 신풍제약, 효성중공업</p>
    </MainWrapper>
  );
};

export default MainBlock;
