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
      <div className="flex items-start justify-start flex-col relative w-fit h-full gap-2">
        <div className="flex justify-between gap-3 w-full">
          <label className="grow font-semibold">With Search</label>
          <Select options={options} withSearch />
        </div>
        <div className="flex justify-between gap-3 w-full">
          <label className="grow font-semibold">Portal Without Search</label>
          <Select
            options={options}
            portalTarget={document.getElementById("portal-root")}
            withSearch
          />
        </div>
      </div>
    </>
  );
}

export default App;
