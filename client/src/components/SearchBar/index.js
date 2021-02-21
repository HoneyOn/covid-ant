import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { changeSearch, initializeSearch } from '../../modules/search';
import Button from '../common/Button';

const StyledInput = styled.input`
  outline: none;
  border: 0px;
  flex: 1;
  font-size: 18px;
  padding: 0px 30px;
`;

const SearchBarWrapper = styled.div`
  width: 100%; // MainWrapper
  height: 6vh;
  margin-top: 12vh;
  display: flex;
`;

const SearchButton = styled(Button)`
  margin-left: auto;
`;

const SearchBlock = styled.form`
  border: 3px solid ${(props) => props.theme.main};
  padding: 0;
  margin: 0 auto;
  width: 100%;
  /* flex: 0.5; */
  display: flex;
`;

const SearchBar = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 테이블에 해당 기업명이 없을 경우 예외처리 필요
    history.push('/search-result');
  };

  const handleChange = (e) => {
    const companyName = e.target.value;
    dispatch(changeSearch(companyName));
  };

  // 렌더링될 때 이전 검색 값을 가지고 있지 않도록 초기화
  useEffect(() => {
    dispatch(initializeSearch());
  }, []);

  return (
    <SearchBarWrapper>
      <SearchBlock onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="기업 명을 입력하세요."
          autoFocus
          onChange={handleChange}
        />
        <SearchButton width="70px" fontSize="18px">
          검색
        </SearchButton>
      </SearchBlock>
    </SearchBarWrapper>
  );
};

export default SearchBar;
