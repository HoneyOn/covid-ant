import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BannerDesc = styled.div`
  margin-top: 2.5vh;
  font-size: 16px;
  font-weight: 500;
`;

const BannerTitle = styled.div`
  color: ${(props) => props.theme.main};
  font-size: 50px;
  font-weight: 700;
`;

const BannerBody = styled.div`
  width: inherit;
  overflow-y: hidden;
  height: 23vh;
  min-width: 280px;
  max-width: 640px;
  margin: 0 auto;
`;

const BannerContent = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BannerArea = styled.div`
  border-bottom: solid 2px rgba(0, 0, 0, 0.1);
`;

const Banner = ({ title, descList }) => {
  const Descs = descList.map((desc) => (
    <>
      {desc}
      <br />
    </>
  ));
  return (
    <BannerArea>
      <BannerBody>
        <BannerContent>
          <BannerTitle>{title}</BannerTitle>
          <BannerDesc>{Descs}</BannerDesc>
        </BannerContent>
      </BannerBody>
    </BannerArea>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  descList: PropTypes.array.isRequired,
};

export default Banner;
