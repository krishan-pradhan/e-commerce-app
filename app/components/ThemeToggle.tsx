"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <>
    <div className="flex gap-5">
        <Button onClick={() => setTheme("light")}>light</Button>
        <Button onClick={() => setTheme("dark")}>dark</Button>
        <Button onClick={() => setTheme("system")}>system</Button>
    </div>
    </>
  )
}
