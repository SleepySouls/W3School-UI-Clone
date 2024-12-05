import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const stringMethods = [
  { method: "charAt()", description: "Returns the character at the specified index" },
  { method: "concat()", description: "Joins two or more strings" },
  { method: "includes()", description: "Checks if a string contains the specified string/characters" },
  { method: "indexOf()", description: "Returns the position of the first found occurrence of a specified value in a string" },
  { method: "lastIndexOf()", description: "Returns the position of the last found occurrence of a specified value in a string" },
  { method: "match()", description: "Searches a string for a match against a regular expression, and returns the matches" },
  { method: "replace()", description: "Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced" },
  { method: "slice()", description: "Extracts a part of a string and returns a new string" },
  { method: "split()", description: "Splits a string into an array of substrings" },
  { method: "toLowerCase()", description: "Converts a string to lowercase letters" },
  { method: "toUpperCase()", description: "Converts a string to uppercase letters" },
  { method: "trim()", description: "Removes whitespace from both ends of a string" },
]

export default function JavaScriptStringMethodsReferencePage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">JavaScript String Methods Reference</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive guide to JavaScript string methods and their usage.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What are JavaScript String Methods?</CardTitle>
          <CardDescription>
            String methods are built-in functions that can be used to manipulate strings in JavaScript.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            JavaScript provides a rich set of methods for working with strings. These methods allow you to perform various
            operations such as searching, replacing, extracting, and transforming string content. Understanding these
            methods is essential for effective string manipulation in JavaScript.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>String Methods</CardTitle>
          <CardDescription>
            Here's a reference of commonly used string methods in JavaScript.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Method</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stringMethods.map((method) => (
                <TableRow key={method.method}>
                  <TableCell className="font-mono">{method.method}</TableCell>
                  <TableCell>{method.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>JavaScript String Methods Examples</CardTitle>
          <CardDescription>
            Examples of how to use various JavaScript string methods.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`// Sample string
let str = "Hello, World!";

// charAt()
console.log(str.charAt(0)); // Output: 'H'

// concat()
console.log(str.concat(" How are you?")); // Output: 'Hello, World! How are you?'

// includes()
console.log(str.includes("World")); // Output: true

// indexOf()
console.log(str.indexOf("o")); // Output: 4

// lastIndexOf()
console.log(str.lastIndexOf("o")); // Output: 7

// match()
console.log(str.match(/[A-Z]/g)); // Output: ['H', 'W']

// replace()
console.log(str.replace("World", "JavaScript")); // Output: 'Hello, JavaScript!'

// slice()
console.log(str.slice(0, 5)); // Output: 'Hello'

// split()
console.log(str.split(", ")); // Output: ['Hello', 'World!']

// toLowerCase()
console.log(str.toLowerCase()); // Output: 'hello, world!'

// toUpperCase()
console.log(str.toUpperCase()); // Output: 'HELLO, WORLD!'

// trim()
let paddedStr = "   Trim me   ";
console.log(paddedStr.trim()); // Output: 'Trim me'`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}

