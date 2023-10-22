import { useEffect, useRef, useState } from "react";
export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
const MyComp = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return (
    <div>
      <div> {`count ${count} prevCount ${prevCount}`}</div>
      <button onClick={() => setCount((c) => c + 1)}></button>
    </div>
  );
};

export default MyComp;

//undefined 0
// 0 1
