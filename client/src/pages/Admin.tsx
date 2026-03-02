import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UtensilsCrossed, CalendarDays, Plus, Trash2, Edit } from "lucide-react";

// Mock data initialization
const INITIAL_BOOKINGS = [
  { id: "1", name: "Rahul Sharma", phone: "9876543210", date: "2023-11-15", time: "20:00", guests: 4, status: "Confirmed" },
  { id: "2", name: "Priya Singh", phone: "9876543211", date: "2023-11-16", time: "19:30", guests: 2, status: "Pending" },
];

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [bookings, setBookings] = useState<any[]>([]);

  // Simple mock authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials. Try 'admin123'");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const storedBookings = JSON.parse(localStorage.getItem("awadh_bookings") || "[]");
      setBookings([...storedBookings, ...INITIAL_BOOKINGS]);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md shadow-2xl border-accent/20 border-2">
          <CardHeader className="text-center space-y-2 pb-8 pt-10">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-accent">
              <UtensilsCrossed className="text-accent h-8 w-8" />
            </div>
            <CardTitle className="font-serif text-3xl text-primary">Admin Portal</CardTitle>
            <CardDescription className="text-base">Enter credentials to access the dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Input 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 border-border/50 text-center text-lg tracking-widest focus-visible:ring-accent"
                />
                <p className="text-xs text-muted-foreground text-center pt-2">Hint: Use 'admin123'</p>
              </div>
              <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-widest rounded-none">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-serif text-4xl text-primary font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Manage your royal establishment</p>
          </div>
          <Button variant="outline" onClick={() => setIsAuthenticated(false)} className="border-primary text-primary hover:bg-primary hover:text-white rounded-none">
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-l-4 border-l-accent shadow-sm">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="p-3 bg-accent/10 rounded-full text-accent">
                <CalendarDays className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Total Bookings</p>
                <h3 className="text-3xl font-bold text-primary">{bookings.length}</h3>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-primary shadow-sm">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <UtensilsCrossed className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Menu Items</p>
                <h3 className="text-3xl font-bold text-primary">9</h3>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600 shadow-sm">
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-full text-green-600">
                <CalendarDays className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Today's Guests</p>
                <h3 className="text-3xl font-bold text-primary">24</h3>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="bookings" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 bg-card rounded-none border border-border p-1 h-auto">
            <TabsTrigger value="bookings" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-none text-base uppercase tracking-wider">
              Reservations
            </TabsTrigger>
            <TabsTrigger value="menu" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-none text-base uppercase tracking-wider">
              Menu Items
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="bookings" className="mt-6">
            <Card className="shadow-md border-0">
              <CardHeader className="bg-primary text-primary-foreground flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="font-serif text-2xl">Recent Reservations</CardTitle>
                  <CardDescription className="text-primary-foreground/70">View and manage table bookings</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      <TableHead className="font-semibold text-primary">Name</TableHead>
                      <TableHead className="font-semibold text-primary">Contact</TableHead>
                      <TableHead className="font-semibold text-primary">Date & Time</TableHead>
                      <TableHead className="font-semibold text-primary text-center">Guests</TableHead>
                      <TableHead className="font-semibold text-primary">Status</TableHead>
                      <TableHead className="text-right font-semibold text-primary">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.name}</TableCell>
                        <TableCell>{booking.phone}</TableCell>
                        <TableCell>{booking.date} at {booking.time}</TableCell>
                        <TableCell className="text-center">{booking.guests}</TableCell>
                        <TableCell>
                          <Badge variant={booking.status === "Confirmed" ? "default" : "secondary"} 
                                 className={booking.status === "Confirmed" ? "bg-green-600 hover:bg-green-700" : ""}>
                            {booking.status || "Pending"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right space-x-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-primary">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {bookings.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                          No bookings found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="menu" className="mt-6">
            <Card className="shadow-md border-0">
              <CardHeader className="bg-primary text-primary-foreground flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="font-serif text-2xl">Menu Management</CardTitle>
                  <CardDescription className="text-primary-foreground/70">Add, edit or remove dishes</CardDescription>
                </div>
                <Button className="bg-accent hover:bg-accent/90 text-primary font-bold">
                  <Plus className="mr-2 h-4 w-4" /> Add Item
                </Button>
              </CardHeader>
              <CardContent className="p-12 text-center text-muted-foreground">
                <UtensilsCrossed className="mx-auto h-12 w-12 opacity-20 mb-4" />
                <p>Menu CRUD interface mockup.</p>
                <p className="text-sm">In a full application, this would list all items from the database.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}