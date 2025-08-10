import styled from 'styled-components';

export const ExhibitionWrap = styled.div`


  img {
    width: 100%;
    position: relative;
    max-width: none;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 5%;
  }

  .inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 180px;
  }

  h2 {
    display: none;
  }

  @media (max-width: 768px) {
    img {
      padding-top: 60px;
      width: 200%;
    }
    .inner {
      max-width: 100%;
      padding: 0 20px 100px;
    }
  }
`;

// 영상 리스트 영역
export const ExhibitionListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  .exhibition-item {
    flex: 1 1 calc(50% - 20px);
    max-width: 500px;
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 1rem;

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 10px;
    }
    p {
      font-size: 1rem;
      color: #666;
    }
  }

  @media (max-width: 768px) {
    .exhibition-item {
      flex: 1 1 100%;
      max-width: 100%;
      padding: 15px 10px;
      

      h3 {
        font-size: clamp(1.1rem, 4vw, 1.5rem);
      }
      p {
        font-size: clamp(0.9rem, 3vw, 1rem);
      }
    }
  }
`;

// 필터 버튼 영역 감싸는 div
export const FilterWrap = styled.div`
  text-align: center;
  margin: 30px 0;
  padding: 0 10px;
`;

// 필터 버튼 스타일
export const FilterButton = styled.button`
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 20px;
  border: ${({ active }) => (active ? '2px solid #8ED973' : '1px solid #ccc')};
  background-color: ${({ active }) => (active ? '#8ED973' : 'white')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  cursor: pointer;
  transition: 0.3s;
  font-size: 1rem;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #8ED973;
    color: white;
  }

  @media (max-width: 768px) {
    margin: 5px 5px 5px 0;
    font-size: clamp(0.8rem, 3vw, 1rem);
    padding: 7px 14px;
  }
`;