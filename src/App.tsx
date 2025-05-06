import {
  Route,
  Routes
} from "react-router-dom"

import Home from "@pages/Home"
import NotFound from "@pages/NotFound"
import QRCode from "@challenges/newbie/qr-code-component/QRCode"
import AgeCalculator from "@challenges/junior/age-calculator/AgeCalculator"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Newbie Challenges */}
      <Route path="/newbie/qr-code" element={<QRCode />} />

      {/* Junior Challenges */}
      <Route path="/junior/age-calc" element={<AgeCalculator />} />

      {/* catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
