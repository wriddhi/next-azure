"use client";

import { useState } from "react";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Home() {
  const [time, setTime] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const startServerWait = async () => {
    setLoading(true);
    const res = await fetch(`/api/wait?time=${time * 1000}`);
    const data = await res.json();
    console.log(data);
    setLoading(false);
  };

  const startClientWait = async () => {
    setLoading(true);
    await wait(time * 1000);
    setLoading(false);
  }


  return (
    <main className="min-h-screen w-full grid place-items-center">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <input
            className="bg-white/10 outline-none border-none p-3 "
            type="number"
            name="number"
            id="number"
            value={time}
            onChange={(e) => {
              setTime(Number(e.target.value));
            }}
          />
          <button
            className="bg-white text-black p-4 rounded-md font-bold"
            onClick={startServerWait}
          >
            Wait for {time} seconds on server
          </button>
          <button
            className="bg-white text-black p-4 rounded-md font-bold"
            onClick={startClientWait}
          >
            Wait for {time} seconds on client
          </button>
        </>
      )}
    </main>
  );
}
