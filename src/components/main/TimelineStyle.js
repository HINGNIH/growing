import styled from "styled-components";
export const TimeLineWrap = styled.section`

  padding: 80px 20px;
  background: #fff;


  .wrap {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    max-width: 1200px;
    min-height: 400px;
    margin: 0 auto;
    align-items : flex-start;
    
  }

  .info {
    width: 50%;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : flex-start;
    height : 100%;

   
    h2 {
      font-size: clamp(20px, 3vw, 28px);
      margin-bottom: 20px;
      color: #8ED973;
    }

    .subtext {
      margin-top : auto;
      font-size: clamp(14px, 2vw, 18px);
      line-height: 1.6;
      color: #222;
      padding-right: 15%;
      
    }
  }

  .timeline {
    width: 50%;
    padding-left: 20px;
    list-style: none;
    position:relative;
 /* 세로선 */
    &::before {
      content: '';
      position: absolute;
      top: 10px;
      left: 9px;        /* 도트 왼쪽 맞춤 */
      width: 2px;
      height: 100%;   /* 리스트 전체 높이 */
      background-color: #8ED973;
      z-index: 0;
    }

    li {
      position: relative;
      margin-bottom: 40px;

      .dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #8ED973;
        position: absolute;
        left: -20px;
        top: 5px;
      }
    

     

      .text {
        padding-left: 20px;

        strong {
          font-size: clamp(18px, 2.8vw, 26px);
          font-weight: bold;
          display: block;
          margin-bottom: 4px;
          color: #222;
        }

        p {
          margin: 0;
          font-size: clamp(14px, 2vw, 18px);
          font-weight:600;
          color: #444;
        }
        p:last-child {
        font-weight:400;
        }

        .desc {
          font-size: clamp(12px, 1.6vw, 14px);
          color: #aaa;
          margin-top: 4px;
        }
      }
    }
  }
    @media (max-width: 768px) {
      .timeline::before {
       width: 1px; 
  }

 
  .timeline li .dot {
    width: 12px;
    height: 12px;
    left: -16px; /* 위치도 살짝 조정해줌 */
    top: 6px;
  }
}
`;