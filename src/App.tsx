import { RouterProvider } from 'react-router-dom'

import {GlobalState} from "./global/GlobalState"
import { mainRoute } from './Router/MainRouter'

const App = () => {
  return (
    <div>
      <GlobalState>
      <RouterProvider router={mainRoute} />
      </GlobalState>
    </div>
  )
}

export default App