"use client"

import Link from 'next/link'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useState } from 'react'

export function Header() {
 const [searchQuery, setSearchQuery] = useState('')

 const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault()
   // TODO: Implement search functionality
   console.log('Searching for:', searchQuery)
   // Reset search query after submission
   setSearchQuery('')
 }

 return (
   <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
     <div className="container flex h-14 items-center">
       <Link href="/" className="flex items-center space-x-2">
         <span className="font-bold text-2xl">UIT W3Clone</span>
       </Link>
       <nav className="ml-auto flex items-center space-x-4">
         <Link href="/tutorials" className="text-sm font-medium transition-colors hover:text-primary">
           Tutorials
         </Link>
         <Link href="/references" className="text-sm font-medium transition-colors hover:text-primary">
           References
         </Link>
         <Link href="/exercises" className="text-sm font-medium transition-colors hover:text-primary">
           Exercises
         </Link>
       </nav>
       <div className="ml-auto flex items-center space-x-4">
         <form onSubmit={handleSubmit} className="relative">
           <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
           <Input 
             type="search"
             placeholder="Search..." 
             className="pl-8 w-[200px] md:w-[300px]" 
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
           />
         </form>
         <ThemeToggle />
         <Button variant="outline" size="sm" asChild>
           <Link href="/auth/sign-in">Sign In</Link>
         </Button>
         <Button size="sm" asChild>
           <Link href="/auth/sign-up">Sign Up</Link>
         </Button>
       </div>
     </div>
   </header>
 )
}

