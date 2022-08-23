import { forwardRef, Ref } from "react"
import { BEEP_URL } from "../constants"

const Sound = forwardRef((_, ref: Ref<HTMLAudioElement>) => (
  <audio ref={ref} id="beep" src={BEEP_URL} preload="auto" hidden />
))

export { Sound }
