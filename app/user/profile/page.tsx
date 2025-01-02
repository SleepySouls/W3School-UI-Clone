"use client"

import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { updateProfile } from 'firebase/auth'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Pencil, Check, X } from 'lucide-react'
import { database } from '@/lib/firebase'
import { ref, get } from 'firebase/database'

interface CourseRegistration {
  courseId: string
  courseName: string
  registeredAt: string
}

function RegisteredCourses() {
  const { user } = useAuth()
  const [courses, setCourses] = useState<CourseRegistration[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRegisteredCourses = async () => {
      if (!user) return

      try {
        const registrationsRef = ref(database, `courseRegistrations/${user.uid}`)
        const snapshot = await get(registrationsRef)
        
        if (snapshot.exists()) {
          const registrations = Object.values(snapshot.val()) as CourseRegistration[]
          setCourses(registrations)
        }
      } catch (err) {
        console.error('Error fetching registered courses:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchRegisteredCourses()
  }, [user])

  if (loading) return <div>Loading courses...</div>

  return (
    <Card>
      <CardHeader>
        <CardTitle>Registered Courses</CardTitle>
      </CardHeader>
      <CardContent>
        {courses.length === 0 ? (
          <p className="text-muted-foreground">No courses registered yet.</p>
        ) : (
          <div className="space-y-4">
            {courses.map((course) => (
              <Card key={course.courseId}>
                <CardContent className="p-4">
                  <div className="font-medium">{course.courseName}</div>
                  <div className="text-sm text-muted-foreground">
                    Registered on: {new Date(course.registeredAt).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function UserProfilePage() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [displayName, setDisplayName] = useState(user?.displayName || '')
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  if (!user) {
    return (
      <div className="container mx-auto py-10">
        <Card>
          <CardContent className="p-6">
            <p>Please sign in to view your profile.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const handleUpdateProfile = async () => {
    try {
      setError('')
      setSuccess('')
      
      await updateProfile(user, {
        displayName,
        photoURL
      })
      
      setIsEditing(false)
      setSuccess('Profile updated successfully!')
    } catch (err) {
      setError('Failed to update profile. Please try again.')
      console.error('Error updating profile:', err)
    }
  }

  const joinDate = user.metadata.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'Unknown'

  return (
    <div className="container mx-auto py-10 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            User Profile
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? <X className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {success && (
            <Alert className="mb-4">
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
                <AvatarFallback>
                  {user.displayName ? user.displayName[0].toUpperCase() : 'U'}
                </AvatarFallback>
              </Avatar>
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="displayName">Display Name</Label>
                  <Input
                    id="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="photoURL">Profile Picture URL</Label>
                  <Input
                    id="photoURL"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    placeholder="https://example.com/profile-picture.jpg"
                  />
                </div>

                <Button onClick={handleUpdateProfile} className="w-full">
                  <Check className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <strong>Name:</strong> {user.displayName || 'Not set'}
                </div>
                <div>
                  <strong>Email:</strong> {user.email}
                </div>
                <div>
                  <strong>Joined:</strong> {joinDate}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <RegisteredCourses />
    </div>
  )
} 