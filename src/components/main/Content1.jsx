import { ContentStyle } from "./ContentStyle";


const Content1 = () => {
  

    return (
        <ContentStyle>
          <section id = "intro">
            
             <div className="inner">
                    <h2> 그로잉 소개 </h2>
                    <div className="intro">
                      <div className="intro-left">
                        <div className="intro-title">
                          그로잉(Growing)이란?
                        </div>
                        <p>그로잉은 디지털 시대를 살아가는 아이들을 위한  
                          <strong> 청년 디지털 교육 봉사단체</strong>
                          입니다.
                        </p>
                        <p>
                          <strong>서울동행</strong>
                          과 <strong>서울시자원봉사센터</strong>
                          가 함께하며, 기획부터 실행까지 청년들이 직접 주도하는 기획형 봉사단입니다.
                        </p>
                      </div>
                      <div className="intro-right">
                        <img src="/images/growing_logo.png" alt="로고" />
                      </div>
                      
                    </div>
            </div>

           
          </section>
        </ContentStyle>
        
        
    );
};

export default Content1;