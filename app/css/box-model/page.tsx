import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Box, ArrowRight, ArrowLeft, ArrowUp, ArrowDown } from 'lucide-react'

export default function CSSBoxModelPage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">CSS Box Model</h1>
        <p className="text-xl text-muted-foreground">
          The CSS Box Model is a fundamental concept that describes how elements are rendered in web browsers. It consists of margins, borders, padding, and the actual content of an element.
        </p>
      </div>
      
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Components of the Box Model</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Box className="mr-2 h-5 w-5" />
                Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              The inner-most part of the box, where text and images appear.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowRight className="mr-2 h-5 w-5" />
                Padding
              </CardTitle>
            </CardHeader>
            <CardContent>
              Clears an area around the content. The padding is transparent.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowUp className="mr-2 h-5 w-5" />
                Border
              </CardTitle>
            </CardHeader>
            <CardContent>
              A border that goes around the padding and content.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowDown className="mr-2 h-5 w-5" />
                Margin
              </CardTitle>
            </CardHeader>
            <CardContent>
              Clears an area outside the border. The margin is transparent.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Box Model Example</h2>
        <Card>
          <CardContent className="p-6">
            <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4">
              <pre><code>{`div {
  width: 300px;
  padding: 10px;
  border: 5px solid gray;
  margin: 20px;
}`}</code></pre>
            </div>
            <p className="mb-2">In this example:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The content width is 300px</li>
              <li>The padding adds 10px on each side, making it 320px wide</li>
              <li>The border adds 5px on each side, making it 330px wide</li>
              <li>The margin adds 20px on each side, but doesn't affect the element's width</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Box-Sizing Property</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">The <code className="bg-muted/50 px-1 rounded">box-sizing</code> property allows you to include the padding and border in an element's total width and height:</p>
            <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4">
              <pre><code>{`* {
  box-sizing: border-box;
}

div {
  width: 300px;
  padding: 10px;
  border: 5px solid gray;
  margin: 20px;
}`}</code></pre>
            </div>
            <p>With <code className="bg-muted/50 px-1 rounded">box-sizing: border-box</code>, the padding and border are included in the width, so the actual content area will be smaller to maintain the specified width.</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Margin Collapse</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">Vertical margins of elements can sometimes collapse into a single margin. This is known as margin collapse. The larger margin will be used, and the smaller one will collapse.</p>
            <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4">
              <pre><code>{`h1 {
  margin-bottom: 20px;
}

p {
  margin-top: 10px;
}`}</code></pre>
            </div>
            <p>In this example, the space between the <code className="bg-muted/50 px-1 rounded">h1</code> and <code className="bg-muted/50 px-1 rounded">p</code> elements will be 20px, not 30px.</p>
          </CardContent>
        </Card>
      </section>

      <p className="text-lg text-muted-foreground">
        Understanding the CSS Box Model is crucial for controlling layout and spacing in web design. As you continue to learn CSS, you'll discover more ways to manipulate these properties to create complex and responsive layouts.
      </p>
    </div>
  )
}

