import { createSlice } from "@reduxjs/toolkit"
import { PeriodType } from "../entities/period"

export interface State {
  breakLength: number
  sessionLength: number
  currentPeriod: PeriodType
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
    increment: (state, { type }) => {
      switch (type) {
        case PeriodType.Break:
          return { ...state, breakLength: state.breakLength - 1 }
        case PeriodType.Session:
          return { ...state, breakLength: state.breakLength + 1 }
      }
    },
  },
})
