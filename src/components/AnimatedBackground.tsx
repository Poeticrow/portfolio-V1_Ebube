"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AnimatedBackground: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [rotation, setRotation] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = Date.now();
    let phase = 0;

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Slow rotation of entire pattern
      setRotation((prevRotation) => (prevRotation + deltaTime * 0.0005) % 360);

      phase += deltaTime * 0.0004; // Adjusted speed for ripple effect
      // const ripplePhase = Math.sin(phase) * 0.5 + 0.5; // 0 to 1

      if (svgRef.current) {
        const hexagons = svgRef.current.querySelectorAll("polygon");
        hexagons.forEach((hex, index) => {
          const delay = index * 0.02; // Staggering delay for ripple wave
          const opacity = Math.abs(Math.sin(phase - delay)); // Ripple effect

          // Individual movement per hexagon
          const rotateAmount = Math.sin(phase - delay) * 5; // Small rotation
          const translateX = Math.cos(phase - delay) * 2; // Small horizontal move
          const translateY = Math.sin(phase - delay) * 2; // Small vertical move

          (hex as SVGPolygonElement).setAttribute(
            "stroke-opacity",
            (opacity * 0.5).toString()
          );
          (hex as SVGPolygonElement).setAttribute(
            "transform",
            `rotate(${rotateAmount}) translate(${translateX}, ${translateY})`
          );
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Mouse movement for parallax effect
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    setMouseX(clientX / window.innerWidth - 0.5);
    setMouseY(clientY / window.innerHeight - 0.5);
  };

  return (
    <div
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      onMouseMove={handleMouseMove}
    >
      <motion.svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `rotate(${rotation}deg) translate(${mouseX * 10}px, ${mouseY * 10}px)`,
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hexagonPattern"
            x="0"
            y="0"
            width="10"
            height="17.32"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="5,0 10,2.88 10,8.66 5,11.54 0,8.66 0,2.88"
              fill="none"
              stroke="url(#hexagonGradient)"
              strokeWidth="0.3"
              strokeOpacity="0.5"
            />
          </pattern>

          <linearGradient
            id="hexagonGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#8B27DA" />
            <stop offset="50%" stopColor="#6033E0" />
            <stop offset="100%" stopColor="#1c1b24" />
          </linearGradient>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#hexagonPattern)"
          opacity="0.3"
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedBackground;
