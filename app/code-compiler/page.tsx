"use client"

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, XCircle } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const CodeEditor = dynamic(
  () => import('@uiw/react-textarea-code-editor').then((mod) => mod.default),
  { ssr: false }
)

type Language = 'html' | 'css' | 'javascript'

const initialCode: Record<Language, string> = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Example</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a sample HTML page.</p>
</body>
</html>`,
  css: `body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  color: #666;
  line-height: 1.6;
}`,
  javascript: `// Write your JavaScript code here
console.log('Hello, World!');

function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('John'));`
}

export default function CodeCompilerPage() {
  const [language, setLanguage] = useState<Language>('html')
  const [code, setCode] = useState(initialCode[language])
  const [output, setOutput] = useState('')
  const [error, setError] = useState<string | null>(null)

  const runCode = () => {
    setError(null)
    setOutput('')

    if (language === 'html' || language === 'css') {
      const iframe = document.createElement('iframe')
      iframe.style.width = '100%'
      iframe.style.height = '300px'
      iframe.style.border = 'none'

      const content = language === 'html' ? code : `
        <html>
          <head>
            <style>${code}</style>
          </head>
          <body>
            <h1>CSS Preview</h1>
            <p>This is a sample paragraph to demonstrate the CSS styles.</p>
          </body>
        </html>
      `

      setOutput(content)
      return
    }

    try {
      // Create a new function from the code and execute it
      const runnable = new Function(code)
      
      // Capture console.log output
      const originalLog = console.log
      let logs: string[] = []
      console.log = (...args) => {
        logs.push(args.map(arg => String(arg)).join(' '))
      }

      // Run the code
      runnable()

      // Restore original console.log
      console.log = originalLog

      // Set the output
      setOutput(logs.join('\n'))
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    }
  }

  return (
    <div className="container mx-auto py-10 space-y-10">
      <Card>
        <CardHeader>
          <CardTitle>Code Compiler</CardTitle>
          <CardDescription>
            Write your HTML, CSS, or JavaScript code in the editor below and click "Run Code" to see the output.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <Select
              value={language}
              onValueChange={(value: Language) => {
                setLanguage(value)
                setCode(initialCode[value])
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="html">HTML</SelectItem>
                <SelectItem value="css">CSS</SelectItem>
                <SelectItem value="javascript">JavaScript</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={runCode}>Run Code</Button>
          </div>
          <CodeEditor
            className="border rounded-md"
            value={code}
            language={language}
            placeholder={`Please enter ${language.toUpperCase()} code.`}
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              fontSize: 12,
              backgroundColor: "var(--background)",
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
          {output && (
            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Output</AlertTitle>
              <AlertDescription>
                {language === 'html' || language === 'css' ? (
                  <iframe
                    srcDoc={output}
                    title="Code Output"
                    width="100%"
                    height="300px"
                    className="border-none"
                  />
                ) : (
                  <pre className="whitespace-pre-wrap">{output}</pre>
                )}
              </AlertDescription>
            </Alert>
          )}
          {error && (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

