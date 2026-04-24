import { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useEvents, EventItem } from "@/hooks/useEvents";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, Trash2, Image as ImageIcon, Lock } from "lucide-react";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("adminAuth") === "true";
  });
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { events, addEvent, updateEvent, deleteEvent } = useEvents();
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [tag, setTag] = useState("");
  const [image, setImage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "Hydrowellswater" && password === "ilovehydrowells@$2026") {
      sessionStorage.setItem("adminAuth", "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
  };

  const resetForm = () => {
    setTitle("");
    setDate("");
    setDesc("");
    setTag("");
    setImage("");
    setEditingId(null);
  };

  const editEvent = (e: EventItem) => {
    setEditingId(e.id);
    setTitle(e.title);
    setDate(e.date);
    setDesc(e.desc);
    setTag(e.tag);
    setImage(e.image);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSave = () => {
    if (!title || !date || !desc || !tag) {
      alert("Please fill all text fields");
      return;
    }

    if (editingId) {
      updateEvent(editingId, { title, date, desc, tag, image });
    } else {
      addEvent({
        id: "evt_" + Date.now().toString(),
        title,
        date,
        desc,
        tag,
        image: image || "https://images.unsplash.com/photo-1543822709-0d50711db185?w=800&q=80"
      });
    }
    resetForm();
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-muted/40 flex items-center justify-center p-6 font-sans">
        <Card className="w-full max-w-md shadow-xl border-border/50">
          <CardHeader className="space-y-1 bg-muted/30 pb-8 text-center rounded-t-xl">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Lock className="w-6 h-6" />
            </div>
            <CardTitle className="text-2xl font-extrabold tracking-tight">Admin Login</CardTitle>
            <CardDescription>Enter your credentials to access the portal</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  placeholder="Enter username" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Enter password" 
                />
              </div>
              
              {error && <p className="text-sm font-semibold text-destructive mt-2">{error}</p>}
              
              <Button type="submit" className="w-full mt-4 bg-primary font-bold">
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/40 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Site</Link>
            </Button>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">Admin Portal</h1>
              <p className="text-muted-foreground text-sm">Manage website events</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="text-muted-foreground hover:text-foreground">
            Sign Out
          </Button>
        </div>

        {/* Editor Form */}
        <Card className="shadow-lg border-border/50">
          <CardHeader className="bg-muted/30 border-b pb-6">
            <CardTitle>{editingId ? "Edit Event" : "Create New Event"}</CardTitle>
            <CardDescription>Fill out the details below. Images are saved locally.</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Lagos Water Festival" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="e.g. July 2026" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tag">Tag / Status</Label>
                <Input id="tag" value={tag} onChange={(e) => setTag(e.target.value)} placeholder="e.g. upcoming" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Upload Image</Label>
                <div className="flex items-center gap-3">
                  <Input id="image" type="file" accept="image/*" onChange={handleImageUpload} className="cursor-pointer file:cursor-pointer pb-2 text-xs h-10" />
                  {image && (
                    <div className="w-10 h-10 rounded-md overflow-hidden bg-muted border flex-shrink-0">
                      <img src={image} className="w-full h-full object-cover" alt="Preview" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="desc">Description</Label>
              <Textarea id="desc" rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Brief description about the event..." />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              {editingId && (
                <Button variant="ghost" onClick={resetForm}>Cancel</Button>
              )}
              <Button onClick={handleSave} className="font-semibold px-8 py-2 bg-primary text-primary-foreground rounded-md shadow-sm hover:bg-primary/90 transition-colors">
                {editingId ? "Save Changes" : "Publish Event"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Existing Events List */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight">Current Events ({events.length})</h2>
          
          <div className="grid gap-4">
            {events.map((e) => (
              <Card key={e.id} className="overflow-hidden transition-all hover:shadow-md border-border/60">
                <div className="flex flex-col md:flex-row">
                  {/* Thumbnail */}
                  <div className="w-full md:w-48 h-32 md:h-auto bg-muted relative flex-shrink-0">
                    {e.image ? (
                      <img src={e.image} alt={e.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <ImageIcon className="w-8 h-8 opacity-20" />
                      </div>
                    )}
                    <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded backdrop-blur-sm">
                      {e.tag}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow p-5 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg leading-tight capitalize">{e.title}</h3>
                        <p className="text-xs font-medium text-primary mt-1">{e.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => editEvent(e)}>Edit</Button>
                        <Button variant="destructive" size="sm" onClick={() => deleteEvent(e.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{e.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
            
            {events.length === 0 && (
              <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-xl border-border/60 bg-muted/20">
                <p>No events found. Create one above to get started.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
