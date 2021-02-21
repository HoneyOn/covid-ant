import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ResultChart from '../ResultChart/index';
import palette from '../../styles/theme';
import { getPrediction } from '../../modules/prediction';

const ResultWrapper = styled.div`
  min-width: 280px;
  max-width: 640px;
  height: 62vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultTitle = styled.div`
  height: auto;
  margin-top: 6vh;
  font-size: 40px;
  font-weight: 700;
  color: ${(props) => props.theme.darkgray};
`;

const Score = styled.div`
  font-size: 60px;
  font-weight: 800;
  margin-top: 1vh;
  margin-bottom: -4vh;
  color: ${(props) => props.fontColor};
`;

const ResultBlock = () => {
  const dispatch = useDispatch();
  const searchedValue = useSelector((state) => state.search.companyName);
  const volatility = useSelector((state) => state.prediction.prediction);
  useEffect(() => {
    dispatch(getPrediction(searchedValue));
  }, [dispatch, searchedValue]);

  let resultColor;
  // console.log(volatility);

  if (volatility < 10) {
    resultColor = `${palette.green}`;
  } else if (volatility < 30) {
    resultColor = `${palette.orange}`;
  } else {
    resultColor = `${palette.red}`;
  }

  return (
    <>
      <ResultWrapper>
        {volatility && (
          <>
            <ResultTitle fontColor={resultColor}>{searchedValue}</ResultTitle>
            <Score fontColor={resultColor}>{volatility}</Score>
            <ResultChart />
          </>
        )}
      </ResultWrapper>
    </>
  );
};

export default ResultBlock;
