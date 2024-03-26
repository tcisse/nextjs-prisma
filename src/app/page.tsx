import PageContainer from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { CATEGORIES } from "../../utils/categories";
import { Category, POSTS } from "../../types";
import Link from "next/link";
import { PostsList } from "@/components";

export default function Home() {
  return (
    <PageContainer>
      <div className="py-10">
        <div
          className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          style={{ backgroundImage: "url(/assets/cover.jpg)" }}
        >
          <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="sm:max-w-xl max-w-xs bg-secondary/80 p-4 rounded-xl">
              <h1 className="font-bold text-center text-3xl sm:text-5xl text-black dark:text-white mb-10">
                Become A Better React Developper
              </h1>
              <Input
                type="email"
                placeholder="Email"
                className="dark:bg-white"
              />
              <Button size="lg" className="w-full py-6 text-xl mt-4">
                Suscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
          {CATEGORIES.map((category: Category) => (
            <Button variant="outline" key={category.id}>
              <Link href={`/category/${category.slug}`}>{category.name}</Link>
            </Button>
          ))}
        </div>
        <PostsList posts={POSTS} />
      </div>
    </PageContainer>
  );
}
