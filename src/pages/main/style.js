import styled from 'styled-components';

export const VisualWrap = styled.section`

    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
    padding-top: 80px;

    .swiper-slide img {
    width: 100%;           
    height: auto;          
    max-height:100%;  
    object-fit: cover;   
    display: block;
    margin: 0 auto;
  }
`;

export const MainWrap = styled.div`
    width : 100%;
   /* padding : 100px 0;*/

    .inner {
    max-width: 1440px;
    width: 100%; 
    padding: 0 20px; /* 모바일 대응용 좌우 여백 */
    box-sizing: border-box;
    }

    margin: 0 auto;
    /*padding : 0 20px;*/
    
    h2 {
        font-size: 30px;
        font-weight: 700;
    }
    

     @media (max-width: 768px) {
    .inner {
      padding: 0 16px; /* 모바일일 때 여백 살짝 줄임 */
    }

    h2 {
      font-size: 22px; /* 작은 화면에서는 제목 글씨도 작게 */
    }
  }
`;
