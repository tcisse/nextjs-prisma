import React from "react";
import { Post } from "../../types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { MessageCircle } from "lucide-react";

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card className="flex flex-col justify-between rounded-lg border-2">
        <CardHeader>
          <div className=" aspect-square relative">
            <Image
              src={"/assets/cover.jpg"}
              fill
              className=" aspect-square object-cover transition-all duration-300 hover:scale-110"
              alt={post.title}
            />
          </div>
          <p className="font-semibold text-lg mt-3">{post.title}</p>
        </CardHeader>
        <CardContent>
          <Badge variant="outline">{post.category}</Badge>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <MessageCircle size={15} className="text-slate-500" />
              <p>{post.nbComments}</p>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={15} className="text-slate-500" />
              <p>{post.nbViews}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
