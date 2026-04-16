import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-800 text-white px-4">
      
      <div className="text-center max-w-lg">
        
       
        <h1 className="text-8xl font-extrabold tracking-widest text-white drop-shadow-lg">
          404
        </h1>

        
        <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto my-6 rounded-full"></div>

        
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Lost in space? 🚀
        </h2>

      
        <p className="text-gray-400 mb-8 leading-relaxed">
          The page you’re trying to reach doesn’t exist or might have been moved.  
          Don’t worry — even the best explorers take a wrong turn sometimes.
        </p>

        
        <Link href="/">
          <button className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium">
            🔙 Back to Home
          </button>
        </Link>

      
        <p className="mt-6 text-sm text-gray-500">
          Error code: 404 | Page not found
        </p>
      </div>
    </div>
  );
}