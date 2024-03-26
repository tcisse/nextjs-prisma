"use client";

import React from "react";
import { Post } from "../../../types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageContainer from "@/components/page-container";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

export default function SinglePostPage() {
  const POST: Post = {
    id: 1,
    category: "React",
    title: "React State Management: Choosing the Right Solution",
    image: "/react-state-management.jpg",
    caption:
      "Explore different state management solutions in React and choose the one that fits your needs.",
    date: "2023-01-15",
    minutesToRead: 10,
    author: "John ReactDev",
    nbViews: 25,
    nbComments: 8,
    slug: "react-state-management-choosing-right-solution",
    content: "Ad consectetur excepteur laboris sed ad duis ex nostrud sed cillum dolore irure non velit cillum et ipsum quis velit do et mollit qui ut do est minim qui amet deserunt in minim tempor amet enim id officia tempor culpa elit lorem officia adipiscing culpa exercitation laborum sint adipiscing ea excepteur nulla sint commodo ea labore nostrud voluptate commodo duis irure nostrud veniam cillum eu irure quis veniam dolor et nisi quis anim do incididunt mollit ullamco anim esse in proident ullamco cupi"
  };
  return (
    <PageContainer>
      <div className="p-4">
        <div
          className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          style={{ backgroundImage: "url(/assets/cover.jpg)" }}
        >
          <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="sm:max-w-xl max-w-xs bg-secondary/80 p-4 rounded-xl">
              <h1 className="font-bold text-center text-3xl sm:text-5xl text-black dark:text-white mb-10">
              {POST.title}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-3 mb-4">
          <div className="flex justify-center items-center gap-3"> 
            <Avatar > 
              <AvatarImage>
                {POST.author}
              </AvatarImage>
            </Avatar>
            <div>
              <p>{POST.author}</p>
              <p className="text-slate-500 text-sm">Posted on {new Date(POST.date).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <MessageCircle size={15} className="text-slate-500" />
              <p>{POST.nbComments}</p>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={15} className="text-slate-500" />
              <p>{POST.nbViews}</p>
            </div>
          </div>
        </div>
        <Separator />
        <div className="mt-6" dangerouslySetInnerHTML={{__html: POST.content as string}} />
      </div>
    </PageContainer>
  );
}
