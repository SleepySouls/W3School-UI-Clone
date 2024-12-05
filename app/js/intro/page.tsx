import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Server, Zap } from 'lucide-react'

export default function JavaScriptIntroPage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Introduction to JavaScript</h1>
        <p className="text-xl text-muted-foreground">
          JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It's a language that is dynamic, weakly typed, prototype-based and multi-paradigm.
        </p>
      </div>
      
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">What is JavaScript?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                Web Language
              </CardTitle>
            </CardHeader>
            <CardContent>
              JavaScript is the programming language of the Web.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-5 w-5" />
                Dynamic Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              JavaScript can update and change both HTML and CSS.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5" />
                Data Manipulation
              </CardTitle>
            </CardHeader>
            <CardContent>
              JavaScript can calculate, manipulate and validate data.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Server className="mr-2 h-5 w-5" />
                Versatile
              </CardTitle>
            </CardHeader>
            <CardContent>
              JavaScript can be used for both client-side and server-side programming.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">JavaScript Syntax</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">Here's a simple example of JavaScript code:</p>
            <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4">
              <pre><code>{`// This is a comment
let greeting = "Hello, World!";
console.log(greeting);  // Outputs: Hello, World!

// A simple function
function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 3));  // Outputs: 8`}</code></pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">JavaScript Data Types</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Number", description: "For numeric values (e.g., 42 or 3.14)" },
            { name: "String", description: "For text (e.g., \"Hello, World!\")" },
            { name: "Boolean", description: "For true/false values" },
            { name: "Object", description: "For more complex data structures" },
            { name: "Array", description: "For lists of values" },
            { name: "Undefined", description: "For variables that have not been assigned a value" },
            { name: "Null", description: "For intentional non-values" },
          ].map((type, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {type.name}
                  <Badge variant="secondary">{type.name.toLowerCase()}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {type.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">JavaScript in HTML</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">JavaScript can be added to your HTML file in two ways:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Inline, using the <code className="bg-muted/50 px-1 rounded">&lt;script&gt;</code> tag in your HTML</li>
              <li>External, by linking to an external .js file</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <p className="text-lg text-muted-foreground">
        This is a basic introduction to JavaScript. As you progress, you'll learn more about functions, objects, DOM manipulation, and how to create interactive web applications.
      </p>
    </div>
  )
}

