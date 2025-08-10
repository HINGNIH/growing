import { useState } from "react";
import ExhibitionItem from "./ExhibitionItem";
import {ExhibitionListWrap, FilterButton, FilterWrap} from './ExhibitionStyle'
const videoList = [
  {
    id: 1,
    title: "코드 너머의 마음",
    team : '우리조',
    category : '강감찬관악종합사회복지관',
    url: "/videos/ganggamchan_1.mp4",
    poster: "/thumnails/g1.png"
  },
  {
    id: 2,
    title: "우리가 바꾼 하루, 지구가 달라졌어",
    team : '팀팀',
    category : '강감찬관악종합사회복지관',
    url: "/videos/ganggamchan_2.mp4",
    poster: "/thumnails/g2.png"
  },
  {
    id: 3,
    title: "지구 지킴이 플로",
    team : '찬성팀',
    category : '강감찬관악종합사회복지관',
    url: "/videos/ganggamchan_3.mp4",
    poster: "/thumnails/g3.png"
  },
  {
    id: 4,
    title: "로봇의 반란",
    team : '늦었조',
    category : '강감찬관악종합사회복지관',
    url: "/videos/ganggamchan_4.mp4",
    poster: "/thumnails/g4.png"
  }
  ,
  {
    id: 5,
    title: "하루가 본 놀이터대소동",
    team : '과일조',
    category : '강감찬관악종합사회복지관',
    url: "/videos/ganggamchan_5.mp4",
    poster: "/thumnails/g5.png"
  }
  , {
    id: 6,
    title: "너와 함께라면",
    team : '해치팀',
    category : '강감찬관악종합사회복지관',
    url: "/videos/ganggamchan_6.mp4",
    poster: "/thumnails/g6.png"
  }
    , {
    id: 7,
    title: "느긋한 판다와 욕심많은 원숭이",
    team : '신나조',
    category : '은평신나는애프터센터',
    url: "/videos/eun_1.mp4",
    poster: "/thumnails/eun1.png",
    tags: ["동화 리메이크", "금도끼은도끼"]
  }
  
   , {
    id: 9,
    title: "느긋한 치즈와 성급한 초코",
    team : '빈우남매조',
    category : '은평신나는애프터센터',
    url: "/videos/eun_3.mp4",
    poster: "/thumnails/eun3.png",
    tags: ["동화 리메이크", "토끼와 거북이"]
  }
  , {
    id: 10,
    title: "골디락스와 불법 침입 사건",
    team : '다영도영',
    category : '은평신나는애프터센터',
    url: "/videos/eun_4.mp4",
    poster: "/thumnails/eun4.png",
    tags: ["동화 리메이크", "골디락스와 곰 세마리"]
  }
  , {
    id: 99,
    title: "시계수리공",
    team : '그로잉',
    category : '기타',
    url: "/videos/03.mp4",
  }
  , {
    id: 100,
    title: "구름 위의 토끼",
    team : '그로잉',
    category : '기타',
    url: "/videos/01.mp4",
  }
  
];

const ExhibitionList = () => {
  const [category, setCategory] = useState("전체");
  const categories = ["전체", "강감찬관악종합사회복지관", "은평신나는애프터센터", "기타" ];

  const filteredVideos =
    category === "전체"
      ? videoList
      : videoList.filter((video) => video.category === category);

  return (
    <>
    <FilterWrap>
      {categories.map((cat)=>(
        <FilterButton
        key={cat}
        onClick={()=>setCategory(cat)}
        active={category === cat}
        >
          {cat}
        </FilterButton>
      ))}
    </FilterWrap>

    
    <ExhibitionListWrap>
       {filteredVideos.map((video) => (
    <ExhibitionItem key={video.id} video={video} />
  ))}
    </ExhibitionListWrap>
    </>
  );
};

export default ExhibitionList;