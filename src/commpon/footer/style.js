// Footer 스타일 수정
import styled from 'styled-components';
export const FooterWrap = styled.footer`
  background-color: #d9d9d9;
  padding: 40px 0;
  color: #333;
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;

  .inner {
    max-width: 1200px;
    width: 100%; /* ✅ 모바일에서 너비 줄어들게 추가 */
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .footer_content {
    display: flex;
    flex-direction: column;
    align-items: center; /* ✅ 수평 가운데 */
    text-align: center;  /* ✅ 텍스트 가운데 */
    gap: 20px;

    h4 {
      font-size: 1.1rem;
      font-weight: 700;
      color: #2e7d32;
      margin-bottom: 6px;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.5;
      margin: 0;

      &.contact {
        margin-top: 8px;
        font-weight: 500;
        color: #555;
        word-break: keep-all; /* ✅ 줄바꿈 처리 */

        a {
          margin: 0 4px;
          color: #409eff; 
          text-decoration: underline; 

      }

      &:last-child {
        font-size: 0.8rem;
        color: #999;
        margin-top: 16px;
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 13px;

    .inner {
      padding: 0 16px; /* ✅ 모바일 여백 조정 */
    }

    .footer_content {
      h4 {
        font-size: 1rem;
      }

      p {
        font-size: 0.85rem;
      }
    }
  }
`;
