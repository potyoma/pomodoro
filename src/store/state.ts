import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PeriodType } from "../entities/period"

export interface State {
  breakLength: number
  sessionLength: number
  currentPeriod: PeriodType | undefined
  time: number
}

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  currentPeriod: PeriodType.Session,
  time: 25,
} as State

const slice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    increment: (state, { payload: type }: PayloadAction<PeriodType>) => {
      switch (type) {
        case PeriodType.Break:
          return { ...state, breakLength: state.breakLength + 1 }
        case PeriodType.Session:
          return { ...state, sessionLength: state.sessionLength + 1 }
      }
    },
    decrement: (state, { payload: type }: PayloadAction<PeriodType>) => {
      switch (type) {
        case PeriodType.Break:
          return { ...state, breakLength: state.breakLength - 1 }
        case PeriodType.Session:
          return { ...state, sessionLength: state.sessionLength - 1 }
      }
    },
    startCount: (state, { payload: type }: PayloadAction<PeriodType>) => {
      state.currentPeriod = type
    },
    reset: (_) => initialState,
  },
})

export const reducer = slice.reducer
export const { increment, decrement, startCount } = slice.actions
