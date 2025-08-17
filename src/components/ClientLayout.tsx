"use client";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle />
      </div>
      {children}
    </>
  );
}
