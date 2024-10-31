"use client";

import { useAuth } from "@/components/providers/auth-provider";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { redirect } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen bg-background">
      <div className="flex flex-col w-full">
        <header className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </div>
  );
}