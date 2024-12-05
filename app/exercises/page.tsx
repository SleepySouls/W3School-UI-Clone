"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { Progress } from "@/components/ui/progress"

interface ExerciseItem {
  title: string
  href: string
  totalSteps: number
}

interface ExerciseSectionProps {
  title: string
  items: ExerciseItem[]
  badge: string
}

export default function ExercisesPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Exercises</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Practice your web development skills with our interactive exercises. These hands-on challenges will help reinforce your understanding of HTML, CSS, and JavaScript concepts.
        </p>
      </section>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ExerciseSection 
          title="HTML Exercises" 
          items={[
            { title: "Basic HTML Structure", href: "/exercises/html-structures", totalSteps: 3 },
            { title: "HTML Forms", href: "/exercises/html-forms", totalSteps: 4 },
            { title: "HTML Tables", href: "/exercises/html-tables", totalSteps: 3 },
          ]}
          badge="Structure"
        />
        <ExerciseSection 
          title="CSS Exercises" 
          items={[
            { title: "CSS Selectors Practice", href: "#", totalSteps: 0 },
            { title: "Flexbox Layout Challenge", href: "#", totalSteps: 0 },
            { title: "Responsive Design Exercise", href: "#", totalSteps: 0 },
          ]}
          badge="Style"
        />
        <ExerciseSection 
          title="JavaScript Exercises" 
          items={[
            { title: "Basic JavaScript Operations", href: "#", totalSteps: 0 },
            { title: "DOM Manipulation Practice", href: "#", totalSteps: 0 },
            { title: "Asynchronous JavaScript Challenge", href: "#", totalSteps: 0 },
          ]}
          badge="Interactivity"
        />
      </div>
      
      <p className="text-lg text-muted-foreground text-center mt-12">
        Complete these exercises to test your knowledge and improve your coding skills. Remember, practice makes perfect!
      </p>
    </div>
  )
}

function ExerciseSection({ title, items, badge }: ExerciseSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <Badge variant="secondary">{badge}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map((item: ExerciseItem, index: number) => (
            <li key={index}>
              <Link 
                href={item.href} 
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
              >
                {item.title}
              </Link>
              {item.totalSteps > 0 && (
                <ExerciseProgress exerciseId={item.href.split('/').pop() || ''} totalSteps={item.totalSteps} />
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function ExerciseProgress({ exerciseId, totalSteps }: { exerciseId: string, totalSteps: number }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const savedProgress = localStorage.getItem(`exercise_${exerciseId}`)
    if (savedProgress) {
      setProgress(parseInt(savedProgress, 10))
    }
  }, [exerciseId])

  const progressPercentage = (progress / totalSteps) * 100

  return (
    <div className="mt-2">
      <Progress value={progressPercentage} className="w-full" />
      <p className="text-sm text-muted-foreground mt-1">
        Progress: {progress} / {totalSteps} steps completed
      </p>
    </div>
  )
}

