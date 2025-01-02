"use client"

import { useAuth } from '@/contexts/auth-context'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UserProfilePage() {
  const { user } = useAuth()

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

  // Format the user's join date
  const joinDate = user.metadata.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'Unknown'

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
    </div>
  )
} 