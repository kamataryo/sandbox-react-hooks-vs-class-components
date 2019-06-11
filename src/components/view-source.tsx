import * as React from "react";
import axios from "axios";
import Highlight from "react-highlight";

type Props = { readonly url: string };
type State = { readonly source: string };

const ViewSource: React.FC<Props> = ({ url }) => {
  const [{ source }, setState] = React.useState<State>({ source: "" });

  React.useEffect(
    () => {
      const fetchSource = async () => {
        let source = "";
        try {
          source = (await axios(url)).data
            // remove myself
            .split("\n")
            .filter((line: string) => !/ViewSource/.test(line))
            .join("\n");
        } catch (err) {
          source =
            process.env.NODE_ENV === "development"
              ? "Please try with `NODE_ENV=production`."
              : err.message;
        }
        setState({ source });
      };

      fetchSource();
    },
    [url]
  );

  return <Highlight className={"tsx"}>{source}</Highlight>;
};

export default ViewSource;
