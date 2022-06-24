import "./App.css";
import { AutoComplete } from "./Components/Autocomplete/AutoComplete";
import { countries } from "./testData/CountriesData";

function App() {
  return (
    <div className="App">
      <h1>HUZAFA ARSHAD</h1>
      <AutoComplete data={countries} />
    </div>
  );
}

export default App;
