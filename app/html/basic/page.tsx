import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LessonNavigation } from "@/components/lesson-navigation"

export default function HTMLBasicPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">HTML Basic</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn the basics of HTML, the standard markup language for creating web pages.
        </p>
      </section>

      {/* LessonNavigation Component */}
      <LessonNavigation 
        courseId="html-course" 
        currentLesson="html-basic" 
        prevLesson="/html/elements" 
        nextLesson="/html/attributes" 
      />
    </div>
  )
}
