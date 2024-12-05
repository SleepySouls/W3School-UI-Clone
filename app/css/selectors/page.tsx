import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Paintbrush, Code, Layout } from 'lucide-react'

export default function CSSIntroPage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Introduction to CSS</h1>
        <p className="text-xl text-muted-foreground">
          CSS (Cascading Style Sheets) is the language we use to style an HTML document. It describes how HTML elements should be displayed.
        </p>
      </div>
      
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">What is CSS?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Paintbrush className="mr-2 h-5 w-5" />
                Style Language
              </CardTitle>
            </CardHeader>
            <CardContent>
              CSS describes how HTML elements are to be displayed on screen, paper, or in other media.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-5 w-5" />
                Saves Work
              </CardTitle>
            </CardHeader>
            <CardContent>
              CSS saves a lot of work. It can control the layout of multiple web pages all at once.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layout className="mr-2 h-5 w-5" />
                External Stylesheets
              </CardTitle>
            </CardHeader>
            <CardContent>
              External stylesheets are stored in CSS files and can be linked to multiple HTML documents.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">CSS Syntax</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">A CSS rule-set consists of a selector and a declaration block:</p>
            <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto font-mono text-sm mb-4">
              <pre><code>{`h1 {
  color: blue;
  font-size: 12px;
}`}</code></pre>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>The selector points to the HTML element you want to style</li>
              <li>The declaration block contains one or more declarations separated by semicolons</li>
              <li>Each declaration includes a CSS property name and a value, separated by a colon</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">CSS Selectors</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Element Selector
                <Badge variant="secondary">p</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              Selects all &lt;p&gt; elements
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                ID Selector
                <Badge variant="secondary">#myId</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              Selects the element with id="myId"
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Class Selector
                <Badge variant="secondary">.myClass</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              Selects all elements with class="myClass"
            </CardContent>
          </Card>
        </div>
      </section>

      <p className="text-lg text-muted-foreground">
        This is a basic introduction to CSS. As you progress, you'll learn more about properties, values, and how to create complex layouts and designs.
      </p>
    </div>
  )
}

