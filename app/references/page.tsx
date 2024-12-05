import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

interface ReferenceItem {
 title: string
 href: string
}

interface ReferenceSectionProps {
 title: string
 items: ReferenceItem[]
 badge: string
}

export default function ReferencesPage() {
 return (
   <div className="space-y-12">
     <section className="text-center">
       <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">References</h1>
       <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
         Our reference section provides quick access to all HTML tags, CSS properties, and JavaScript methods. Use these references to find detailed information about specific elements, attributes, properties, and functions.
       </p>
     </section>
     
     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
       <ReferenceSection 
         title="HTML Reference" 
         items={[
           { title: "HTML Elements", href: "/references/html" },
           { title: "HTML Attribute Reference", href: "/references/html-attributes" },
           { title: "HTML Event Reference", href: "/references/html-events" },
         ]}
         badge="Structure"
       />
       <ReferenceSection 
         title="CSS Reference" 
         items={[
           { title: "CSS Property Reference", href: "/references/css-properties" },
           { title: "CSS Selector Reference", href: "/references/css-selectors" },
           { title: "CSS Unit Reference", href: "/references/css-units" },
         ]}
         badge="Style"
       />
       <ReferenceSection 
         title="JavaScript Reference" 
         items={[
           { title: "JavaScript Object Reference", href: "/references/javascript-objects" },
           { title: "JavaScript Array Methods", href: "/references/javascript-array-methods" },
           { title: "JavaScript String Methods", href: "/references/javascript-string-methods" },
         ]}
         badge="Interactivity"
       />
     </div>
   </div>
 )
}

function ReferenceSection({ title, items, badge }: ReferenceSectionProps) {
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
         {items.map((item: ReferenceItem, index: number) => (
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

