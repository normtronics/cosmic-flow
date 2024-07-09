import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { impact } from "@/fonts/fonts";
import { Header } from "@/components/header/header";
import { ApolloWrapper } from "@/apollo/apollo-wrapper";
import { Footer } from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "400", "500", "700", "800", "900"]  })

export const metadata: Metadata = {
  title: "Femmifesting - In The Cosmic Flow",
  description: "In the cosmic flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ApolloWrapper>
          <Header />
          {children}
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}
