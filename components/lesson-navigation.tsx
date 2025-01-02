"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

interface LessonNavigationProps {
  courseId: string;
  currentLesson: string;
  prevLesson?: string;
  nextLesson?: string;
}

export function LessonNavigation({
  courseId,
  currentLesson,
  prevLesson,
  nextLesson,
}: LessonNavigationProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const completedLessons = JSON.parse(
      localStorage.getItem(`${courseId}_completed`) || "[]"
    );
    setIsCompleted(completedLessons.includes(currentLesson));
  }, [courseId, currentLesson]);

  const handleMarkComplete = () => {
    const completedLessons = JSON.parse(
      localStorage.getItem(`${courseId}_completed`) || "[]"
    );
    if (!completedLessons.includes(currentLesson)) {
      completedLessons.push(currentLesson);
      localStorage.setItem(
        `${courseId}_completed`,
        JSON.stringify(completedLessons)
      );
      setIsCompleted(true);
    }
  };

  return (
    <div className="flex items-center justify-between border-t mt-8 pt-4">
      <div>
        {prevLesson ? (
          <Button variant="outline" asChild>
            <Link href={prevLesson}>← Previous Lesson</Link>
          </Button>
        ) : (
          <div />
        )}
      </div>

      <Button
        variant={isCompleted ? "secondary" : "default"}
        onClick={handleMarkComplete}
        disabled={isCompleted}
        className="flex items-center gap-2"
      >
        <CheckCircle2 className="h-4 w-4" />
        {isCompleted ? "Completed" : "Mark as Complete"}
      </Button>

      <div>
        {nextLesson ? (
          <Button variant="outline" asChild>
            <Link href={nextLesson}>Next Lesson →</Link>
          </Button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
