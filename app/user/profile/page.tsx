import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UserProfilePage() {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joined: "January 1, 2023",
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <strong>Name:</strong> {user.name}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            <div>
              <strong>Joined:</strong> {user.joined}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 