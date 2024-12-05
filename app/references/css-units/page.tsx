import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const absoluteUnits = [
  { unit: "px", description: "Pixels (1px = 1/96th of 1in)" },
  { unit: "in", description: "Inches (1in = 96px = 2.54cm)" },
  { unit: "cm", description: "Centimeters" },
  { unit: "mm", description: "Millimeters" },
  { unit: "pt", description: "Points (1pt = 1/72 of 1in)" },
  { unit: "pc", description: "Picas (1pc = 12 pt)" },
]

const relativeUnits = [
  { unit: "%", description: "Percentage (relative to the parent element)" },
  { unit: "em", description: "Relative to the font-size of the element (2em means 2 times the size of the current font)" },
  { unit: "rem", description: "Relative to font-size of the root element" },
  { unit: "vw", description: "Relative to 1% of the width of the viewport" },
  { unit: "vh", description: "Relative to 1% of the height of the viewport" },
  { unit: "vmin", description: "Relative to 1% of viewport's smaller dimension" },
  { unit: "vmax", description: "Relative to 1% of viewport's larger dimension" },
  { unit: "ex", description: "Relative to the x-height of the current font (rarely used)" },
  { unit: "ch", description: "Relative to the width of the zero (0) character" },
]

export default function CSSUnitsReferencePage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">CSS Units Reference</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive guide to CSS units and their usage.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What are CSS Units?</CardTitle>
          <CardDescription>
            CSS units are used to express length values in properties such as width, margin, padding, font-size, etc.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            CSS units can be categorized into two types: absolute and relative. Absolute units are fixed and will appear
            as exactly that size. Relative units are relative to another length property and may vary based on the screen size
            or other factors. Choosing the right unit is crucial for creating responsive and accessible designs.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Types of CSS Units</CardTitle>
          <CardDescription>
            Here's a reference of commonly used CSS units categorized by their type.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="absolute">
            <TabsList>
              <TabsTrigger value="absolute">Absolute Units</TabsTrigger>
              <TabsTrigger value="relative">Relative Units</TabsTrigger>
            </TabsList>
            <TabsContent value="absolute">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Unit</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {absoluteUnits.map((unit) => (
                    <TableRow key={unit.unit}>
                      <TableCell className="font-mono">{unit.unit}</TableCell>
                      <TableCell>{unit.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="relative">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Unit</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {relativeUnits.map((unit) => (
                    <TableRow key={unit.unit}>
                      <TableCell className="font-mono">{unit.unit}</TableCell>
                      <TableCell>{unit.description}</TableCell>
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
          <CardTitle>CSS Unit Examples</CardTitle>
          <CardDescription>
            Examples of how to use various CSS units in different contexts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="absolute">
            <TabsList>
              <TabsTrigger value="absolute">Absolute Units</TabsTrigger>
              <TabsTrigger value="relative">Relative Units</TabsTrigger>
            </TabsList>
            <TabsContent value="absolute">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`/* Pixels */
.box {
  width: 200px;
  height: 100px;
  font-size: 16px;
}

/* Inches */
.page {
  width: 8.5in;
  height: 11in;
}

/* Centimeters */
.margin {
  margin: 1cm;
}

/* Millimeters */
.border {
  border-width: 2mm;
}

/* Points */
.small-text {
  font-size: 12pt;
}

/* Picas */
.indent {
  text-indent: 1pc;
}`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="relative">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`/* Percentage */
.container {
  width: 80%;
  margin: 0 auto;
}

/* Em */
.text {
  font-size: 1em;
  margin-bottom: 1.5em;
}

/* Rem */
html {
  font-size: 16px;
}
.large-text {
  font-size: 2rem; /* 32px */
}

/* Viewport units */
.hero {
  height: 100vh;
  width: 100vw;
}

.sidebar {
  width: 20vw;
}

/* Viewport min/max */
.responsive-element {
  font-size: 5vmin;
  padding: 2vmax;
}

/* Character units */
.input {
  width: 30ch;
}

.line-height {
  line-height: 1.5ex;
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

