import Video from "./Video";

type VideoListProps = {
  list: {
    url: string,
    date: string
  }[]
}

const VideoList = (props: VideoListProps): JSX.Element | JSX.Element[] => {
  return props.list.map((item, index) =>
    <Video key={index} url={item.url} date={item.date} />
  );
}

export default VideoList;