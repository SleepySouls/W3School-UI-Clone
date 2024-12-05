import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const layoutProperties = [
  { property: "display", description: "Specifies how an element should be displayed" },
  { property: "position", description: "Specifies the type of positioning method used for an element" },
  { property: "float", description: "Specifies how an element should float" },
  { property: "clear", description: "Specifies what elements can float beside the cleared element and on which side" },
  { property: "z-index", description: "Specifies the stack order of an element" },
]

const boxModelProperties = [
  { property: "width", description: "Sets the width of an element" },
  { property: "height", description: "Sets the height of an element" },
  { property: "padding", description: "Sets the padding (space between content and border) of an element" },
  { property: "margin", description: "Sets the margin (space outside the border) of an element" },
  { property: "border", description: "Sets the border of an element" },
]

const textProperties = [
  { property: "color", description: "Sets the color of text" },
  { property: "font-family", description: "Specifies the font for text" },
  { property: "font-size", description: "Specifies the font size of text" },
  { property: "font-weight", description: "Specifies the weight of a font" },
  { property: "line-height", description: "Sets the line height" },
  { property: "text-align", description: "Specifies the horizontal alignment of text" },
  { property: "text-decoration", description: "Specifies the decoration added to text" },
]

const backgroundProperties = [
  { property: "background-color", description: "Specifies the background color of an element" },
  { property: "background-image", description: "Specifies one or more background images for an element" },
  { property: "background-repeat", description: "Specifies how background images should be repeated" },
  { property: "background-position", description: "Specifies the position of a background image" },
  { property: "background-size", description: "Specifies the size of the background images" },
]

export default function CSSPropertiesReferencePage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">CSS Properties Reference</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive guide to CSS properties and their usage.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What are CSS Properties?</CardTitle>
          <CardDescription>
            CSS properties are used to style HTML elements and control their appearance and layout.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            CSS properties are written in name-value pairs, separated by a colon. They are used within CSS rules to define
            styles for specific elements or groups of elements. Properties can control various aspects of an element's
            appearance, such as color, size, position, and more.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common CSS Properties</CardTitle>
          <CardDescription>
            Here's a reference of commonly used CSS properties categorized by their purpose.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="layout">
            <TabsList>
              <TabsTrigger value="layout">Layout</TabsTrigger>
              <TabsTrigger value="boxmodel">Box Model</TabsTrigger>
              <TabsTrigger value="text">Text</TabsTrigger>
              <TabsTrigger value="background">Background</TabsTrigger>
            </TabsList>
            <TabsContent value="layout">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {layoutProperties.map((prop) => (
                    <TableRow key={prop.property}>
                      <TableCell className="font-mono">{prop.property}</TableCell>
                      <TableCell>{prop.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="boxmodel">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {boxModelProperties.map((prop) => (
                    <TableRow key={prop.property}>
                      <TableCell className="font-mono">{prop.property}</TableCell>
                      <TableCell>{prop.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="text">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {textProperties.map((prop) => (
                    <TableRow key={prop.property}>
                      <TableCell className="font-mono">{prop.property}</TableCell>
                      <TableCell>{prop.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="background">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {backgroundProperties.map((prop) => (
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
          <CardTitle>CSS Property Examples</CardTitle>
          <CardDescription>
            Examples of how to use various CSS properties in different contexts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="layout">
            <TabsList>
              <TabsTrigger value="layout">Layout</TabsTrigger>
              <TabsTrigger value="boxmodel">Box Model</TabsTrigger>
              <TabsTrigger value="text">Text</TabsTrigger>
              <TabsTrigger value="background">Background</TabsTrigger>
            </TabsList>
            <TabsContent value="layout">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`.container {
  display: flex;
  justify-content: space-between;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
}

.float-right {
  float: right;
}

.clear-both {
  clear: both;
}

.stacked {
  z-index: 1;
}`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="boxmodel">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`.box {
  width: 300px;
  height: 200px;
  padding: 20px;
  margin: 10px;
  border: 1px solid #000;
}

.full-width {
  width: 100%;
  box-sizing: border-box;
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #333;
}`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="text">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`.heading {
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
}

.paragraph {
  line-height: 1.6;
  text-align: justify;
}

.link {
  color: #0066cc;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="background">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`.colored-bg {
  background-color: #f0f0f0;
}

.image-bg {
  background-image: url('background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.gradient-bg {
  background-image: linear-gradient(to right, #ff0000, #00ff00);
}

.pattern-bg {
  background-image: url('pattern.png');
  background-repeat: repeat;
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

