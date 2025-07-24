import { useEffect } from "react";
import { CommunicationWrap } from "./CommunicationStyle"; // 스타일 경로 확인
import { BsInstagram } from "react-icons/bs";
import { SiNaver } from "react-icons/si";

const Communication = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js"; // // 빠진 : 추가
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <CommunicationWrap>
      <section id="channel">
        <div className="inner">
          <h2>그로잉 소식 채널</h2>
          <span>그로잉의 다양한 소식을 편하게 만나보세요!</span>

          <div className="sns-container">
            {/* 인스타그램 블록 */}
            <div className="sns-block">
              <h4>
                <BsInstagram className="icon" />
                인스타그램
              </h4>
              <p className="sns-desc">
                ✔ 그로잉의 새로운 소식을 가장 빠르게 전해드려요.
              </p>
              <div className="insta-content">
                <iframe
                  src="//lightwidget.com/widgets/ce087ac0cf6d509fa5726ce738b4c4a7.html"
                  scrolling="no"
                  allowTransparency="true"
                  title="Instagram Widget"
                ></iframe>
              </div>
            </div>

            {/* 블로그 블록 */}
            <div className="sns-block">
              <h4>
                <SiNaver className="icon" />
                네이버블로그
              </h4>
              <p className="sns-desc">
                ✔ 자세한 활동 소개와 생생한 후기를 확인해보세요.
              </p>
              <d iv className="blog-content">
                <img src="/images/blogprofile.png" alt="블로그 썸네일" />
                {/* iframe을 감싸는 div 추가 */}
                <div className="iframe-wrapper">
                  <iframe
                    src="https://feed.mikle.com/widget/v2/174017/?preloader-text=Loading&"
                    className="fw-iframe"
                    scrolling="no"
                    frameBorder="0"
                    title="Blog Widget"
                  ></iframe>
                </div>
              </d>
            </div>
          </div>
        </div>
      </section>
    </CommunicationWrap>
  );
};

export default Communication;
