import type React from "react"
import "@/app/globals.css"
import { SpaceFont } from "@/components/space-font"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SidebarProvider } from "@/components/ui/sidebar"
import { PortfolioSidebar } from "@/components/portfolio-sidebar"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Deo Sagar Kumar - Portfolio",
  description: "Personal portfolio of Deo Sagar Kumar, showcasing AI/ML, full-stack web, and mobile development projects",
  icons: {
    icon: "/circle.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${SpaceFont.className} bg-[#030014] text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SidebarProvider>
            <div className="flex min-h-screen mx-auto  ">
              <PortfolioSidebar />
              <div className="flex-1 flex flex-col">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
