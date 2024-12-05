"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, XCircle } from 'lucide-react'
import { ProgressTracker } from "@/components/ui/progress-tracker"

const TOTAL_STEPS = 4

export default function HTMLFormsExercisePage() {
  const [userCode, setUserCode] = useState('')
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null)
  const [step, setStep] = useState(1)

  const exercises = [
    {
      instruction: "Create a <form> element with action='/submit' and method='post' attributes.",
      solution: `<form action="/submit" method="post">
</form>`
    },
    {
      instruction: "Add a text input for name with a label.",
      solution: `<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
</form>`
    },
    {
      instruction: "Add an email input for email address with a label.",
      solution: `<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
</form>`
    },
    {
      instruction: "Add a textarea for a message with a label, and a submit button.",
      solution: `<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea>
  
  <button type="submit">Send</button>
</form>`
    }
  ]

  useEffect(() => {
    const savedStep = localStorage.getItem('html_forms_step')
    if (savedStep) {
      setStep(parseInt(savedStep, 10))
    }
  }, [])

  const checkForm = () => {
    const normalizedUserCode = userCode.replace(/\s+/g, ' ').trim().toLowerCase()
    const normalizedCorrectForm = exercises[step - 1].solution.replace(/\s+/g, ' ').trim().toLowerCase()
    const isCorrect = normalizedUserCode === normalizedCorrectForm
    setResult(isCorrect ? 'correct' : 'incorrect')

    if (isCorrect && step < TOTAL_STEPS) {
      setStep(prevStep => {
        const newStep = prevStep + 1
        localStorage.setItem('html_forms_step', newStep.toString())
        return newStep
      })
    }
  }

  return (
    <div className="container mx-auto py-10 space-y-10">
      <Card>
        <CardHeader>
          <CardTitle>HTML Forms Exercise</CardTitle>
          <CardDescription>
            Complete the following steps to create an HTML form.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ProgressTracker exerciseId="html_forms" totalSteps={TOTAL_STEPS} />
          <Alert>
            <AlertTitle>Step {step}</AlertTitle>
            <AlertDescription>{exercises[step - 1].instruction}</AlertDescription>
          </Alert>
          <Textarea
            placeholder="Type your HTML form here..."
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className="min-h-[300px] font-mono"
          />
          <Button onClick={checkForm}>Check Form</Button>
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
                  : "The form is not quite right. Make sure you have all the required elements and attributes."}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

