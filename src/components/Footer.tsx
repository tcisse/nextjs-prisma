import React from "react";
import PageContainer from "./page-container";
import { CATEGORIES } from "../../utils/categories";
import { Category } from "../../types";
import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="p-4 border-t">
      <PageContainer>
        <div className="flex md:flex-row flex-col items-center justify-between">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-blue-600">
            NextBlog
          </h1>
          <div className="flex md:flex-row flex-col gap-2">
            {CATEGORIES.map((category: Category) => (
              <div key={category.id}>
                <Link href={`/categories/${category.slug}`}>
                  <Button variant="ghost">{category.name}</Button>
                </Link>
              </div>
            ))}
            <Button variant="ghost">
              <Link href="/write">Write A Post</Link>
            </Button>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
