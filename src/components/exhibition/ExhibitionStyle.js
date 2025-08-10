import styled from 'styled-components';

export const ExhibitionListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 항상 2개씩 보이게 */
  gap: 40px;
  overflow-x: hidden;

  .exhibition-item {
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    border : 0.5px solid #ccc;
    border-radius: 1rem;

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-right: 6px;
    }

    p {
      font-size: 1rem;
      color: #666;
    }

    video,
    img {
      max-width: 100%;
      width: 100%;
      height: auto;
      display: block;
      border-radius: 0.5rem;
      object-fit: contain;
    }
  }

  video {
    margin-bottom: 10px;
  }

  .title-and-tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 6px;
  }

  .video-tag-btn {
    background-color: #e4ffc3ff;
    color: #333;
    border: 1px solid #e4ffc3ff;
    border-radius: 6px;
    padding: 2px 8px;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.4;
    cursor: default;
    white-space: nowrap;
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 모바일에서는 한 줄 */

    .exhibition-item {
      padding: 14px;
    }

    video {
      margin-bottom: 10px;
    }

    .exhibition-item h3 {
      font-size: clamp(1.1rem, 2vw, 1.5rem);
      font-weight: 700;
      margin-bottom: 0;
    }

    .exhibition-item p {
      font-size: clamp(0.8rem, 1.8vw, 1.3rem);
    }

    .title-and-tags {
      margin-bottom: 3px;
    }

    .title-and-tags h3 {
      font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    }
  }
`;

export const FilterWrap = styled.div`
  text-align: center;
  margin: 60px 0;

  @media (max-width: 768px) {
    margin: 30px 10px;
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
  border: ${({ active }) => (active ? '1px solid #8ED973' : '1px solid #ccc')};
  background-color: ${({ active }) => (active ? '#8ED973' : 'white')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 1;
  min-width: 80px;

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
