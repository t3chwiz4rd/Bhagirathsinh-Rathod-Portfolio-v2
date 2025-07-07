"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Toggle } from "@/components/ui/toggle"
import { useEffect } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"
  
  useEffect(()=>{
    console.log(isDark)
  },[isDark])
  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Toggle
      aria-label="Toggle theme"
      pressed={isDark}
      onPressedChange={handleToggle}
      className="rounded-full bg-background/0"
    >
      {isDark ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Toggle>
  )
}
