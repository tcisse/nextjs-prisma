import { PostsList } from "@/components";
import PageContainer from "@/components/page-container";
import React from "react";
import { POSTS } from "../../../types";

type SlugProps = {
  params: {
    slug: string;
  };
};

export default function Categories({ params }: SlugProps) {
  const { slug } = params;

  return <PageContainer>
    <div className="py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        {slug.replace("-", " ")}
      </h1>
      <PostsList posts={POSTS} />
    </div>
  </PageContainer>;
}
