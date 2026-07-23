import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Praveenkumar P | Premium Portfolio | UI/UX Designer & Frontend Developer",
  description: "Portfolio of Praveenkumar P, a UI/UX Designer, Brand Designer, and Frontend Developer with 4+ years of experience. Crafting modern, high-end digital experiences.",
  keywords: ["UI/UX Designer", "Frontend Developer", "Brand Designer", "Flutter Developer", "Portfolio", "Apple Design", "Linear Design"],
  authors: [{ name: "Praveenkumar P" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-FOUC (Flash of Unstyled Content) script to set theme before React renders */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 relative antialiased flex flex-col transition-colors duration-500">
        {/* Background Gradients and Ornaments */}
        <div className="glow-container">
          <div className="glow-blob glow-primary top-0 left-1/4 animate-pulse-slow" />
          <div className="glow-blob glow-secondary top-1/3 right-1/4 animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="glow-blob glow-accent bottom-10 left-10 animate-pulse-slow" style={{ animationDelay: '4s' }} />
        </div>
        <div className="grid-overlay" />
        
        {/* Main Application */}
        <div className="relative z-10 flex flex-col min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
