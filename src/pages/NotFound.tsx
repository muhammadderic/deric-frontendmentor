import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center space-y-6">
        <h1 className="text-7xl font-bold text-gray-900">404</h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            Page not found
          </h2>

          <p className="text-gray-500">
            The page you are looking for does not exist.
          </p>
        </div>

        <Link
          to="/"
          className="inline-block rounded-md bg-gray-900 px-5 py-2 text-sm font-medium text-white
                     hover:bg-gray-800 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}