import { Container } from "@mui/material"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { PeriodType } from "../entities/period"
import { useTimer } from "../hooks/timer"
import { reset, State } from "../store/state"
import { SessionControls } from "./controls/sessionControls"
import { TimePeriod } from "./controls/timePeriod"
import { Display } from "./display"

const ControlPanel: React.FC = () => {
  const dispatch = useDispatch()
  const time = useSelector((state: State) => state[state.currentPeriod])

  const handleComplete = () => {}

  const handleReset = () => dispatch(reset())

  const {
    pause,
    reset: handleTimerReset,
    start,
    ticking,
    timeLeft,
  } = useTimer(time, handleReset)

  const handlePause = () => (ticking ? pause() : start())

  return (
    <Container maxWidth="sm">
      <TimePeriod type={PeriodType.Break} />
      <TimePeriod type={PeriodType.Session} />
      <Display timeLeft={timeLeft} />
      <SessionControls onPause={handlePause} onReset={handleTimerReset} />
    </Container>
  )
}

export { ControlPanel }
