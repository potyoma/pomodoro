import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { ControlPanel } from "./components/controlPanel"
import { reducer } from "./store/state"

const store = configureStore({ reducer })

function App() {
  return (
    <Provider store={store}>
      <ControlPanel />
    </Provider>
  )
}

export default App
