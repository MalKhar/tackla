"use client";
import Image from "next/image";
import background from "../public/background.jpg";
import Background from "./components/background/background";
import Timer from "./components/timer/timer";
import Input from "./components/input/input";
export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Background />
          <div>
            <Timer />
            <Input />
          </div>
        </main>
      </div>
    </>
  );
}
