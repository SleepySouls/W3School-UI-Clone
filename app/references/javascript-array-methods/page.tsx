import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const mutatingMethods = [
  { method: "push()", description: "Adds one or more elements to the end of an array and returns the new length" },
  { method: "pop()", description: "Removes the last element from an array and returns that element" },
  { method: "unshift()", description: "Adds one or more elements to the beginning of an array and returns the new length" },
  { method: "shift()", description: "Removes the first element from an array and returns that element" },
  { method: "splice()", description: "Changes the contents of an array by removing or replacing existing elements and/or adding new elements" },
  { method: "sort()", description: "Sorts the elements of an array in place and returns the sorted array" },
  { method: "reverse()", description: "Reverses the order of the elements in an array in place" },
]

const nonMutatingMethods = [
  { method: "concat()", description: "Returns a new array comprised of this array joined with other array(s) and/or value(s)" },
  { method: "slice()", description: "Returns a shallow copy of a portion of an array into a new array object" },
  { method: "map()", description: "Creates a new array with the results of calling a provided function on every element in this array" },
  { method: "filter()", description: "Creates a new array with all elements that pass the test implemented by the provided function" },
  { method: "reduce()", description: "Executes a reducer function on each element of the array, resulting in a single output value" },
  { method: "forEach()", description: "Executes a provided function once for each array element" },
  { method: "find()", description: "Returns the value of the first element in the array that satisfies the provided testing function" },
]

export default function JavaScriptArrayMethodsReferencePage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">JavaScript Array Methods Reference</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive guide to JavaScript array methods and their usage.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What are JavaScript Array Methods?</CardTitle>
          <CardDescription>
            Array methods are built-in functions that can be used to manipulate arrays in JavaScript.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            JavaScript provides a rich set of methods for working with arrays. These methods can be categorized into two main types:
            mutating methods, which modify the original array, and non-mutating methods, which return a new array or value without
            changing the original array. Understanding these methods is crucial for effective array manipulation in JavaScript.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Array Methods</CardTitle>
          <CardDescription>
            Here's a reference of commonly used array methods in JavaScript.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="mutating">
            <TabsList>
              <TabsTrigger value="mutating">Mutating Methods</TabsTrigger>
              <TabsTrigger value="nonMutating">Non-mutating Methods</TabsTrigger>
            </TabsList>
            <TabsContent value="mutating">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Method</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mutatingMethods.map((method) => (
                    <TableRow key={method.method}>
                      <TableCell className="font-mono">{method.method}</TableCell>
                      <TableCell>{method.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="nonMutating">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Method</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {nonMutatingMethods.map((method) => (
                    <TableRow key={method.method}>
                      <TableCell className="font-mono">{method.method}</TableCell>
                      <TableCell>{method.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>JavaScript Array Methods Examples</CardTitle>
          <CardDescription>
            Examples of how to use various JavaScript array methods.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`// Sample array
let fruits = ['apple', 'banana', 'orange'];

// push() - Adds element to the end
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// pop() - Removes last element
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: 'grape'
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// unshift() - Adds element to the beginning
fruits.unshift('mango');
console.log(fruits); // Output: ['mango', 'apple', 'banana', 'orange']

// shift() - Removes first element
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: 'mango'
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// splice() - Changes the contents of an array
fruits.splice(1, 1, 'kiwi', 'melon');
console.log(fruits); // Output: ['apple', 'kiwi', 'melon', 'orange']

// sort() - Sorts the array
fruits.sort();
console.log(fruits); // Output: ['apple', 'kiwi', 'melon', 'orange']

// reverse() - Reverses the array
fruits.reverse();
console.log(fruits); // Output: ['orange', 'melon', 'kiwi', 'apple']

// concat() - Joins arrays
let moreFruits = ['grape', 'pear'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['orange', 'melon', 'kiwi', 'apple', 'grape', 'pear']

// slice() - Returns a portion of an array
let someFruits = allFruits.slice(1, 4);
console.log(someFruits); // Output: ['melon', 'kiwi', 'apple']

// map() - Creates a new array with the results of calling a function
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // Output: ['ORANGE', 'MELON', 'KIWI', 'APPLE']

// filter() - Creates a new array with elements that pass the test
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // Output: ['orange']

// reduce() - Reduces an array to a single value
let fruitLengths = fruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(fruitLengths); // Output: 21

// forEach() - Executes a function for each array element
fruits.forEach(fruit => console.log(fruit));
// Output:
// orange
// melon
// kiwi
// apple

// find() - Returns the first element that satisfies the condition
let found = fruits.find(fruit => fruit.startsWith('m'));
console.log(found); // Output: 'melon'`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}

