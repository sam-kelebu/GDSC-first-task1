import "./App.css";

function App() {
  const hobby = {
    job: "coding",
    food: "shiro",
    color: "green",
    number: 12,
  };
  return (
    <div className="App">
      <h1>My Hobby</h1>
      <p>{hobby.job}</p>
      <p>{hobby.food}</p>
      <p>{hobby.number}</p>
      <p>{hobby.color}</p>
    </div>
  );
}

export default App;
