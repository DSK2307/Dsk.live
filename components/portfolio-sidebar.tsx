"use client"

import { Home, User, Code, Wrench, Send, FileText, Github, Mail, Linkedin, InstagramIcon, CodeIcon, Briefcase } from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Image from "next/image"

export function PortfolioSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon" className="border-r border-white/10">
      <SidebarHeader className="flex pl-12 items-center justify-center p-4">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full  blur-sm"></div>
    <Image src="/tlogo.png" alt="Logo" width={100} height={100} />
    </div>
      </SidebarHeader>
      <SidebarContent className="bg-black/60 backdrop-blur-md ">
        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-400">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Home" className="hover:bg-white/10 data-[active=true]:bg-white/10">
                  <Link href="/">
                    <Home className="text-blue-400" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="About" className="hover:bg-white/10 data-[active=true]:bg-white/10">
                  <Link href="#about">
                    <User className="text-blue-400" />
                    <span>About</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Experience" className="hover:bg-white/10 data-[active=true]:bg-white/10">
                  <Link href="#experience">
                    <Briefcase className="text-blue-400" />
                    <span>Experience</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Skills"
                  className="hover:bg-white/10 data-[active=true]:bg-white/10"
                >
                  <Link href="#skills">
                    <Wrench className="text-blue-400" />
                    <span>Skills</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Projects"
                  className="hover:bg-white/10 data-[active=true]:bg-white/10"
                >
                  <Link href="#projects">
                    <Code className="text-blue-400" />
                    <span>Projects</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Contact"
                  className="hover:bg-white/10 data-[active=true]:bg-white/10"
                >
                  <Link href="#contact">
                    <Send className="text-blue-400" />
                    <span>Contact</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="bg-white/10" />

        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-400">Connect</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Email" className="hover:bg-white/10">
                  <a href="mailto:deosagar150@gmail.com">
                    <Mail className="text-blue-400" />
                    <span>Email</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="GitHub" className="hover:bg-white/10">
                  <a href="https://github.com/DSK2307" target="_blank" rel="noopener noreferrer">
                    <Github className="text-blue-400" />
                    <span>GitHub</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="LinkedIn" className="hover:bg-white/10">
                  <a href="https://www.linkedin.com/in/deo-sagar-kumar-995951251/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="LeetCode" className="hover:bg-white/10">
                  <a href="https://leetcode.com/u/deosagar150/" target="_blank" rel="noopener noreferrer">
                    <CodeIcon className="text-blue-400" />
                    <span>LeetCode</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Codeforces" className="hover:bg-white/10">
                  <a href="https://codeforces.com/profile/Dsk2307" target="_blank" rel="noopener noreferrer">
                    <Code className="text-blue-400" />
                    <span>Codeforces</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-black/60 backdrop-blur-md p-4">
        <div className="text-xs text-center text-zinc-500">© {new Date().getFullYear()} Deo Sagar Kumar</div>
      </SidebarFooter>
    </Sidebar>
  )
}
