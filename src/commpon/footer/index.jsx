import { FooterWrap } from './style';

const Footer = () => {
    return (
        <FooterWrap>
            <div className='inner'>
                {/* <h2>하단로고</h2> */}
                <div className="footer_content">
                
                <div >
                    <h4>🌳 GROWING 📗</h4>
                    
                    <p>
                       함께 배우고, 함께 자라는 디지털 교육 봉사단체 <br/>
                       서울동행 · 서울시자원봉사센터와 함께합니다.
                    </p>

                    <p className='contact'>
                        문의 rmfhdld2025@gmail.com <br/>
                        <a href="https://blog.naver.com/teamgrowing" target="_blank" rel="noopener noreferrer">BLOG</a> | <a href="https://www.instagram.com/growing.seoul?igsh=MWtubWhldjQ1MGh1aw==" target="_blank" rel="noopener noreferrer" >INSTAGRAM</a> 
                    </p>
                    <p>ⓒ 2025 GROWING. All rights reserved.</p>

                
                </div>
              
            </div>
            </div>
        </FooterWrap>
    );
};

export default Footer;
