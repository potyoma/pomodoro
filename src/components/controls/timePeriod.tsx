import { Typography } from "@mui/material"
import { Container } from "@mui/system"
import { PeriodType } from "../../entities/period"

type Props = {
  type: PeriodType
}

const TimePeriod: React.FC<Props> = ({ type }) => {
  const toUpperFirst = (word: string) =>
    word.at(0)?.toUpperCase() + word.slice(1)

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" id={`${type}-label`}>{toUpperFirst(type)} Length</Typography>
      
    </Container>
  )
}

export { TimePeriod }
