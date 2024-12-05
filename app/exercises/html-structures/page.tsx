"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, XCircle } from 'lucide-react'
import { ProgressTracker } from "@/components/ui/progress-tracker"

const TOTAL_STEPS = 3

export default function HTMLStructureExercisePage() {
  const [userCode, setUserCode] = useState('')
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null)
  const [step, setStep] = useState(1)

  const exercises = [
    {
      instruction: "Create a basic HTML structure with <!DOCTYPE html>, <html>, <head>, and <body> tags.",
      solution: `<!DOCTYPE html>
<html>
<head>
</head>
<body>
</body>
</html>`
    },
    {
      instruction: "Add a <title> tag in the <head> with the content 'My Web Page'.",
      solution: `<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
</head>
<body>
</body>
</html>`
    },
    {
      instruction: "Add an <h1> tag with 'Welcome to My Web Page' and a <p> tag with 'This is a paragraph.' in the <body>.",
      solution: `<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
</head>
<body>
    <h1>Welcome to My Web Page</h1>
    <p>This is a paragraph.</p>
</body>
</html>`
    }
  ]

  useEffect(() => {
    const savedStep = localStorage.getItem('html_structure_step')
    if (savedStep) {
      setStep(parseInt(savedStep, 10))
    }
  }, [])

  const checkStructure = () => {
    const normalizedUserCode = userCode.replace(/\s+/g, ' ').trim().toLowerCase()
    const normalizedCorrectStructure = exercises[step - 1].solution.replace(/\s+/g, ' ').trim().toLowerCase()
    const isCorrect = normalizedUserCode === normalizedCorrectStructure
    setResult(isCorrect ? 'correct' : 'incorrect')

    if (isCorrect && step < TOTAL_STEPS) {
      setStep(prevStep => {
        const newStep = prevStep + 1
        localStorage.setItem('html_structure_step', newStep.toString())
        return newStep
      })
    }
  }

  return (
    <div className="container mx-auto py-10 space-y-10">
      <Card>
        <CardHeader>
          <CardTitle>HTML Structure Exercise</CardTitle>
          <CardDescription>
            Complete the following steps to create a basic HTML structure.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ProgressTracker exerciseId="html_structure" totalSteps={TOTAL_STEPS} />
          <Alert>
            <AlertTitle>Step {step}</AlertTitle>
            <AlertDescription>{exercises[step - 1].instruction}</AlertDescription>
          </Alert>
          <Textarea
            placeholder="Type your HTML here..."
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className="min-h-[300px] font-mono"
          />
          <Button onClick={checkStructure}>Check Structure</Button>
          {result && (
            <Alert variant={result === 'correct' ? 'default' : 'destructive'}>
              {result === 'correct' ? (
                <CheckCircle2 className="h-4 w-4" />
              ) : (
                <XCircle className="h-4 w-4" />
              )}
              <AlertTitle>{result === 'correct' ? 'Correct!' : 'Incorrect'}</AlertTitle>
              <AlertDescription>
                {result === 'correct'
                  ? step < TOTAL_STEPS
                    ? "Great job! Move on to the next step."
                    : "Congratulations! You've completed all steps."
                  : "The structure is not quite right. Try again and make sure you have all the required elements."}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

