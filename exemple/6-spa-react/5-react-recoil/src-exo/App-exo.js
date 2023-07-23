import React, { useEffect } from "react";
import { atom, selector, useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import "./styles.css";

const secondsState = atom({
  key: 'seconds',
  default: 0
})

const minutesState = atom({
  key: 'minutes',
  default: 2
})

const timeSelector = selector({
  key: 'time',
  get: ({ get }) => `${get(minutesState)} : ${get(secondsState)}`,
  set: ({ set }, { minutes, seconds }) => {
    set(minutesState, minutes)
    set(secondsState, seconds)
  },
});

//un compteur pour modifier cet état
//On utilise le hook useRecoilState pour récupérer la valeur courante de l’état ainsi que son setter
const App = () => {

  const [timeState, setTimeState] = useRecoilState(timeSelector);
  const currentMinutes = useRecoilValue(minutesState);
  const currentSeconds = useRecoilValue(secondsState);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = updateTime(currentMinutes, currentSeconds, -1)
      setTimeState(newTime)
      clearInterval(timer)
    }, 1000)
  }, [timeState])

  const updateTime = (minutes, seconds, incr) => {
    seconds += incr
    // modifie la seconde
    if (seconds < 0) {
      seconds += 60
      minutes --
    } else if (60 < seconds) {
      seconds -= 60
      minutes ++
    }
    // modifie la minute
    if (minutes < 0 || 60 <= minutes) {
      minutes = 0
    }
    return {minutes, seconds}
  }

  return (
    <section className="App">
    <h4>Chrono recoil</h4>
    <time>{timeState}</time>
    </section>
  );
};

export default App;
