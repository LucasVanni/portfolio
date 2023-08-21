"use client";

import { Background } from "@/app/stars";

export default function Home() {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Background />
      </div>

      <h1 className="relative z-10">AAAAAAAA</h1>
    </div>
  );
}
