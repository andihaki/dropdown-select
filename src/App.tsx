import "./App.css";
import Select from "./components/select";

const options = [
  {
    label: "Test",
    value: "test",
  },
  {
    label: "Ting Test",
    value: "Ting test",
  },
  {
    label: "Test Test Test",
    value: "test test test",
  },
];

function App() {
  return (
    <>
      <div className="flex items-center justify-center relative w-fit h-full">
        <Select options={options} withSearch />
        <Select
          options={options}
          portalTarget={document.getElementById("portal-root")}
          withSearch
        />
      </div>
    </>
  );
}

export default App;
