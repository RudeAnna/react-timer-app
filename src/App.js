import React, { useState, useRef } from "react";
import "./App.css";
import Timer from "./Timer";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";
import { BsPlayFill, BsFillPauseFill } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";

const App = () => {
	const [mountTimer, setMountTimer] = useState(false);
	const [startTimer, setStartTimer] = useState(false);

	const ChildRef = useRef();

	const handleMount = () => {
		setMountTimer(true);
	};

	const handleUnmount = () => {
		setMountTimer(false);
		handlePause();
	};

	const handleStart = () => {
		setStartTimer(true);
	};

	const handlePause = () => {
		setStartTimer(false);
	};

	return (
		<div className="timer-wrapper">
			<div className="buttons-open">
				<button className="mount btn" onClick={handleMount}>
					<HiLockOpen />
				</button>
				<button className="unmount btn" onClick={handleUnmount}>
					<HiLockClosed />
				</button>
			</div>
			<div className="timer-container">
				<Timer
					mountTimer={mountTimer}
					startTimer={startTimer}
					handlePause={handlePause}
					ref={ChildRef}
				/>
			</div>
			<div className="buttons-control">
				<button
					className="start btn"
					onClick={handleStart}
					disabled={!mountTimer}
				>
					<BsPlayFill />
				</button>
				<button
					className="pause btn"
					onClick={handlePause}
					disabled={!mountTimer}
				>
					<BsFillPauseFill />
				</button>
				<button
					className="reset btn"
					disabled={!mountTimer}
					onClick={() => ChildRef.current.timerReset()}
				>
					<VscDebugRestart />
				</button>
			</div>
		</div>
	);
};

export default App;
