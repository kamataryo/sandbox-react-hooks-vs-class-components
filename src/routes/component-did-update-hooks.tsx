import React from "react";
import ViewSource from "./../components/view-source";

type Props = {};

const masterData: { [category: string]: string[] } = {
  fruits: ["banana", "orange", "apple"],
  mamal: ["cat", "dog", "horse"],
  fish: ["mackerel", "tuna", "cod", "salmon"]
};

const App: React.FC<Props> = () => {
  const [category, setCategory] = React.useState<string>("fruits");
  const [data, setData] = React.useState<string[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCategory(e.target.value);

  React.useEffect(
    () => {
      // mock fetch
      setTimeout(() => setData(masterData[category]), 1000);
    },
    [category]
  );

  return (
    <div>
      <h1>{"didUpdate Sample with Hooks"}</h1>
      <p>{"Fetch after selection."}</p>
      <label>{"category "}</label>
      <select onChange={onChange} value={category}>
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
      <ViewSource url={"/src/routes/component-did-update-hooks.tsx"} />
    </div>
  );
};

export default App;
