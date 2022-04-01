import React, {
	useEffect,
	useState,
	forwardRef,
	useImperativeHandle,
} from "react";
import "./App.css";

const Timer = forwardRef((props, ref) => {
	const [timer, setTimer] = useState(null);
	const { mountTimer, startTimer, handlePause } = props;

	useImperativeHandle(ref, () => ({
		timerReset() {
			setTimer(0);
            handlePause()
		},
	}));

	useEffect(() => {
		mountTimer ? setTimer(0) : setTimer(null);
	}, [mountTimer]);

	useEffect(() => {
		let timerId = null;
		if (startTimer) {
			timerId = setInterval(() => setTimer((prevTimer) => prevTimer + 1), 1000);
		} else {
			clearInterval(timerId);
		}
		return () => {
			clearInterval(timerId);
		};
	}, [startTimer]);

	return (
		<div className={`timer ${mountTimer ? "" : "hidden"}`}>
			<h3 className="number">{timer}</h3>
		</div>
	);
});

export default Timer;
