import { Container } from "@mui/material"
import { PeriodType } from "../entities/period"
import { TimePeriod } from "./controls/timePeriod"

const ControlPanel: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <TimePeriod type={PeriodType.Break} />
      <TimePeriod type={PeriodType.Session} />
    </Container>
  )
}

export { ControlPanel }
