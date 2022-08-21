import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PeriodType } from "../entities/period"

export interface State {
  break: number
  session: number
  currentPeriod: PeriodType
  time: number
  ticking: boolean
  pausedTime?: number
}

const initialState: State = {
  break: 5,
  session: 25,
  currentPeriod: PeriodType.Session,
  time: 25,
  ticking: false,
}

const slice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    increment: (state, { payload: type }: PayloadAction<PeriodType>) => {
      state[type]++
    },
    decrement: (state, { payload: type }: PayloadAction<PeriodType>) => {
      state[type] > 0 && state[type]--
    },
    switchPeriod: (state, { payload: type }: PayloadAction<PeriodType>) => {
      state.currentPeriod = type
    },
    pause: (state, { payload: pausedTime }: PayloadAction<number>) => {
      state.pausedTime = pausedTime
    },
    reset: (_) => initialState,
  },
})

export const reducer = slice.reducer
export const { increment, decrement, switchPeriod, pause, reset } =
  slice.actions
