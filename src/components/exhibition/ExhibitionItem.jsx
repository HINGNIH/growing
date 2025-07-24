// components/ExhibitionList.jsx

const ExhibitionItem = ({ video }) => {
    return (
    <div className="exhibition-item">
      <video
        src={video.url}
        poster={video.poster}    // 썸네일 이미지 경로 추가
        controls
        width="100%"
        playsInline           // iOS에서 잘 작동하게
        muted                 // 자동재생 필요시, mute 필수
      />
      <h3>{video.title}</h3>
      <p>{video.team}</p>
    </div>
  );
};

export default ExhibitionItem;
