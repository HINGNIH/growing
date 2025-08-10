const ExhibitionItem = ({ video }) => {
  return (
    <div className="exhibition-item">
      <video
        src={video.url}
        poster={video.poster}
        controls
        width="100%"
        playsInline
        muted
      />
      
      <div className="title-and-tags">
        <h3>{video.title}</h3>
        {video.tags && (
          <div className="video-tags">
            {video.tags.map((tag, index) => (
              <button key={index} className="video-tag-btn">{tag}</button>
            ))}
          </div>
        )}
      </div>

      <p>{video.team}</p>
    </div>
  );
};

export default ExhibitionItem;