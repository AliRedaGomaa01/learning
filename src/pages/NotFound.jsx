import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-2 text-lg text-gray-600">Page Not Found</p>
      <Link to="/" className="mt-4 text-blue-500 hover:underline">
        Go Back Home
      </Link>
    </div>
  );
}