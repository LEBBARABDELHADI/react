import "./Cmponents/app.css";
import "./Cmponents/main.css";
import "./Cmponents/footer.css";
import "./Cmponents/header.css";
import Header from "../src/Cmponents/Header.jsx";
import Footer from "../src/Cmponents/Footer.jsx";
import LeftConatiner from "../src/layouts/LeftContainer.jsx";
import Visualization from "./Visualization/Visualization";
function App() {
  return (
    <div className="divComponent">
      <Header></Header>
      <main className="main">
        <LeftConatiner></LeftConatiner>

        <Visualization></Visualization>
        </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
