"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative overflow-hidden group hover:bg-accent/50 transition-colors"
      >
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "dark" ? 180 : 0,
            scale: theme === "dark" ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-4 w-4" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "light" ? -180 : 0,
            scale: theme === "light" ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-4 w-4" />
        </motion.div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  )
}
