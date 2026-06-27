import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OfflineIndicator } from "@/components/OfflineIndicator";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import { PersonalisationProvider } from "@/lib/PersonalisationContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zephyr International Airport | AER",
  description: "Your passenger experience platform for Zephyr International Airport.",
  manifest: "/manifest.json"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PersonalisationProvider>
          <ServiceWorkerRegistration />
          <OfflineIndicator />
          <Header />
          {children}
          <Footer />
        </PersonalisationProvider>
      </body>
    </html>
  );
}
