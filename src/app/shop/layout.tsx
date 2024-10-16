import type { Metadata } from "next";

import Footer from "@/sections/Footer";
import Promises from "@/sections/Promises";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main className="font-sans ">{children}</main>
        <div>
          <Promises />
        </div>
        <Footer />
      </body>
    </html>
  );
}
