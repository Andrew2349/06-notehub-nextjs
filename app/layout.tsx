
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanstackProvider from "@/components/TanStackProvider/TanStackProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
        <Header></Header>
        {children}
          <Footer></Footer>
          </TanstackProvider>
      </body>
    </html>
  );
}
