import { useSelector, useDispatch } from "react-redux";
import { updateFoo } from "../src/feature";

function App() {
  const fooReduce = useSelector((state) => state.fooReduce);
  const dispatch = useDispatch();
  function handleClick(e) {
    dispatch(updateFoo({ type: 0, foo: [1, 2] }));
    dispatch(updateFoo({ type: 1, foo: 6 }));
    dispatch(updateFoo({ type: 1, foo: 3 }));
  }
  console.log(fooReduce);

  return (
    <>
      <button onClick={handleClick}>btn1</button>
      foo : {fooReduce.foo} switch : {fooReduce.switch}{" "}
    </>
  );
}

export default App;
