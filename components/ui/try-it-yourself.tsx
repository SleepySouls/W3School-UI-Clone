"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export function TryItYourself() {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to UIT W3Clone</h1>
    <p>This is a sample HTML page.</p>
</body>
</html>`)
  const [output, setOutput] = useState('')

  useEffect(() => {
    setOutput(code)
  }, [code])

  const handleRunCode = () => {
    setOutput(code)
  }

  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-[400px] max-w-full rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full flex-col">
          <div className="flex-1 p-4">
            <textarea
              className="h-full w-full resize-none rounded-md border p-2 font-mono"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="border-t bg-muted p-2">
            <Button onClick={handleRunCode}>Run Code</Button>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="h-full overflow-auto bg-white p-4">
          <iframe
            title="Output"
            srcDoc={output}
            className="h-full w-full border-none"
          />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

