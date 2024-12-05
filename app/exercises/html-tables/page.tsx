"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, XCircle } from 'lucide-react'
import { ProgressTracker } from "@/components/ui/progress-tracker"

const TOTAL_STEPS = 3

export default function HTMLTablesExercisePage() {
  const [userCode, setUserCode] = useState('')
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null)
  const [step, setStep] = useState(1)

  const exercises = [
    {
      instruction: "Create a <table> element with a <thead> containing a row with 'Name', 'Age', and 'Country' headers.",
      solution: `<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Country</th>
    </tr>
  </thead>
</table>`
    },
    {
      instruction: "Add a <tbody> element with two rows of sample data.",
      solution: `<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>30</td>
      <td>USA</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>25</td>
      <td>Canada</td>
    </tr>
  </tbody>
</table>`
    },
    {
      instruction: "Add a third row of sample data to complete the table.",
      solution: `<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>30</td>
      <td>USA</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>25</td>
      <td>Canada</td>
    </tr>
    <tr>
      <td>Bob Johnson</td>
      <td>35</td>
      <td>UK</td>
    </tr>
  </tbody>
</table>`
    }
  ]

  useEffect(() => {
    const savedStep = localStorage.getItem('html_tables_step')
    if (savedStep) {
      setStep(parseInt(savedStep, 10))
    }
  }, [])

  const checkTable = () => {
    const normalizedUserCode = userCode.replace(/\s+/g, ' ').trim().toLowerCase()
    const normalizedCorrectTable = exercises[step - 1].solution.replace(/\s+/g, ' ').trim().toLowerCase()
    const isCorrect = normalizedUserCode === normalizedCorrectTable
    setResult(isCorrect ? 'correct' : 'incorrect')

    if (isCorrect && step < TOTAL_STEPS) {
      setStep(prevStep => {
        const newStep = prevStep + 1
        localStorage.setItem('html_tables_step', newStep.toString())
        return newStep
      })
    }
  }

  return (
    <div className="container mx-auto py-10 space-y-10">
      <Card>
        <CardHeader>
          <CardTitle>HTML Tables Exercise</CardTitle>
          <CardDescription>
            Complete the following steps to create an HTML table.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ProgressTracker exerciseId="html_tables" totalSteps={TOTAL_STEPS} />
          <Alert>
            <AlertTitle>Step {step}</AlertTitle>
            <AlertDescription>{exercises[step - 1].instruction}</AlertDescription>
          </Alert>
          <Textarea
            placeholder="Type your HTML table here..."
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            className="min-h-[300px] font-mono"
          />
          <Button onClick={checkTable}>Check Table</Button>
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
                  : "The table is not quite right. Make sure you have the correct structure and all the required elements."}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

