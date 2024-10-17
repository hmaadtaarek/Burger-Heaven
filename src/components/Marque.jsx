import React, { useEffect } from 'react'
import { gsap } from "gsap";

export default function Marque() {
    useEffect(() => {
        gsap.to(".scroll", {
          xPercent: -100,
          repeat: -1,
          duration: 6,
          ease: "linear",
        });
      }, []);
  return (
    <div className="whitespace-nowrap flex gap-10">
      
            <h2 className="uppercase scroll text-8xl text-[#D1EF53] text-center whitespace-nowrap">
              “ the best burger you’ve ever had{" "}“ the best burger you’ve ever had{" "}
            </h2>
            <h2 className="uppercase scroll text-8xl text-[#D1EF53] text-center whitespace-nowrap">
              “ the best burger you’ve ever had{" "}“ the best burger you’ve ever had{" "}
            </h2>
          </div>
  )
}
