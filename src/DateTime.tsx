const DateTime = (props: {date: string}): JSX.Element => {
  return (
    <p className="date">{props.date}</p>
  )
}

export default DateTime;