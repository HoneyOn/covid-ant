import React from 'react';
import Banner from '../../components/Banner';
import MainBlock from '../../components/MainBlock/index';

const desc1 =
  'COVID-19 뉴스 데이터를 금융 데이터 RNN 모델에 활용해 주가  변동성을 예측하는 서비스';
const dsec2 = '과열된 주식 시장에서 개인 투자자들의 쾌거를 기원합니다.';

const MainPage = () => {
  const descList = [desc1, dsec2];
  return (
    <>
      <Banner title={'🐜 주가 변동성 예측'} descList={descList} />
      <MainBlock />
    </>
  );
};

export default MainPage;
