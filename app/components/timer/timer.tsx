"use client";
import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className="text-8xl drop-shadow-lg">{time.toLocaleTimeString()}</p>
    </div>
  );
}
