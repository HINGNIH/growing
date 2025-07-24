// components/ExhibitionList.jsx

const ExhibitionItem = ({ video }) => {
  return (
    <div className="exhibition-item">
      <video src={video.url} controls width="100%" />
      <h3>{video.title}</h3>
      <p>{video.team}</p>
    </div>
  );
};

export default ExhibitionItem;
