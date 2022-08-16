import { Container } from "@mui/system"
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons"
import { PeriodType } from "../../entities/period"

type Props = {
  type: PeriodType
  onDecrement: () => void
  onIncrement: () => void
}

const TimeControl: React.FC<Props> = ({ type, onDecrement, onIncrement }) => {
  return (
    <Container maxWidth="sm">
      <ArrowDownIcon onClick={onDecrement} />
      <ArrowUpIcon onClick={onIncrement} />
    </Container>
  )
}

export { TimeControl }
