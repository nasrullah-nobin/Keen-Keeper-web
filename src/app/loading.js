export default async function Loading() {
    await new Promise((res) => setTimeout(res, 800));

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-linear-to-br from-white to-gray-100">

      
      <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>

     
      <h2 className="mt-4 text-xl font-semibold text-[#244D3F]">
        KeenKeeper
      </h2>

     
      <p className="text-gray-500 text-sm mt-1 animate-pulse">
        Preparing your experience...
      </p>

    </div>
  );
}