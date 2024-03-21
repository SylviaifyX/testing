import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "creating Header",
  description: "creating Nav and Footer page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Layout>
        {children}
        </Layout>
      </body>
    </html>
  );
}
