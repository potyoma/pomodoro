import { Button, Container } from "@mui/material"
import { PauseIcon, PlayIcon, ResetIcon } from "@radix-ui/react-icons"

type Props = {
  onPause: () => void
  onReset: () => void
}

const SessionControls: React.FC<Props> = ({ onPause, onReset }) => (
  <Container>
    <Button id="start_stop" onClick={onPause}>
      <PlayIcon />
      <PauseIcon />
    </Button>
    <Button id="reset" onClick={onReset}>
      <ResetIcon />
    </Button>
  </Container>
)

export { SessionControls }
