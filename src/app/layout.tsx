import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";
import "./globals.css";
import React from "react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col justify-between bg-blue-500">
        <div className="sticky top-0 w-full bg-blue-500  "> <Navbar/> </div>
        <div className=" h-full ">  {children}</div>

        <div className=" sticky bottom-0 w-full">
        <Footer/>
        </div>
        
        
        
       
      </body>
    </html>
  );
}
