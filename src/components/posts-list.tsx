import React from "react";
import { Post } from "../../types";
import { PostCard } from "./PostCard";

type Props = {
    posts: Post[];
};

export function PostsList({ posts }: Props) {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 grid-cols- gap-2 mt-6">
        {posts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
        ))}
    </div>
  );
}
