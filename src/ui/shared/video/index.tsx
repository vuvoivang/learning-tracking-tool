import './style.less';

interface VideoProps {
  src: string;
  onClick?: any;
  height: any;
  width: any;
}
const Video: React.FC<VideoProps> = (props) => {
  const { src, onClick, height, width } = props;

  return (
    <div className={`video-wrapper`} onClick={onClick}>
      <video autoPlay
        loop
        muted
        playsInline
        webkit-playsinline
        preload="metadata"
        height={height}
        width={width}
        poster={src}>
        <source src={src}
          type="video/mp4" />
      </video>
    </div>
  );
};
export default Video;
