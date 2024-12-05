import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

interface TutorialItem {
  title: string
  href: string
}

interface TutorialSectionProps {
  title: string
  items: TutorialItem[]
  badge: string
}

export default function TutorialsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Tutorials</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Welcome to our comprehensive web development tutorials. Here you'll find in-depth guides on HTML, CSS, and JavaScript to help you build modern, responsive websites.
        </p>
      </section>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <TutorialSection 
          title="HTML Tutorials" 
          items={[
            { title: "Introduction to HTML", href: "/html/intro" },
            { title: "HTML Elements", href: "/html/elements" },
            { title: "HTML Attributes", href: "/html/attributes" },
          ]}
          badge="Structure"
        />
        <TutorialSection 
          title="CSS Tutorials" 
          items={[
            { title: "Introduction to CSS", href: "/css/intro" },
            { title: "CSS Selectors", href: "/css/selectors" },
            { title: "CSS Box Model", href: "/css/box-model" },
          ]}
          badge="Style"
        />
        <TutorialSection 
          title="JavaScript Tutorials" 
          items={[
            { title: "Introduction to JavaScript", href: "/js/intro" },
            { title: "JavaScript Variables", href: "/js/variables" },
            { title: "JavaScript Functions", href: "/js/functions" },
          ]}
          badge="Interactivity"
        />
      </div>
    </div>
  )
}

function TutorialSection({ title, items, badge }: TutorialSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <Badge variant="secondary">{badge}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item: TutorialItem, index: number) => (
            <li key={index}>
              <Link 
                href={item.href} 
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

