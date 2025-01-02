import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileCode2, Layout, Type, List } from 'lucide-react'
import { LessonNavigation } from "@/components/lesson-navigation"

export default function HTMLElementsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">HTML Elements</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, some content, and an end tag.
        </p>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-6">Structure of an HTML Element</h2>
        <Card>
          <CardContent className="p-6">
            <pre className="language-html rounded-lg mb-4"><code>{`<tagname>Content goes here...</tagname>`}</code></pre>
            <p>The HTML element is everything from the start tag to the end tag:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><code className="bg-muted/50 px-1 rounded">&lt;h1&gt;</code> - defines a main heading</li>
              <li><code className="bg-muted/50 px-1 rounded">&lt;p&gt;</code> - defines a paragraph</li>
              <li><code className="bg-muted/50 px-1 rounded">&lt;br&gt;</code> - inserts a single line break</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Nested HTML Elements</h2>
        <Card>
          <CardContent className="p-0">
            <pre className="language-html rounded-lg"><code>{`<!DOCTYPE html>
<html>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>`}</code></pre>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Common HTML Elements</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Type className="mr-2 h-5 w-5" />
                Headings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">HTML headings are defined with the <code className="bg-muted/50 px-1 rounded">&lt;h1&gt;</code> to <code className="bg-muted/50 px-1 rounded">&lt;h6&gt;</code> tags.</p>
              <pre className="language-html rounded-lg"><code>{`<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>`}</code></pre>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileCode2 className="mr-2 h-5 w-5" />
                Paragraphs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">HTML paragraphs are defined with the <code className="bg-muted/50 px-1 rounded">&lt;p&gt;</code> tag.</p>
              <pre className="language-html rounded-lg"><code>{`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`}</code></pre>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layout className="mr-2 h-5 w-5" />
                Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">HTML links are defined with the <code className="bg-muted/50 px-1 rounded">&lt;a&gt;</code> tag.</p>
              <pre className="language-html rounded-lg"><code>{`<a href="https://www.example.com">This is a link</a>`}</code></pre>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <List className="mr-2 h-5 w-5" />
                Images
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">HTML images are defined with the <code className="bg-muted/50 px-1 rounded">&lt;img&gt;</code> tag.</p>
              <pre className="language-html rounded-lg"><code>{`<img src="image.jpg" alt="Description of image">`}</code></pre>
            </CardContent>
          </Card>
        </div>
      </section>

      <p className="text-lg text-muted-foreground text-center mt-12">
        These are just a few of the many HTML elements available. As you continue learning HTML, you'll discover more elements and how to use them effectively in your web pages.
      </p>

      {/* LessonNavigation Component */}
      <LessonNavigation 
        courseId="html-course" 
        currentLesson="html-elements" 
        prevLesson="/html/intro" 
        nextLesson="/html/attributes" 
      />
    </div>
  )
}
