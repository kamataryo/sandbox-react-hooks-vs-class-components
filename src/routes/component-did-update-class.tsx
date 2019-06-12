import React from "react";
import ViewSource from "./../components/view-source";

type Props = {};
type State = { readonly category: string; readonly data: string[] };

const masterData: { [category: string]: string[] } = {
  fruits: ["banana", "orange", "apple"],
  mamal: ["cat", "dog", "horse"],
  fish: ["mackerel", "tuna", "cod", "salmon"]
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { category: "fruits", data: [] };
  }

  fetchData = (category: string) =>
    // mock fetch
    setTimeout(() => this.setState({ data: masterData[category] }), 1000);

  componentDidMount() {
    this.fetchData(this.state.category);
  }

  componentDidUpdate(_0: Props, prevState: State) {
    if (this.state.category !== prevState.category) {
      this.fetchData(this.state.category);
    }
  }

  onChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    this.setState({ category: e.target.value });

  render() {
    const { category, data } = this.state;
    return (
      <div>
        <h1>{"didUpdate Sample with Class Component"}</h1>
        <p>{"Lazy incremental suggestion."}</p>
        <label>{"category"}</label>
        <select onChange={this.onChange} value={category}>
          <option value="fruits">{"fruits"}</option>
          <option value="mamal">{"mamal"}</option>
          <option value="fish">{"fish"}</option>
        </select>
        <p>{"fetched data"}</p>
        <ul>
          {data.map(value => (
            <li key={value}>{value}</li>
          ))}
        </ul>
        <ViewSource url={"/src/routes/component-did-update-class.tsx"} />
      </div>
    );
  }
}

export default App;
