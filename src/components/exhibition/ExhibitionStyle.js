import styled from 'styled-components';

export const ExhibitionListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
  overflow-x: hidden; /* 혹시 넘침 방지 */

  .exhibition-item {
    flex: 1 1 calc(50% - 20px);
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 1rem;
    min-width: 0; /* flex item 줄어들도록 기본값 강제 */

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    p {
      font-size: 1rem;
      color: #666;
    }

    video,
    img {
      max-width: 100%;
      width: 100%;       /* 반드시 부모 너비에 맞춤 */
      height: auto;
      display: block;
      border-radius: 0.5rem;
      object-fit: contain; /* 영상 비율 유지 */
    }
  }
    video {
    margin-bottom : 10px;}

  @media (max-width: 768px) {
    .exhibition-item {
      flex: 1 1 100%;
      padding: 14px 14px;
      min-width: 0; /* 모바일에서도 필수 */
    }
    video {
    margin-bottom : 10px;
    }
    .exhibition-item h3 {
      font-size: clamp(1.1rem, 2vw, 1.5rem);
      font-weight: 700;
      margin-bottom : 0;
    }
  }
`;


// 🔽 추가: 필터 버튼 영역 스타일
export const FilterWrap = styled.div`
  text-align: center;
  margin: 60px 0;

   @media (max-width: 768px) {
   margin : 30px 10px;
    display: flex;
    flex-wrap: wrap;  
    justify-content: center;
    gap: 6px;
    padding: 0 10px;
  }
`;

export const FilterButton = styled.button`
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 20px;
  border: ${({ active }) => (active ? "1px solid #8ED973" : "1px solid #ccc")};
  background-color: ${({ active }) => (active ? "#8ED973" : "white")};
  color: ${({ active }) => (active ? "white" : "#333")};
  cursor: pointer;
  white-space: nowrap;   // ✅ 한 줄 유지
  flex-shrink: 1;         // ✅ 공간 부족하면 줄어들 수 있도록
  min-width: 80px;        // ✅ 버튼 너무 작아지는 것 방지

  &:hover {
    background-color: #8ED973;
    color: white;
  }

   @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-right: 6px;
    padding: 6px 12px;
    flex-shrink: 1;
    white-space: nowrap;
  }
`;