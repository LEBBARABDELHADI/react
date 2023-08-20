import Counter from "./pages/Counter/Counter.jsx";
import Fruity from "./pages/Fruity/Fruity.jsx";
import Users from "./pages/users/Users.jsx";
import Chrono from "./pages/Chrono/Chrono.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-700 px-4">
      <div className="mx-auto max-w-3xl pt-10 pb-20">
        {/* 1. counter*/}
        {/* <Counter></Counter> */}
        {/*USERS*/}
        {/* <Fruity></Fruity> */}
        {/* <Users></Users> */}
        <Chrono></Chrono>
      </div>
    </div>
  );
}

export default App;
