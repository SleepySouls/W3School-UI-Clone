import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const globalAttributes = [
  { attribute: "class", description: "Specifies one or more class names for an element" },
  { attribute: "id", description: "Specifies a unique id for an element" },
  { attribute: "style", description: "Specifies an inline CSS style for an element" },
  { attribute: "title", description: "Specifies extra information about an element" },
  { attribute: "lang", description: "Specifies the language of the element's content" },
  { attribute: "dir", description: "Specifies the text direction for the content in an element" },
  { attribute: "tabindex", description: "Specifies the tabbing order of an element" },
  { attribute: "hidden", description: "Specifies that an element is not yet, or is no longer, relevant" },
]

const formAttributes = [
  { attribute: "action", description: "Specifies where to send the form-data when a form is submitted" },
  { attribute: "method", description: "Specifies the HTTP method to use when sending form-data" },
  { attribute: "name", description: "Specifies the name of the form" },
  { attribute: "target", description: "Specifies where to display the response after submitting the form" },
]

const inputAttributes = [
  { attribute: "type", description: "Specifies the type of <input> element to display" },
  { attribute: "name", description: "Specifies the name of an <input> element" },
  { attribute: "value", description: "Specifies the value of an <input> element" },
  { attribute: "placeholder", description: "Specifies a short hint that describes the expected value of an input field" },
  { attribute: "required", description: "Specifies that an input field must be filled out before submitting the form" },
  { attribute: "disabled", description: "Specifies that an input field should be disabled" },
]

const imageAttributes = [
  { attribute: "src", description: "Specifies the path to the image" },
  { attribute: "alt", description: "Specifies an alternate text for an image" },
  { attribute: "width", description: "Specifies the width of an image" },
  { attribute: "height", description: "Specifies the height of an image" },
  { attribute: "loading", description: "Specifies whether a browser should load an image immediately or to defer loading of off-screen images" },
]

export default function HTMLAttributesReferencePage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">HTML Attributes Reference</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive guide to HTML attributes and their usage.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What are HTML Attributes?</CardTitle>
          <CardDescription>
            HTML attributes provide additional information about HTML elements and are always specified in the start tag.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Attributes usually come in name/value pairs like: name="value". They can specify various properties such as
            styles, behaviors, or metadata for HTML elements. Some attributes are global and can be used on any HTML element,
            while others are specific to certain elements.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common HTML Attributes</CardTitle>
          <CardDescription>
            Here's a reference of commonly used HTML attributes categorized by their usage.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="global">
            <TabsList>
              <TabsTrigger value="global">Global Attributes</TabsTrigger>
              <TabsTrigger value="form">Form Attributes</TabsTrigger>
              <TabsTrigger value="input">Input Attributes</TabsTrigger>
              <TabsTrigger value="image">Image Attributes</TabsTrigger>
            </TabsList>
            <TabsContent value="global">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Attribute</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {globalAttributes.map((attr) => (
                    <TableRow key={attr.attribute}>
                      <TableCell className="font-mono">{attr.attribute}</TableCell>
                      <TableCell>{attr.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="form">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Attribute</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {formAttributes.map((attr) => (
                    <TableRow key={attr.attribute}>
                      <TableCell className="font-mono">{attr.attribute}</TableCell>
                      <TableCell>{attr.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="input">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Attribute</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inputAttributes.map((attr) => (
                    <TableRow key={attr.attribute}>
                      <TableCell className="font-mono">{attr.attribute}</TableCell>
                      <TableCell>{attr.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="image">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Attribute</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {imageAttributes.map((attr) => (
                    <TableRow key={attr.attribute}>
                      <TableCell className="font-mono">{attr.attribute}</TableCell>
                      <TableCell>{attr.description}</TableCell>
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
          <CardTitle>HTML Attribute Examples</CardTitle>
          <CardDescription>
            Examples of how to use various HTML attributes in different contexts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="global">
            <TabsList>
              <TabsTrigger value="global">Global</TabsTrigger>
              <TabsTrigger value="form">Form</TabsTrigger>
              <TabsTrigger value="input">Input</TabsTrigger>
              <TabsTrigger value="image">Image</TabsTrigger>
            </TabsList>
            <TabsContent value="global">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`<div class="container" id="main-content" style="color: blue;">
  <p lang="en" dir="ltr">This is a paragraph with global attributes.</p>
  <span hidden>This text is hidden.</span>
  <button tabindex="1">Clickable button</button>
</div>`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="form">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`<form action="/submit-form" method="post" name="registration" target="_blank">
  <input type="text" name="username" required>
  <input type="password" name="password" required>
  <button type="submit">Register</button>
</form>`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="input">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`<input type="text" name="username" value="JohnDoe" placeholder="Enter your username">
<input type="email" name="email" required>
<input type="number" name="age" min="18" max="100">
<input type="checkbox" name="subscribe" checked>
<input type="radio" name="gender" value="male" disabled>`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="image">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`<img src="image.jpg" alt="A beautiful landscape" width="300" height="200" loading="lazy">
<picture>
  <source media="(min-width: 650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width: 465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

