import "../styles/globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PromptR Ai",
  description: "Discover and share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html className="en">
      <body>
        <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
