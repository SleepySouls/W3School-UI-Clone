import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Box, Globe, Lock, Layers } from 'lucide-react'

export default function JavaScriptVariablesPage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">JavaScript Variables</h1>
        <p className="text-xl text-muted-foreground">
          Variables are containers for storing data values. In JavaScript, there are three ways to declare a variable: var, let, and const.
        </p>
      </div>
      
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Declaring Variables</h2>
        <Card>
          <CardContent className="p-6">
            <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4">
              <pre><code>{`// Using var (function-scoped)
var x = 5;

// Using let (block-scoped)
let y = 10;

// Using const (block-scoped, cannot be reassigned)
const z = 15;`}</code></pre>
            </div>
            <p>It's generally recommended to use <code className="bg-muted/50 px-1 rounded">let</code> and <code className="bg-muted/50 px-1 rounded">const</code> in modern JavaScript.</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Variable Scope</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                Global Scope
              </CardTitle>
            </CardHeader>
            <CardContent>
              Variables declared outside any function have global scope.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Box className="mr-2 h-5 w-5" />
                Function Scope
              </CardTitle>
            </CardHeader>
            <CardContent>
              Variables declared within a function are only accessible within that function.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="mr-2 h-5 w-5" />
                Block Scope
              </CardTitle>
            </CardHeader>
            <CardContent>
              Variables declared with let and const are block-scoped (only accessible within the nearest set of curly braces).
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Data Types</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">JavaScript has several data types:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Number: Both integer and floating-point numbers</li>
              <li>String: Textual data</li>
              <li>Boolean: true or false</li>
              <li>Undefined: A variable without a value</li>
              <li>Null: An intentional absence of any object value</li>
              <li>Object: Complex data structures</li>
              <li>Symbol: Unique identifiers</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Variable Naming Rules</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>Names can contain letters, digits, underscores, and dollar signs</li>
              <li>Names must begin with a letter, $ or _</li>
              <li>Names are case sensitive (y and Y are different variables)</li>
              <li>Reserved words (like JavaScript keywords) cannot be used as names</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Example: Working with Variables</h2>
        <Card>
          <CardContent className="p-6">
            <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4">
              <pre><code>{`let name = "John";
let age = 30;
let isStudent = false;

console.log(name);  // Output: John
console.log(age);   // Output: 30
console.log(isStudent);  // Output: false

// Reassigning variables
name = "Jane";
age = age + 1;

console.log(name);  // Output: Jane
console.log(age);   // Output: 31

// Constants cannot be reassigned
const PI = 3.14159;
// PI = 3.14;  // This would cause an error`}</code></pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <p className="text-lg text-muted-foreground">
        Understanding variables is crucial in JavaScript programming. They allow you to store and manipulate data in your applications. As you continue learning JavaScript, you'll see how variables are used in more complex scenarios and data structures.
      </p>
    </div>
  )
}

