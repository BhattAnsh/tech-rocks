"use client"

import { useState } from "react"
import { File, FileText, Folder, Grid, List, MoreHorizontal, Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export default function FilesPage() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid")
  const projects = [
    {
      id: "1",
      name: "News Website",
      type: "folder",
      description: "News website with innovation and glitz in mrn- refined Tabloids",
      downloadUrl: "/files/news-website-main.zip"
    },
    { 
      id: "2",
      name: "Unimapper Mindmap",
      type: "folder",
      description: "diagram tool for mind mapping and creative thinking for individual and team collaboration.",
      downloadUrl: "/files/5622.rar"
    },
    {
      id: "3",
      name: "Habitation",
      type: "folder",
      description: "Build fundamentals to build new habits with incorporated gamification.",
      downloadUrl: "/files/news-website-main.zip"
    },
  ]

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
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        {project.type === "folder" ? (
                          <Folder className="h-10 w-10 text-blue-500" />
                        ) : (
                          <FileText className="h-10 w-10 text-gray-500" />
                        )}
                        <div>
                          <h3 className="font-medium">{project.name}</h3>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
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
                          <DropdownMenuItem asChild>
                            <a href={project.downloadUrl} download>Download Project</a>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
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
                    <div>
                      <span className="font-medium">{project.name}</span>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
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
                      <DropdownMenuItem asChild>
                        <a href={project.downloadUrl} download>Download Project</a>
                      </DropdownMenuItem>
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


