import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { CATEGORIES } from "../../utils/categories";
import { Category } from "../../types";

export default function ResponsiveMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-6 w-6 md:hidden" />
      </SheetTrigger>
      <SheetContent side="left">
        <div>
          <Link href="/write">
            <Button variant="ghost">Write A post</Button>
            <p>Categories</p>
            {CATEGORIES.map((category: Category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="block px-2 py-1 text-lg"
              >
                <Button variant="ghost">{category.name}</Button>
              </Link>
            ))}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
