"use client";
import React, { useEffect, useState } from "react";

const createFireFly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const FireFliesBG = () => {
  const [fireFlies, setFireFlies] = useState([]);

  useEffect(() => {
    const addFireflyPeriodically = () => {
      const newFirefly = createFireFly();
      setFireFlies(currentFireflies => 
      [
        ...currentFireflies.slice(-14),     //this will ensure that array stays within the 10-15 elements by removing the oldest, this will keep the firefly count upto 15 elements
        newFirefly
      ]
      );
    };

    const interval = setInterval(addFireflyPeriodically, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {fireFlies.map((firefly) => {
            return (
                <div
                    key={firefly.id}
                    className="absolute rounded-full w-[10px] h-[10px] bg-firefly-radial"
                    style={{
                        top: firefly.top,
                        left: firefly.left,
                        animation: `move ${firefly.animationDuration} infinite alternate`
                    }}
                ></div>
            )
        })}
    </div>
  );
};

export default FireFliesBG;
