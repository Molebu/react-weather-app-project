import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bloemfontein" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/80341-moleboheng-molatuli"
            target="_blank"
            rel="noreferrer"
          >
            Moleboheng Molatuli
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Molebu/react-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
          href="https://mellifluous-pithivier-422063.netlify.app/"
          target="_blank"
          rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
