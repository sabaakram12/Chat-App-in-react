import React, { useState, useEffect } from "react";

const EventCountdownTimer = () => {
  const eventDate = new Date("2024-12-31T00:00:00"); // Set your event date and time here

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="mx-2 text-2xl border-black border-2 font-bold">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center border-black border-4 h-screen bg-gray-300">
      <h1 className="text-3xl font-bold mb-6">Event Countdown Timer</h1>
      {timerComponents.length ? (
        <div className="text-3xl text-blue-600 flex">{timerComponents}</div>
      ) : (
        <div className="text-3xl text-green-500">The event has started!</div>
      )}
    </div>
  );
};

export default EventCountdownTimer;
