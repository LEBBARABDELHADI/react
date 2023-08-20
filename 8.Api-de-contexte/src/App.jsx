import Content from "./componeents/Content/Content";
import ToggleTheme from "./componeents/ToggleThemeButton/ToggleThemeButton.jsx";

function App() {
  return (
    <>
      <ToggleTheme className="toggleContainer" />
      <Content />
    </>
  );
}

export default App;
