"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <>
    <Select onValueChange={(value: string)=> setTheme(value)} >
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light"  >Light</SelectItem>
        <SelectItem value="dark"   >Dark</SelectItem>
        <SelectItem value="system" >System</SelectItem>
      </SelectContent>
    </Select>
    </>
  )
}
