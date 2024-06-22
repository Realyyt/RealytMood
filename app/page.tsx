import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen text-white bg-black ">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">Best Journal App </h1>
        <p className="text-2xl text-white/60 mb-4">
          Realyt helping Journal your mood
        </p>
        <div>
          <Link href="/journal">
              <button className="bg-blue-400 rounded-lg px-4 py-2 text-lg">
                Get Started
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
