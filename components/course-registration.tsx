"use client"

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { database } from '@/lib/firebase'
import { ref, set, get } from 'firebase/database'
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle } from 'lucide-react'

interface CourseRegistrationProps {
  courseId: string
  courseName: string
}

export function CourseRegistration({ courseId, courseName }: CourseRegistrationProps) {
  const { user } = useAuth()
  const [isRegistered, setIsRegistered] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    checkRegistration()
  }, [user])

  const checkRegistration = async () => {
    if (!user) {
      setLoading(false)
      return
    }

    try {
      const registrationRef = ref(database, `courseRegistrations/${user.uid}/${courseId}`)
      const snapshot = await get(registrationRef)
      setIsRegistered(snapshot.exists())
    } catch (err) {
      console.error('Error checking registration:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleRegistration = async () => {
    if (!user) {
      setError('Please sign in to register for courses')
      return
    }

    try {
      setLoading(true)
      setError(null)
      setSuccess(null)

      const registrationRef = ref(database, `courseRegistrations/${user.uid}/${courseId}`)
      await set(registrationRef, {
        courseId,
        courseName,
        registeredAt: new Date().toISOString()
      })

      setIsRegistered(true)
      setSuccess('Successfully registered for the course!')
    } catch (err) {
      setError('Failed to register for the course. Please try again.')
      console.error('Error registering for course:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Button disabled>Loading...</Button>
  }

  return (
    <div className="space-y-2">
      {error && (
        <Alert variant="destructive">
          <XCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {success && (
        <Alert>
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>{success}</AlertDescription>
        </Alert>
      )}
      <Button 
        onClick={handleRegistration}
        disabled={isRegistered || loading}
      >
        {isRegistered ? 'Registered' : 'Register for Course'}
      </Button>
    </div>
  )
} 