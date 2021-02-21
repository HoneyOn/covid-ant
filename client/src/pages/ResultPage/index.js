import React from 'react';
import Banner from '../../components/Banner';
import ResultBlock from '../../components/ResultBlock/index';

const desc1 =
  'LSTM 모델로 시계열 분석을 실시해 해당 종목의 변동성을 예측합니다.';

const ResultPage = () => {
  const descList = [desc1];
  return (
    <>
      <Banner title={'🤖 예측 결과'} descList={descList} />
      <ResultBlock />
    </>
  );
};

export default ResultPage;
