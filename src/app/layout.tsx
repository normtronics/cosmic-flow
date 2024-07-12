import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { Header } from "@/components/header/header";
import { ApolloWrapper } from "@/apollo/apollo-wrapper";
import { Footer } from "@/components/footer/footer";
import { getMetadata } from "@/util/get-metadata";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "400", "500", "700", "800", "900"]  })

export const metadata: Metadata = getMetadata('In The Cosmic Flow | Home', 'ruby2.jpg', 'In The Cosmic Flow | Home', '' )

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
