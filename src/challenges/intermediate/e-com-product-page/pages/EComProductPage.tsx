import {
  Navbar,
  Product
} from "@challenges/intermediate/e-com-product-page/components";
import { ProductContextProvider } from "@challenges/intermediate/e-com-product-page/context";
import {
  BackButton,
  MDericAttribution
} from "@shared/components";

function EComProductPage() {
  return (
    <ProductContextProvider>
      <div className="min-h-screen flex flex-col justify-between bg-gray-100 font-sans p-4">
        <div>
          <BackButton to="/" />
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <Navbar />
          <Product />
        </div>

        {/* Attribution */}
        <MDericAttribution />
      </div>
    </ProductContextProvider>
  );
}

export default EComProductPage;
