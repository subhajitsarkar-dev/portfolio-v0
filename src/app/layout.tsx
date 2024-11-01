import { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import ThemeProvider from "@/components/providers/ThemeProvider";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <Header />

          <main className="container mx-auto max-w-screen-lg px-6">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
