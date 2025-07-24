import { RiRobot2Line } from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { PiPlantBold } from "react-icons/pi";
import { GiLightBulb } from "react-icons/gi";

import { KeywordsStyle } from "./ContentStyle";




const Content2 = () => {
   const keywords = [
    { text: '디지털 리터러시', icon:<MdOutlinePhoneAndroid /> },
    { text: '생성형 AI 체험', icon:<RiRobot2Line /> },
    { text: '디지털 윤리 교육', icon: <FaBalanceScale /> },
    { text: '디지털 디톡스', icon: <PiPlantBold /> },
    { text: '자율과 창의', icon:  <GiLightBulb />},
    { text: '공감과 협력', icon: <FaHandshakeSimple /> },
];
    return (
        <KeywordsStyle>
            <div className='inner'>
                <h2> 그로잉 핵심 키워드</h2>
                <p>그로잉은 다음과 같은</p>
                <p><strong>핵심 키워드</strong>를 바탕으로</p>
                <p><strong>지속적인 교육</strong>을 펼치고 있습니다.</p>

                <ul className="keywords-list">
                    {keywords.map((item, idx) => (
                        <li key={idx}>
                            <span className="icon">{item.icon}</span>
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </KeywordsStyle>
    );
};

export default Content2;
