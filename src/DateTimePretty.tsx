import getSinceDateTime from "./getSinceDateTime";

type P = {
  date: string
}

const withDateTimePretty = (Component: React.ComponentType<P>): React.ComponentType<P> => {
  const ConvertDate = (props: { date: string }) => {

    const sinceDateTime: string = getSinceDateTime(props.date);

    return <Component date={sinceDateTime} />
  }

  return ConvertDate;
}

export default withDateTimePretty;