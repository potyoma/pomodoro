import { Container } from "@mui/material"
import { useCallback, useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { PeriodType } from "../entities/period"
import { useTimer } from "../hooks/timer"
import { reset, State, switchPeriod } from "../store/state"
import { SessionControls } from "./controls/sessionControls"
import { TimePeriod } from "./controls/timePeriod"
import { Display } from "./display"
import { Sound } from "./sound"

const ControlPanel: React.FC = () => {
  const dispatch = useDispatch()

  const [shouldContinue, setShouldContinue] = useState(false)

  const currentPeriod = useSelector((state: State) => state.currentPeriod)
  const time = useSelector((state: State) => state[currentPeriod])

  const audioRef = useRef<HTMLAudioElement>(null)

  const switchSes = () => {
    const toPeriod = (period: PeriodType) => {
      switch (period) {
        case PeriodType.Break:
          return PeriodType.Session
        case PeriodType.Session:
          return PeriodType.Break
      }
    }

    dispatch(switchPeriod(toPeriod(currentPeriod)))
  }

  const handleComplete = () => {
    audioRef?.current?.play()
    switchSes()
  }

  const handleReset = () => {
    dispatch(reset())
    setShouldContinue(false)
  }

  const handleStart = () => shouldContinue || setShouldContinue(true)

  const {
    pause,
    reset: handleTimerReset,
    start,
    ticking,
    timeLeft,
  } = useTimer(time, handleReset, handleComplete, handleStart)

  const handlePause = () => (ticking ? pause() : start())

  const startCallback = useCallback(() => start(), [start])

  useEffect(() => {
    shouldContinue && startCallback()
  }, [currentPeriod, startCallback, shouldContinue])

  return (
    <Container maxWidth="sm">
      <TimePeriod type={PeriodType.Break} />
      <TimePeriod type={PeriodType.Session} />
      <Display timeLeft={timeLeft} />
      <SessionControls onPause={handlePause} onReset={handleTimerReset} />
      <Sound ref={audioRef} />
    </Container>
  )
}

export { ControlPanel }
