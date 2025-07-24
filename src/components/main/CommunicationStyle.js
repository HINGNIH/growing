import styled from "styled-components";

export const CommunicationWrap = styled.section`
  padding: 60px 20px;
  background: #f2f2f2;

  .inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    font-size: clamp(20px, 3vw, 32px);
    color: #222;
    margin-top: 40px;
    text-align: center;
  }

  span {
    display: block;
    margin: 0 auto 60px;
    text-align: center;
    color: #666;
  
    
  }

  .sns-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
  }

  .sns-block {
    flex: 1 1 48%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

  }

  .sns-block h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(16px, 2.5vw, 24px);
    font-weight: 500;
    margin-bottom: 5px;
    color: #222;
  }

  .icon {
    font-size: clamp(18px, 2.5vw, 24px);
    margin-right: 0.3rem;
  }

  .sns-desc {
    font-size: clamp(13px, 1.8vw, 16px); 
    color: #555;
    margin-bottom: 20px;
    text-align: center; 
  }

  /* 인스타, 블로그 공통 높이 맞춤 */
  .insta-content,
  .blog-content {
    height: 500px;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  /* 인스타는 세로 정렬 */
  .insta-content {
    flex-direction: column;
    padding: 20px;
  }

  .insta-content iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  /* 블로그는 가로 정렬 */
  .blog-content {
    flex-direction: row;
  }

  .blog-content img {
    width: auto;
    height: 100%;
    max-width: 200px;
    border-radius: 8px;
    flex-shrink: 0;
    object-fit: contain;
  }

  /* iframe 감싸는 div: 둥근 모서리 및 넘침 숨김 */
  .iframe-wrapper {
    border-radius: 1rem;
    overflow: hidden;
    flex: 1;
    height: 100%;
  }

  .iframe-wrapper iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

 @media (max-width: 768px) {
  .sns-container {
    flex-direction: column;
  }

  .sns-block {
    width: 100%;
    text-align: center;
    align-items: center;
  }

  .insta-content,
  .blog-content {
    height: 500px;
    min-height: 500px;
    width : 100%;
  }

  .insta-content {
    padding: 20px;
  }

  .blog-content {
    flex-direction: row;
    align-items: center;
  }

  .blog-content img {
    display : none;
  }

  .iframe-wrapper {
    height: 100%;
  }
}
`;
