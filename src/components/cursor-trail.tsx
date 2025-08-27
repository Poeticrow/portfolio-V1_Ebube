"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      <div className="w-5 h-5 bg-accent rounded-full opacity-60" />
    </motion.div>
  )
}
