"use client"

import { useState } from "react"
import { File, FileText, Folder, Grid, List, MoreHorizontal, Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export default function FilesPage() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid")

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden w-64 border-r p-4 md:block">
        <nav className="space-y-2">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg bg-secondary px-3 py-2 text-secondary-foreground"
          >
            <Folder className="h-4 w-4" />
            All Projects
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 border-b bg-background">
          <div className="flex h-16 items-center gap-4 px-4">
            <div className="flex flex-1 items-center gap-4">
              <div className="relative flex-1 md:max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search projects..." className="pl-8" />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewType === "grid" ? "secondary" : "ghost"}
                  size="icon"
                  onClick={() => setViewType("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewType === "list" ? "secondary" : "ghost"}
                  size="icon"
                  onClick={() => setViewType("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="p-4">
          {viewType === "grid" ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {projects.map((project) => (
                <div key={project.id} className="group relative rounded-lg border p-3 hover:border-primary">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      {project.type === "folder" ? (
                        <Folder className="h-10 w-10 text-blue-500" />
                      ) : (
                        <FileText className="h-10 w-10 text-gray-500" />
                      )}
                      <div>
                        <h3 className="font-medium">{project.name}</h3>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Project</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group flex items-center justify-between p-3 hover:bg-muted ${
                    index !== projects.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {project.type === "folder" ? (
                      <Folder className="h-5 w-5 text-blue-500" />
                    ) : (
                      <File className="h-5 w-5 text-gray-500" />
                    )}
                    <span className="font-medium">{project.name}</span>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Project</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

const projects = [
  {
    id: "1",
    name: "Marketing Website",
    type: "folder",
  },
  {
    id: "2",
    name: "E-commerce Platform",
    type: "folder",
  },
  {
    id: "3",
    name: "Mobile App",
    type: "folder",
  },
  {
    id: "4",
    name: "Documentation",
    type: "file",
  },
  {
    id: "5",
    name: "Design System",
    type: "folder",
  },
  {
    id: "6",
    name: "API Specification",
    type: "file",
  },
]

