import styled from 'styled-components';

export const HeaderWrap = styled.header`
  .inner {
    height: 80px;
    width: 100%;
    position: fixed;
    border-bottom: 1px solid #dcdcdc;
    background-color: white;
    z-index: 100;

    display: flex;          
    align-items: center;    
    justify-content: space-between;       
  }

  h1 {
    position: relative;
    margin: 0 0 0 80px;
    a {
      img {
        width: 60px;
      }
    }
  }
  @media (max-width: 768px) {
   .inner {
   height : 60px;
   }
  h1 {
  margin : 0 0 0 20px;
  }
  }
`;

export const NavWrap = styled.nav`
  padding: 0 100px;
  &.nav {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    ul {
      display: flex;
      align-items: center;
      li {
        margin-left: 50px;
        position: relative;
        a,
        button {
          font-size: 18px;
          font-weight: 500;
          transition: 0.3s;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: inherit;

          &:hover {
            color: #8ED973;
          }
        }
        &:last-child span {
          font-size: 16px;
          border-radius: 50%;
          display: block;
          position: absolute;
          right: -20px;
          top: -5px;
          width: 20px;
          height: 20px;
          background-color: #000;
          color: #fff;
          text-align: center;
          line-height: 20px;
        }
      }
    }

    /* 모바일 스타일 */
    @media (max-width: 768px) {
      padding: 0 20px;
      position: static;
      transform: none;
      top: auto;
      right: auto;
      
      ul {
        width: 100%;
        justify-content: flex-end;
        padding: 0;
        margin: 0;

        li {
          margin-left: 0;
          display: none; /* 기본적으로 모두 숨김 */

          &:last-child {
            display: block; /* 팝콘랜드만 보이게 */
            margin-left: 0;
          }
        }

        /* 팝콘랜드 버튼 스타일 */
        li:last-child a {
          background-color: #fff;
          padding: 6px 12px;
          border-radius: 0.5rem;
          color: #8ED973;
          font-size: 13px;
          font-weight: 500;
          transition: background-color 0.3s ease;
          border: 1px solid #8ED973;
          display: inline-block;
          text-decoration: none;
          
        }

        li:last-child a:hover {
          background-color: #8ED973;
          color: white;
        }
      }
    }
  }
`;