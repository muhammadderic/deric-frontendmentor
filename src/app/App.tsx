import {
  Route,
  Routes
} from "react-router-dom"

import Home from "@pages/Home"
import NotFound from "@pages/NotFound"
import QRCode from "@challenges/newbie/qr-code-component/QRCode"
import AgeCalculator from "@challenges/junior/age-calculator/AgeCalculator"
import NewsHomepage from "@challenges/junior/news-homepage/NewsHomepage"
import EComProductPage from "@challenges/intermediate/e-com-product-page/pages/EComProductPage"
import UserCommentPage from "@challenges/intermediate/interactive-comments/pages/UserCommentPage"

// Newbie
import { HuddleSISContainerPage } from "@challenges/newbie/huddle-single-intro-section"

// Intermediate
import { CalcContainerPage } from "@challenges/intermediate/calculator"

// Advanced
import { MultiStepFormContainerPage } from "@challenges/advanced/multi-step-form"
import { RPSContainerPage } from "@challenges/advanced/rock-paper-scissors"
import { RESTCountriesContainerPage } from "@challenges/advanced/rest-countries-api"
import { MainContainerLayout } from "@shared/components/layouts/MainContainerLayout"
import { SinglePriceGrid } from "@challenges/newbie/single-price-grid"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Newbie Challenges */}
      <Route path="/newbie/huddle-sis" element={<HuddleSISContainerPage />} />

      {/* Junior Challenges */}

      {/* Intermediate Challenges */}
      <Route path="/inter/ecom-prod" element={<EComProductPage />} />
      <Route path="/inter/interactive-comments" element={<UserCommentPage />} />
      <Route path="/inter/calc" element={<CalcContainerPage />} />

      {/* Advanced Challenges */}
      <Route path="/adv/multi-step-form" element={<MultiStepFormContainerPage />} />
      <Route path="/adv/rps" element={<RPSContainerPage />} />
      <Route path="/adv/countries" element={<RESTCountriesContainerPage />} />

      <Route element={<MainContainerLayout />}>
        {/* Newbie Challenges */}
        <Route path="/newbie/qr-code" element={<QRCode />} />
        <Route path="/newbie/single-price-grid" element={<SinglePriceGrid />} />

        {/* Junior Challenges */}
        <Route path="/junior/age-calc" element={<AgeCalculator />} />
        <Route path="/junior/news-homepage" element={<NewsHomepage />} />
      </Route>

      {/* catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
