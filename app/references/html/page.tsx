import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const htmlElements = [
  { tag: "<!DOCTYPE>", description: "Defines the document type" },
  { tag: "<html>", description: "Defines an HTML document" },
  { tag: "<head>", description: "Contains metadata/information for the document" },
  { tag: "<title>", description: "Defines a title for the document" },
  { tag: "<body>", description: "Defines the document's body" },
  { tag: "<h1> to <h6>", description: "Defines HTML headings" },
  { tag: "<p>", description: "Defines a paragraph" },
  { tag: "<a>", description: "Defines a hyperlink" },
  { tag: "<img>", description: "Defines an image" },
  { tag: "<div>", description: "Defines a section in a document" },
  { tag: "<span>", description: "Defines a section in a document" },
  { tag: "<ul>", description: "Defines an unordered list" },
  { tag: "<ol>", description: "Defines an ordered list" },
  { tag: "<li>", description: "Defines a list item" },
  { tag: "<table>", description: "Defines a table" },
  { tag: "<form>", description: "Defines an HTML form for user input" },
  { tag: "<input>", description: "Defines an input control" },
  { tag: "<button>", description: "Defines a clickable button" },
  { tag: "<textarea>", description: "Defines a multiline input control" },
  { tag: "<select>", description: "Defines a drop-down list" },
]

export default function HTMLReferencePage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">HTML Reference</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive guide to HTML elements and their usage.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What is HTML?</CardTitle>
          <CardDescription>
            HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content
            to make it appear a certain way, or act a certain way. The enclosing tags can make a word or image
            hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common HTML Elements</CardTitle>
          <CardDescription>
            Here's a quick reference of commonly used HTML elements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tag</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {htmlElements.map((element) => (
                <TableRow key={element.tag}>
                  <TableCell className="font-mono">{element.tag}</TableCell>
                  <TableCell>{element.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>HTML Element Examples</CardTitle>
          <CardDescription>
            Detailed examples of how to use various HTML elements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="structure">
            <TabsList>
              <TabsTrigger value="structure">Document Structure</TabsTrigger>
              <TabsTrigger value="text">Text Elements</TabsTrigger>
              <TabsTrigger value="links">Links & Images</TabsTrigger>
              <TabsTrigger value="lists">Lists</TabsTrigger>
              <TabsTrigger value="tables">Tables</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
            </TabsList>
            <TabsContent value="structure">
              <Card>
                <CardHeader>
                  <CardTitle>Basic HTML Document Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
</head>
<body>
    <h1>Welcome to My Web Page</h1>
    <p>This is a paragraph.</p>
</body>
</html>`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="text">
              <Card>
                <CardHeader>
                  <CardTitle>Text Elements</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<h1>This is a heading 1</h1>
<h2>This is a heading 2</h2>
<h3>This is a heading 3</h3>
<p>This is a paragraph.</p>
<strong>This text is bold.</strong>
<em>This text is italic.</em>
<mark>This text is highlighted.</mark>`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="links">
              <Card>
                <CardHeader>
                  <CardTitle>Links and Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<a href="https://www.example.com">This is a link</a>
<img src="image.jpg" alt="Description of the image">
<figure>
    <img src="image.jpg" alt="A beautiful landscape">
    <figcaption>Fig.1 - A beautiful landscape.</figcaption>
</figure>`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="lists">
              <Card>
                <CardHeader>
                  <CardTitle>Lists</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<ul>
    <li>Unordered list item 1</li>
    <li>Unordered list item 2</li>
</ul>
<ol>
    <li>Ordered list item 1</li>
    <li>Ordered list item 2</li>
</ol>
<dl>
    <dt>Definition list term</dt>
    <dd>Definition list description</dd>
</dl>`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tables">
              <Card>
                <CardHeader>
                  <CardTitle>Tables</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<table>
    <thead>
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
        </tr>
        <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
        </tr>
    </tbody>
</table>`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="forms">
              <Card>
                <CardHeader>
                  <CardTitle>Forms</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<form action="/submit-form" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea>

    <button type="submit">Submit</button>
</form>`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

