import * as React from "react";
import axios from "axios";
import Highlight from "react-highlight";

type Props = { readonly url: string };
type State = { readonly source: string };

const ViewSource: React.FC<Props> = ({ url }) => {
  const [{ source }, setState] = React.useState<State>({ source: "" });

  React.useEffect(() => {
    let ignore = false;

    const fetchSource = async () => {
      if (!ignore) {
        const { data } = await axios(url);
        setState({
          // remove myself
          source: data
            .split("\n")
            .filter((line: string) => !/ViewSource/.test(line))
            .join("\n")
        });
      }
    };

    fetchSource();
    return () => {
      ignore = true;
    };
  });

  return <Highlight className={"jsx"}>{source}</Highlight>;
};

export default ViewSource;
