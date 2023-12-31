import React from 'react';

  console.clear();

  const {
    useState,
    useEffect,
    useReducer,
    useLayoutEffect,
    useRef
  } = React;

  const states = {
    IDLE: "IDLE",
    HOVERING: "HOVERING",
    UPLOADING: "UPLOADING",
    SUCCESS: "SUCCESS"
  };

  const events = {
    MOUSEENTER: "MOUSEENTER",
    MOUSELEAVE: "MOUSELEAVE",
    CLICK: "CLICK",
    SUCCESS: "SUCCESS",
    RESET: "RESET"
  };

  const uploaderMachine = {
    initial: states.IDLE,
    states: {
      [states.IDLE]: {
        on: {
          [events.CLICK]: states.UPLOADING,
          [events.MOUSEENTER]: states.HOVERING
        }
      },
      [states.HOVERING]: {
        on: {
          [events.CLICK]: states.UPLOADING,
          [events.MOUSELEAVE]: states.IDLE
        }
      },
      [states.UPLOADING]: {
        on: { [events.UPLOADED]: states.SUCCESS }
      },
      [states.SUCCESS]: {
        on: {
          [events.CLICK]: states.IDLE,
          [events.RESET]: states.IDLE
        }
      }
    }
  };

  function uploaderReducer(state, event) {
    return (
      (uploaderMachine.states[state] &&
        uploaderMachine.states[state].on[event]) ||
      state
    );
  }

  /* ---------------------------------- */

  function Progress(props) {
    const { duration } = props;
    const valueRef = useRef(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          valueRef.current = valueRef.current + 1;
          setValue(valueRef.current)
        }, duration / 100);

        return ()=>{
          clearInterval(intervalId)
        }
    }, [])

    return (
      <progress min={0} max={100} value={value} />
    )
  }

  const TIMEOUT = 2000;

  function FileUploader() {
    const [state, dispatch] = useReducer(
      uploaderReducer,
      uploaderMachine.initial
    );

    useEffect(() => {
      switch (state) {
        case states.UPLOADING:
          setTimeout(() => dispatch(events.UPLOADED), TIMEOUT);
          break;
        case states.SUCCESS:
          setTimeout(() => dispatch(events.RESET), TIMEOUT);
          break;
      }
    }, [state]);

    const showProgress = [states.UPLOADING, states.SUCCESS].includes(state);

    return (
      <div
        className="file-uploader"
        data-state={state}
        onMouseEnter={() => dispatch("MOUSEENTER")}
        onMouseLeave={() => dispatch("MOUSELEAVE")}
        onClick={() => dispatch("CLICK")}
      >
        <CloudIcon state={state} />

        <div className="message">
          <strong
            data-hidden={![states.IDLE, states.HOVERING].includes(state)}
            >Upload</strong>

          <strong
            data-hidden={![states.UPLOADING].includes(state)} className="message-uploading">Uploading</strong>

          <strong
            data-hidden={![states.SUCCESS].includes(state)} className="message-done">Done!</strong>
        </div>

        <div className="progress" data-hidden={!showProgress}>
          {showProgress && <Progress duration={TIMEOUT} />}
        </div>
      </div>
    );
  }

  function CloudIcon({ state }) {

    const svgDisplayProps = {
      viewBox: "0 0 32 32",
      width: "100",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "2",
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      strokeMiterlimit: "1.5"
    };

    return (
      <div className="cloud-icon">
        <svg className="cloud" data-hidden="false" {...svgDisplayProps}>
          <path d="M18 22h6.001A5.003 5.003 0 0029 17a4.997 4.997 0 00-3.117-4.634 5.503 5.503 0 00-7.789-3.813 7 7 0 00-13.082 3.859A5.007 5.007 0 002 17c0 2.761 2.232 5 4.999 5H13" />
        </svg>
        <svg
          className="line"
          data-hidden={[states.UPLOADING, states.HOVERING].includes(state)}
          {...svgDisplayProps}>
          <path d="M18 22h-5" />
        </svg>
        <svg
          className="arrow"
          data-hidden={![states.UPLOADING, states.HOVERING].includes(state)}
          {...svgDisplayProps}
          >
            <path d="M15.5 15.151v11.824-11.824z"/>
            <path d="M12.075 18.34l3.425-3.528 3.425 3.528"/>
        </svg>
        <svg
          className="check"
          data-hidden={![states.SUCCESS].includes(state)}
          {...svgDisplayProps}>
          <path
            d="M11.4 15.787l3.426 2.553 5.774-5.556" />
        </svg>
      </div>
    );
  }

  /* ---------------------------------- */

  function Loader() {
    return (
      <div className="app">
        <FileUploader />
      </div>
    );
  }
export default Loader;
