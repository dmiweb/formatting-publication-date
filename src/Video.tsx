import DateTime from "./DateTime";
import withDateTimePretty from "./DateTimePretty";

const Video = (props: {url: string, date: string}): JSX.Element => {
  
  const SinceDateTime = withDateTimePretty(DateTime);

  return (
    <div className="video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <SinceDateTime date={props.date}/>
    </div>
  )
}

export default Video;