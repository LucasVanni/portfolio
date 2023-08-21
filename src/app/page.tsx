"use client";

import { Background } from "@/app/stars";

export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Background />
      </div>

      <div className="relative z-10 flex justify-center items-center w-full h-full">
        <div
          style={{ backgroundColor: "rgba(119, 140, 153, 0.3)" }}
          className="rounded-md p-5"
        >
          <h1 className="text-[50px]">Coming soon...</h1>
        </div>
      </div>
    </div>
  );
}
