import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileCode2, Link, Image, Palette, Hash, ToggleLeft } from 'lucide-react'

export default function HTMLAttributesPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">HTML Attributes</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          HTML attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like: name="value".
        </p>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-6">Attribute Syntax</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>The attribute name followed by an equals sign</li>
              <li>The attribute value wrapped in quotation marks</li>
            </ul>
            <pre className="language-html rounded-lg"><code>{`<element attribute="value">Content</element>`}</code></pre>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Common HTML Attributes</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Link className="mr-2 h-5 w-5" />
                href
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Specifies the URL of the page the link goes to. Used with <code className="bg-muted/50 px-1 rounded">&lt;a&gt;</code> tags.</p>
              <pre className="language-html rounded-lg"><code>{`<a href="https://www.example.com">Visit Example.com</a>`}</code></pre>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Image className="mr-2 h-5 w-5" />
                src
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Specifies the path to the image to be displayed. Used with <code className="bg-muted/50 px-1 rounded">&lt;img&gt;</code> tags.</p>
              <pre className="language-html rounded-lg"><code>{`<img src="image.jpg" alt="Description of image">`}</code></pre>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileCode2 className="mr-2 h-5 w-5" />
                alt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Specifies an alternate text for an image. Used with <code className="bg-muted/50 px-1 rounded">&lt;img&gt;</code> tags.</p>
              <pre className="language-html rounded-lg"><code>{`<img src="image.jpg" alt="A beautiful sunset">`}</code></pre>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="mr-2 h-5 w-5" />
                style
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Specifies an inline CSS style for an element.</p>
              <pre className="language-html rounded-lg"><code>{`<p style="color:blue;">This is a blue paragraph.</p>`}</code></pre>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Hash className="mr-2 h-5 w-5" />
                class
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Specifies one or more class names for an element (refers to a class in a style sheet).</p>
              <pre className="language-html rounded-lg"><code>{`<div class="container center-text">This div has two classes.</div>`}</code></pre>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Hash className="mr-2 h-5 w-5" />
                id
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Specifies a unique id for an element.</p>
              <pre className="language-html rounded-lg"><code>{`<div id="unique-element">This element has a unique ID.</div>`}</code></pre>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Boolean Attributes</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ToggleLeft className="mr-2 h-5 w-5" />
              Boolean Attributes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Some attributes are boolean attributes, which means they can have only one value, which is generally the same as the attribute name.</p>
            <pre className="language-html rounded-lg"><code>{`<input type="text" disabled>
<input type="checkbox" checked>`}</code></pre>
          </CardContent>
        </Card>
      </section>

      <p className="text-lg text-muted-foreground text-center mt-12">
        HTML attributes play a crucial role in defining the characteristics and behavior of HTML elements. As you continue to learn HTML, you'll encounter many more attributes and understand how they can be used to enhance your web pages.
      </p>
    </div>
  )
}

