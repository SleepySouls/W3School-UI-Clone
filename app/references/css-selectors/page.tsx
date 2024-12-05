import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const basicSelectors = [
  { selector: "element", description: "Selects all elements with the given tag name" },
  { selector: ".class", description: "Selects all elements with the given class" },
  { selector: "#id", description: "Selects the element with the given id" },
  { selector: "*", description: "Selects all elements" },
  { selector: "selector1, selector2", description: "Selects all elements that match either selector1 or selector2" },
]

const combinatorSelectors = [
  { selector: "selector1 selector2", description: "Selects all selector2 elements that are descendants of selector1" },
  { selector: "selector1 > selector2", description: "Selects all selector2 elements that are direct children of selector1" },
  { selector: "selector1 + selector2", description: "Selects the first selector2 element that comes immediately after selector1" },
  { selector: "selector1 ~ selector2", description: "Selects all selector2 elements that come after selector1" },
]

const attributeSelectors = [
  { selector: "[attribute]", description: "Selects elements with the specified attribute" },
  { selector: "[attribute='value']", description: "Selects elements with the specified attribute and value" },
  { selector: "[attribute~='value']", description: "Selects elements with an attribute value containing a specified word" },
  { selector: "[attribute^='value']", description: "Selects elements with an attribute value starting with a specified value" },
  { selector: "[attribute$='value']", description: "Selects elements with an attribute value ending with a specified value" },
  { selector: "[attribute*='value']", description: "Selects elements with an attribute value containing a specified value" },
]

const pseudoSelectors = [
  { selector: ":hover", description: "Selects elements when the mouse hovers over them" },
  { selector: ":active", description: "Selects elements when they are being activated (e.g., clicked)" },
  { selector: ":focus", description: "Selects elements when they have focus" },
  { selector: ":first-child", description: "Selects elements that are the first child of their parent" },
  { selector: ":last-child", description: "Selects elements that are the last child of their parent" },
  { selector: ":nth-child(n)", description: "Selects elements based on their position among siblings" },
  { selector: "::before", description: "Inserts content before the content of an element" },
  { selector: "::after", description: "Inserts content after the content of an element" },
]

export default function CSSSelectorReferencePage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">CSS Selector Reference</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive guide to CSS selectors and their usage.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What are CSS Selectors?</CardTitle>
          <CardDescription>
            CSS selectors are patterns used to select and style HTML elements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Selectors are a fundamental part of CSS. They allow you to target specific HTML elements or groups of elements
            for styling. Selectors can be based on element names, classes, IDs, attributes, and more. Understanding selectors
            is crucial for effective CSS styling and layout control.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Types of CSS Selectors</CardTitle>
          <CardDescription>
            Here's a reference of commonly used CSS selectors categorized by their type.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="basic">
            <TabsList>
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="combinator">Combinator</TabsTrigger>
              <TabsTrigger value="attribute">Attribute</TabsTrigger>
              <TabsTrigger value="pseudo">Pseudo</TabsTrigger>
            </TabsList>
            <TabsContent value="basic">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Selector</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {basicSelectors.map((sel) => (
                    <TableRow key={sel.selector}>
                      <TableCell className="font-mono">{sel.selector}</TableCell>
                      <TableCell>{sel.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="combinator">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Selector</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {combinatorSelectors.map((sel) => (
                    <TableRow key={sel.selector}>
                      <TableCell className="font-mono">{sel.selector}</TableCell>
                      <TableCell>{sel.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="attribute">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Selector</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attributeSelectors.map((sel) => (
                    <TableRow key={sel.selector}>
                      <TableCell className="font-mono">{sel.selector}</TableCell>
                      <TableCell>{sel.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="pseudo">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Selector</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pseudoSelectors.map((sel) => (
                    <TableRow key={sel.selector}>
                      <TableCell className="font-mono">{sel.selector}</TableCell>
                      <TableCell>{sel.description}</TableCell>
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
          <CardTitle>CSS Selector Examples</CardTitle>
          <CardDescription>
            Examples of how to use various CSS selectors in different contexts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="basic">
            <TabsList>
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="combinator">Combinator</TabsTrigger>
              <TabsTrigger value="attribute">Attribute</TabsTrigger>
              <TabsTrigger value="pseudo">Pseudo</TabsTrigger>
            </TabsList>
            <TabsContent value="basic">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`/* Element Selector */
p {
  color: blue;
}

/* Class Selector */
.highlight {
  background-color: yellow;
}

/* ID Selector */
#header {
  font-size: 24px;
}

/* Universal Selector */
* {
  margin: 0;
  padding: 0;
}

/* Multiple Selectors */
h1, h2, h3 {
  font-family: Arial, sans-serif;
}`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="combinator">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`/* Descendant Selector */
div p {
  margin-bottom: 10px;
}

/* Child Selector */
ul > li {
  list-style-type: square;
}

/* Adjacent Sibling Selector */
h1 + p {
  font-weight: bold;
}

/* General Sibling Selector */
h1 ~ p {
  color: gray;
}`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="attribute">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`/* Attribute Selector */
[type] {
  border: 1px solid black;
}

/* Attribute Value Selector */
[type="text"] {
  padding: 5px;
}

/* Attribute Contains Word Selector */
[class~="btn"] {
  cursor: pointer;
}

/* Attribute Starts With Selector */
[class^="col-"] {
  float: left;
}

/* Attribute Ends With Selector */
[href$=".pdf"] {
  background-image: url('pdf-icon.png');
}

/* Attribute Contains Selector */
[title*="hello"] {
  text-decoration: underline;
}`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="pseudo">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`/* Pseudo-class Selectors */
a:hover {
  color: red;
}

button:active {
  background-color: #ddd;
}

input:focus {
  outline: 2px solid blue;
}

li:first-child {
  font-weight: bold;
}

li:last-child {
  border-bottom: none;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Pseudo-element Selectors */
p::first-line {
  font-variant: small-caps;
}

p::first-letter {
  font-size: 200%;
  float: left;
}

.tooltip::before {
  content: "Info: ";
  font-weight: bold;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

