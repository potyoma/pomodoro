import { useCallback, useEffect, useRef, useState } from "react"

interface Timer {
  start: () => void
  pause: () => void
  reset: () => void
  ticking: boolean
  timeLeft: number
}

const useTimer = (
  minutes: number,
  onReset: () => void,
  onComplete?: () => void,
  onStart?: () => void
): Timer => {
  const timerId = useRef<number | undefined>()
  const time = minutes * 60
  const [timeLeft, setTime] = useState(time)
  const [ticking, setTicking] = useState(false)

  const clear = () => {
    clearInterval(timerId.current)
    timerId.current = undefined
  }

  const tick = () => {
    if (timeLeft > 0) {
      setTime(timeLeft - 1)
    }

    if (timeLeft <= 1) {
      setTicking(false)
      clear()
      onComplete?.()
    }
  }

  useEffect(() => {
    if (ticking) {
      timerId.current = setInterval(tick, 1000)
    } else {
      clear()
    }

    return clear
  }, [ticking, timeLeft])

  useEffect(() => {
    setTime(time)
  }, [time])

  const start = useCallback(() => {
    setTicking(true)
    onStart?.()
  }, [onStart])

  const pause = useCallback(() => {
    setTicking(false)
  }, [timeLeft])

  const reset = useCallback(() => {
    setTicking(false)
    onReset?.()
  }, [onReset])

  return {
    start,
    pause,
    reset,
    ticking,
    timeLeft,
  }
}

export { useTimer }
