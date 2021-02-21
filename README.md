# 🐜 covid-ant

<div align=center>
  <img src="https://user-images.githubusercontent.com/46865281/108621051-a8622f00-7473-11eb-87b3-873cd9c61261.jpeg" width="320px">
</div>

<br/>

* 개인 투자자를 위해 일일 코로나 뉴스 개수, 주가 데이터를 활용해 코로나 관련 주의 변동성 예측을 제공하는 웹 서비스
* 경희대 창의적종합설계 수업에서 "코로나-19 뉴스에 기반한 코로나-19 관련 주의 변동성 예측"을 주제로 한 연구에 포함된 프로토 타입입니다.

  [발표 영상](https://drive.google.com/file/d/1pMalM-XCZuhVj51ilM_LdYqtzjKLCoJm/view?usp=sharing)

<br/>

## 👀 View

<div style="display: flex;">
  <img src="https://user-images.githubusercontent.com/46865281/108620615-9e8afc80-7470-11eb-90c9-5b6e29f69567.png" width="400px;">
    <img src="https://user-images.githubusercontent.com/46865281/108620616-9fbc2980-7470-11eb-9182-0afc9806f291.png" width="400px;">
</div>
<div style="display: flex;">
    <img src="https://user-images.githubusercontent.com/46865281/108620618-a0ed5680-7470-11eb-87a1-7ac74e0da940.png" width="400px;">
  <img src="https://user-images.githubusercontent.com/46865281/108620619-a21e8380-7470-11eb-888a-1a4ce1bef28e.png" width="400px;">
</div>

<br/>


## 🚀 Feature

1. LSTM 모델로 학습한 후 주가 변동성 예측 결과를 보여줌
   - 주가와 코로나 주식 뉴스 개수를 독립변수로, 주가 변동성(시가와 종가의 차이)을 종속 변수로 사용
   - 이때 서비스 대상 기업은 코로나 기한 동안 가격 변동성이 컸던 기업들로 클러스터링을 통해 선별
2. 원하는 종목을 검색하면 변동성 정도에 따라 그래프와 색깔로 확인할 수 있도록 렌더링

<br/>

## 🎒 Usage

```bash
# server
cd server && node src/api.js

# client
cd client && yarn && yarn start
```

<br/>

## 🛠 Stack

Front: javascript, React, Redux, Redux-thunk, styled-components, [victory](https://formidable.com/open-source/victory/)

Back: node.js, python, express, MySql, pymysql

Analysis: yahoo finance API, BeautifulSoup, Tensorflow

Infra: Naver Cloud Platform

### 환경

- Linux 20.04 LTS
- node.js 12.8.1, python 3.71
- create-react-app/3.4.1
- Express 4.17.1
- Tensorflow 2.3

<div style="padding-left: 120px;">
  <img src="https://user-images.githubusercontent.com/46865281/108621321-5e7a4880-7475-11eb-85bb-e216ffbfd862.png" width="480px;">
</div>

<br/>

## 👨🏻‍💻 Team

[오승영](https://github.com/seung-00)

* 웹 서비스 개발 및 배포, [크롤러](https://github.com/seung-00/article_counter) 제작

[김수영](https://github.com/ShiningSu0)

* 주가 데이터 클러스터링, LSTM 모델링

[김홍연](https://github.com/HoneyOn)

* 시계열 분석, LSTM 모델링

