import React from "react";
import PageContainer from "./page-container";
import { HeaderNavigation } from "./header-navigation";
import { ProfileButton } from "./profile-button";
import ResponsiveMenu from "./responsive-menu";

export function Header() {
  return (
    <header className="p-4 border-b">
      <PageContainer>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <ResponsiveMenu />
          </div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-blue-600">
            NextBlog
          </h1>
          <HeaderNavigation />
          <div className="flex items-center">
            <ProfileButton />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
