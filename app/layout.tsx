import { Geist, Geist_Mono, JetBrains_Mono, Instrument_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner"
import Link from "next/link";

const instrumentSansHeading = Instrument_Sans({subsets:['latin'],variable:'--font-heading'});

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, "font-mono", jetbrainsMono.variable, instrumentSansHeading.variable)}
    >
      <body>

        <nav className="w-full border-b ">
          <div className="container flex h-16 items-center space-x-4 mx-4 sm:space-x-6">
              <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              DNS Lookup
            </Link>
            <div className="mx-auto">

            <Link
              href="/history"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              History
            </Link>
            </div>
            
          </div>

        </nav>
        <Toaster />

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
