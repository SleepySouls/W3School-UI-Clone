import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, ArrowRight, Box, Lock, Layers } from 'lucide-react'

export default function JavaScriptFunctionsPage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">JavaScript Functions</h1>
        <p className="text-xl text-muted-foreground">
          Functions are one of the fundamental building blocks in JavaScript. A function is a reusable block of code designed to perform a particular task.
        </p>
      </div>
      
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Defining Functions</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">There are several ways to define functions in JavaScript:</p>
            <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4">
              <pre><code>{`// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function Expression
const greet = function(name) {
  return "Hello, " + name + "!";
};

// Arrow Function (ES6+)
const greet = (name) => {
  return "Hello, " + name + "!";
};

// Shorthand Arrow Function (for single expressions)
const greet = name => "Hello, " + name + "!";`}</code></pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Function Parameters</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">Functions can take parameters, which are values you can pass to the function to use in its code:</p>
            <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4">
              <pre><code>{`function add(a, b) {
  return a + b;
}

console.log(add(5, 3));  // Output: 8

// Default parameters (ES6+)
function greet(name = "Guest") {
  return "Hello, " + name + "!";
}

console.log(greet());  // Output: Hello, Guest!
console.log(greet("John"));  // Output: Hello, John!`}</code></pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Return Statement</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">The <code className="bg-muted/50 px-1 rounded">return</code> statement ends function execution and specifies the value to be returned:</p>
            <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4">
              <pre><code>{`function square(number) {
  return number * number;
}

let result = square(5);
console.log(result);  // Output: 25`}</code></pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Function Scope</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">Variables defined inside a function are not accessible from outside the function:</p>
            <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4">
              <pre><code>{`function myFunction() {
  let carName = "Toyota";
  console.log(carName);  // This will work
}

myFunction();
// console.log(carName);  // This would cause an error`}</code></pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Higher-Order Functions</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions:</p>
            <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4">
              <pre><code>{`function operateOnNumbers(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(operateOnNumbers(5, 3, add));  // Output: 8
console.log(operateOnNumbers(5, 3, multiply));  // Output: 15`}</code></pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <p className="text-lg text-muted-foreground">
        Functions are a core concept in JavaScript. They allow you to structure your code into reusable, modular pieces. As you continue learning JavaScript, you'll discover more advanced function concepts like closures, callbacks, and promises.
      </p>
    </div>
  )
}

