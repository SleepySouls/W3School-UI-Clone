"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useAuth } from '@/contexts/auth-context'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Search } from 'lucide-react'

export function Header() {
  const router = useRouter()
  const { user, loading } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery)
    setSearchQuery('')
  }

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      router.push('/auth/sign-in')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl">UIT StudyHub </span>
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
          {!loading && (
            <>
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link href="/user/profile" className="text-sm">
                    Hello, {user.displayName || 'User'}
                  </Link>
                  <Button variant="outline" size="sm" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/auth/sign-in">Sign In</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/auth/sign-up">Sign Up</Link>
                  </Button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  )
}

