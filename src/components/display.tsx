import { Container, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { State } from "../store/state"
import { toMinutesAndSeconds, toUpperFirst } from "../utils"

type Props = {
  timeLeft: number
}

const Display: React.FC<Props> = ({ timeLeft }) => {
  const period = useSelector((state: State) => state.currentPeriod)

  const [minutes, seconds] = toMinutesAndSeconds(timeLeft)

  return (
    <Container>
      <Typography id="timer-label" variant="h4">
        {toUpperFirst(period)}
      </Typography>
      <Typography id="time-left" variant="h4">
        {minutes}:{seconds}
      </Typography>
    </Container>
  )
}

export { Display }
