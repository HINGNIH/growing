import styled from "styled-components";



export const ContentStyle = styled.div`
    background: #fff;
    margin-top: 100px;
    margin-bottom: 150px;
    .inner {
      padding: 20px;
      max-width : 1200px;
    }
    .inner h2 {
    display : none;
    }
    .intro {
    display : flex;
    align-items : center;
    justify-content: space-between;
    flex-wrap:wrap;
    gap : 20px;
    }
    .intro-title {
    margin-bottom: 20px;
    }
    .intro-left, .intro-right {
    flex:1;
    min-width: 300px;
    }
    .intro-left .intro-title {
     font-size: clamp(20px, 3vw, 32px);
    font-weight: 700;
    margin-bottom : 10px;
    }
    .intro-left p {
    font-size: clamp(16px, 2vw, 22px);
    line-height: 1.5;
    
    }
    .intro-left strong {
    font-weight: 700;
    }

  .intro-right img {
    width:100%; 
    height: auto;
    object-fit: contain;
    display: block;
  }
    h2 {
        margin-bottom: 40px;
    }

    
    
`;

export const KeywordsStyle = styled.div`

  background: #fff;
  margin-top: 100px;
  margin-bottom: 150px;

  .inner {
    padding: 20px;
    text-align: center; /* 문장들 가운데 정렬 */
  }
  .inner h2 {
  display : none;
  }
  .inner p {
  font-size: clamp(18px, 2.5vw, 28px); 
  line-height: 1.5;
  }

  .inner strong {
  font-weight : 700;
  }

  .keywords-list {
    margin-top: 40px;
    display: grid;
    /*grid-template-columns: repeat(2, 1fr); 2열 */
    grid-template-columns: repeat(3, 1fr); 
    gap: 30px;
    list-style: none;
    padding: 0;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .keywords-list li {
    background: #Fffff;
    border :4px solid #8ed973;
    color : #8ED973;
    padding: 30px 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .keywords-list li:hover {
    background: #8ED973;
    transform: translateY(-5px);
    color : #fff;
  }
  .keywords-list li:hover .icon {
    color : #fff;
    
  }

  .icon {
    font-size: clamp(28px, 4vw, 48px);
    color: #8ED973;
  }

  .keywords-list span:last-child {
    font-weight: bold;
    font-size: clamp(14px, 2vw, 20px);
  }

@media (max-width: 768px) {
  .keywords-list {
    grid-template-columns: repeat(2, 1fr); 
    gap: 16px; /* 👉 간격을 15px로 축소 */
  }
  .keywords-list li { 
  border : 2px solid #8ED973;
  padding: 20px 10px;
  }
}

`;