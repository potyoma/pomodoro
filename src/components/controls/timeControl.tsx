import { Typography } from "@mui/material"
import { Container } from "@mui/system"
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { PeriodType } from "../../entities/period"
import { decrement, increment, State } from "../../store/state"

type Props = {
  type: PeriodType
}

const TimeControl: React.FC<Props> = ({ type }) => {
  const dispatch = useDispatch()

  const value = useSelector((state: State) => state[`${type}Length`])

  const handleDecrement = () => dispatch(decrement(type))
  const handleIncrement = () => dispatch(increment(type))

  return (
    <Container maxWidth="sm">
      <ArrowDownIcon  id={`${type}-decrement`} onClick={handleDecrement} />
      <Typography id={`${type}-length`} variant="h4">
        {value}
      </Typography>
      <ArrowUpIcon id={`${type}-increment`} onClick={handleIncrement} />
    </Container>
  )
}

export { TimeControl }
