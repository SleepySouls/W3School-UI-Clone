import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const objectMethods = [
  { method: "Object.create()", description: "Creates a new object with the specified prototype object and properties" },
  { method: "Object.keys()", description: "Returns an array of a given object's own enumerable property names" },
  { method: "Object.values()", description: "Returns an array of a given object's own enumerable property values" },
  { method: "Object.entries()", description: "Returns an array of a given object's own enumerable string-keyed property [key, value] pairs" },
  { method: "Object.assign()", description: "Copies the values of all enumerable own properties from one or more source objects to a target object" },
  { method: "Object.freeze()", description: "Freezes an object: other code can't delete or change any properties" },
  { method: "Object.seal()", description: "Prevents new properties from being added to an object and marks all existing properties as non-configurable" },
]

const objectProperties = [
  { property: "constructor", description: "Returns the function that created the object's prototype" },
  { property: "prototype", description: "Allows you to add properties and methods to an object" },
  { property: "__proto__", description: "Points to the object which was used as prototype when the object was instantiated" },
]

export default function JavaScriptObjectReferencePage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">JavaScript Object Reference</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive guide to JavaScript objects, their properties, and methods.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What are JavaScript Objects?</CardTitle>
          <CardDescription>
            Objects are one of the fundamental data types in JavaScript, used to store collections of data and more complex entities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            In JavaScript, objects are dynamic collections of properties. Each property is either a named or numbered value,
            and can contain primitive data types, other objects, or functions. Objects are commonly used to represent
            structured data and can be created using object literals, constructors, or the Object.create() method.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Object Methods and Properties</CardTitle>
          <CardDescription>
            Here's a reference of commonly used object methods and properties in JavaScript.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="methods">
            <TabsList>
              <TabsTrigger value="methods">Methods</TabsTrigger>
              <TabsTrigger value="properties">Properties</TabsTrigger>
            </TabsList>
            <TabsContent value="methods">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Method</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {objectMethods.map((method) => (
                    <TableRow key={method.method}>
                      <TableCell className="font-mono">{method.method}</TableCell>
                      <TableCell>{method.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="properties">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {objectProperties.map((prop) => (
                    <TableRow key={prop.property}>
                      <TableCell className="font-mono">{prop.property}</TableCell>
                      <TableCell>{prop.description}</TableCell>
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
          <CardTitle>JavaScript Object Examples</CardTitle>
          <CardDescription>
            Examples of how to work with JavaScript objects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`// Creating an object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe

// Calling an object method
console.log(person.fullName()); // Output: John Doe

// Adding a new property
person.email = "john@example.com";

// Object.keys() example
console.log(Object.keys(person)); // Output: ["firstName", "lastName", "age", "fullName", "email"]

// Object.values() example
console.log(Object.values(person)); // Output: ["John", "Doe", 30, [Function: fullName], "john@example.com"]

// Object.entries() example
console.log(Object.entries(person));
// Output: [["firstName", "John"], ["lastName", "Doe"], ["age", 30], ["fullName", [Function: fullName]], ["email", "john@example.com"]]

// Object.assign() example
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const result = Object.assign(target, source);
console.log(result); // Output: { a: 1, b: 3, c: 4 }

// Object.freeze() example
const frozenObj = Object.freeze({ prop: 42 });
frozenObj.prop = 33; // Throws an error in strict mode
console.log(frozenObj.prop); // Output: 42`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}

