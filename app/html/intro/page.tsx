import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileCode2, Layout, Type } from 'lucide-react'
import { CourseRegistration } from "@/components/course-registration"

export default function HTMLIntroPage() {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Introduction to HTML</h1>
        <p className="text-xl text-muted-foreground">
          HTML is the standard markup language for creating Web pages.
        </p>
        <CourseRegistration 
          courseId="html-course" 
          courseName="Introduction to HTML" 
        />
      </div>
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Introduction to HTML</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page semantically and originally included cues for the appearance of the document.
        </p>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-6">What is HTML?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileCode2 className="mr-2 h-5 w-5" />
                Markup Language
              </CardTitle>
            </CardHeader>
            <CardContent>
              HTML is the standard markup language for creating Web pages
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layout className="mr-2 h-5 w-5" />
                Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              HTML describes the structure of a Web page
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Type className="mr-2 h-5 w-5" />
                Elements
              </CardTitle>
            </CardHeader>
            <CardContent>
              HTML consists of a series of elements that tell the browser how to display the content
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">A Simple HTML Document</h2>
        <Card>
          <CardContent className="p-0">
            <pre className="language-html rounded-lg"><code>{`<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>`}</code></pre>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">HTML Elements Explained</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { tag: "<!DOCTYPE html>", description: "Defines this document as HTML5" },
            { tag: "<html>", description: "The root element of an HTML page" },
            { tag: "<head>", description: "Contains meta information about the document" },
            { tag: "<title>", description: "Specifies a title for the document" },
            { tag: "<body>", description: "Contains the visible page content" },
            { tag: "<h1>", description: "Defines a large heading" },
            { tag: "<p>", description: "Defines a paragraph" }
          ].map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-2">{item.tag}</Badge>
                  {item.description}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <p className="text-lg text-muted-foreground text-center mt-12">
        This is a basic introduction to HTML. As you progress, you'll learn more about tags, attributes, and how to create complex web pages.
      </p>
    </div>
  )
}

