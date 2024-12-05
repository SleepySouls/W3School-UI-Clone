import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const windowEvents = [
  { event: "load", description: "Fires when the page finishes loading" },
  { event: "resize", description: "Fires when the browser window is resized" },
  { event: "scroll", description: "Fires when the document view is scrolled" },
]

const formEvents = [
  { event: "submit", description: "Fires when a form is submitted" },
  { event: "reset", description: "Fires when a form is reset" },
  { event: "change", description: "Fires when the value of an input element changes" },
  { event: "input", description: "Fires when the value of an <input> or <textarea> element changes" },
  { event: "focus", description: "Fires when an element receives focus" },
  { event: "blur", description: "Fires when an element loses focus" },
]

const mouseEvents = [
  { event: "click", description: "Fires when the user clicks on an element" },
  { event: "dblclick", description: "Fires when the user double-clicks on an element" },
  { event: "mousedown", description: "Fires when a mouse button is pressed down on an element" },
  { event: "mouseup", description: "Fires when a mouse button is released over an element" },
  { event: "mouseover", description: "Fires when the mouse pointer moves onto an element" },
  { event: "mouseout", description: "Fires when the mouse pointer moves out of an element" },
]

const keyboardEvents = [
  { event: "keydown", description: "Fires when a key is pressed down" },
  { event: "keyup", description: "Fires when a key is released" },
  { event: "keypress", description: "Fires when a key is pressed and released" },
]

export default function HTMLEventsReferencePage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">HTML Events Reference</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive guide to HTML events and their usage.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>What are HTML Events?</CardTitle>
          <CardDescription>
            HTML events allow JavaScript to register different event handlers on elements in an HTML document.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Events are normally used in combination with functions, and the function will not be executed before the event occurs.
            They can be used to trigger actions based on user interaction, page loading, form submission, and more.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common HTML Events</CardTitle>
          <CardDescription>
            Here's a reference of commonly used HTML events categorized by their context.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="window">
            <TabsList>
              <TabsTrigger value="window">Window Events</TabsTrigger>
              <TabsTrigger value="form">Form Events</TabsTrigger>
              <TabsTrigger value="mouse">Mouse Events</TabsTrigger>
              <TabsTrigger value="keyboard">Keyboard Events</TabsTrigger>
            </TabsList>
            <TabsContent value="window">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {windowEvents.map((evt) => (
                    <TableRow key={evt.event}>
                      <TableCell className="font-mono">{evt.event}</TableCell>
                      <TableCell>{evt.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="form">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {formEvents.map((evt) => (
                    <TableRow key={evt.event}>
                      <TableCell className="font-mono">{evt.event}</TableCell>
                      <TableCell>{evt.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="mouse">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mouseEvents.map((evt) => (
                    <TableRow key={evt.event}>
                      <TableCell className="font-mono">{evt.event}</TableCell>
                      <TableCell>{evt.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="keyboard">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keyboardEvents.map((evt) => (
                    <TableRow key={evt.event}>
                      <TableCell className="font-mono">{evt.event}</TableCell>
                      <TableCell>{evt.description}</TableCell>
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
          <CardTitle>HTML Event Examples</CardTitle>
          <CardDescription>
            Examples of how to use various HTML events in different contexts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="window">
            <TabsList>
              <TabsTrigger value="window">Window</TabsTrigger>
              <TabsTrigger value="form">Form</TabsTrigger>
              <TabsTrigger value="mouse">Mouse</TabsTrigger>
              <TabsTrigger value="keyboard">Keyboard</TabsTrigger>
            </TabsList>
            <TabsContent value="window">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`<body onload="alert('Page is loaded');">
  <h1>Welcome to my page</h1>
</body>

<script>
window.addEventListener('resize', function() {
  console.log('Window resized');
});

window.onscroll = function() {
  console.log('Page scrolled');
};
</script>`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="form">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`<form onsubmit="alert('Form submitted');">
  <input type="text" onchange="console.log('Input changed')" onfocus="this.style.background='yellow'" onblur="this.style.background='white'">
  <button type="submit">Submit</button>
</form>

<script>
document.querySelector('form').addEventListener('reset', function(event) {
  console.log('Form reset');
});
</script>`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="mouse">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`<div id="myDiv" style="width: 200px; height: 100px; background-color: lightblue;">
  Hover over me
</div>

<script>
const div = document.getElementById('myDiv');

div.addEventListener('click', function() {
  console.log('Div clicked');
});

div.addEventListener('mouseover', function() {
  this.style.backgroundColor = 'lightgreen';
});

div.addEventListener('mouseout', function() {
  this.style.backgroundColor = 'lightblue';
});
</script>`}</code>
              </pre>
            </TabsContent>
            <TabsContent value="keyboard">
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`<input type="text" id="myInput" placeholder="Type something">

<script>
const input = document.getElementById('myInput');

input.addEventListener('keydown', function(event) {
  console.log('Key pressed: ' + event.key);
});

input.addEventListener('keyup', function(event) {
  console.log('Key released: ' + event.key);
});

input.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    alert('You pressed Enter!');
  }
});
</script>`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

