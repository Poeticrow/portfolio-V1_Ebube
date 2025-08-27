"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Menu = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      className,
    )}
    {...props}
  />
))
Menu.displayName = "Menu"

export { Menu }
