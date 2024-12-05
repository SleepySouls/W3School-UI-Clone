"use client"

import { useEffect, useState } from 'react'
import { Progress } from "@/components/ui/progress"

interface ProgressTrackerProps {
  exerciseId: string
  totalSteps: number
}

export function ProgressTracker({ exerciseId, totalSteps }: ProgressTrackerProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const savedProgress = localStorage.getItem(`exercise_${exerciseId}`)
    if (savedProgress) {
      setProgress(parseInt(savedProgress, 10))
    }
  }, [exerciseId])

  useEffect(() => {
    localStorage.setItem(`exercise_${exerciseId}`, progress.toString())
  }, [exerciseId, progress])

  const progressPercentage = (progress / totalSteps) * 100

  return (
    <div className="w-full">
      <Progress value={progressPercentage} className="w-full" />
      <p className="text-sm text-muted-foreground mt-2">
        Progress: {progress} / {totalSteps} steps completed
      </p>
    </div>
  )
}

