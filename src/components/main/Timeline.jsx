
import {TimeLineWrap} from './TimelineStyle';

const timelineData = [
  { date: '2024.06', content: '그로잉 1기 활동 시작' , desc : null},
  { date: '2024.07', content: '역촌 4호점 우리동네 키움센터', desc: '총 2회 교육 진행' },
  { date: '2024.08', content: '용산 7호점 우리동네 키움센터', desc: '총 2회 교육 진행' },
  { date: '2024.09', content: '강감찬관악종합사회복지관', desc: '총 2회 교육 진행' },
  { date: '2025.06', content: '그로잉 2기 활동 시작' },
  { date: '2025.07', content: '강감찬관악종합사회복지관', desc: '총 2회 교육 진행' },
  { date: '2025.07', content: '은평신나센터', desc: '총 2회 교육 진행 예정' }
]

const Timeline = () => {
  
    return (
      <TimeLineWrap>
      <section id="timeline">

     
      <div className="wrap">
      <div className="info">
        <h2>그로잉은 이렇게 활동했어요!</h2>
        <p className="subtext">
          그로잉은 2024년부터 각 아동 기관을 2회씩 방문해, 아이들의 눈높이에 맞춘 디지털 교육을 꾸준히 진행해왔습니다.<br />
          자세한 활동 이야기는 인스타그램과 블로그에서 만나보실 수 있어요.
        </p>
      </div>
      <ul className="timeline">
        {timelineData.map((item, index) => (
          <li key={index}>
            <div className="dot" />
            <div className="text">
              <strong>{item.date}</strong>
              <p>{item.content}</p>
              <p className='desc'>{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </section> 
  
   </TimeLineWrap>
    );
};

export default Timeline;
