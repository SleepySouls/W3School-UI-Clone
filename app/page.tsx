import { TryItYourself } from '@/components/ui/try-it-yourself'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ArrowRight, Code, Layout, Terminal } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Welcome to UIT StudyHub </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          An website for UIT students to learn and practice programming languages.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/tutorials">Start Learning <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/references">View References</Link>
          </Button>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layout className="mr-2 h-5 w-5" />
                Responsive Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-5 w-5" />
                Interactive Code Editor
              </CardTitle>
            </CardHeader>
            <CardContent>
              "Try it Yourself" editor with live preview for hands-on learning experience.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Terminal className="mr-2 h-5 w-5" />
                Comprehensive Tutorials
              </CardTitle>
            </CardHeader>
            <CardContent>
              In-depth tutorials covering HTML, CSS, and JavaScript for beginners and advanced users alike.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-5 w-5" />
                Multi-language Code Compiler
              </CardTitle>
            </CardHeader>
            <CardContent>
              Write and run HTML, CSS, and JavaScript code directly in your browser with our built-in code compiler.
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Try it Yourself</h2>
        <div className="space-y-4">
          <TryItYourself />
          <div className="text-center">
            <Button asChild>
              <Link href="/code-compiler">Try Multi-language Code Compiler</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

