import { NextResponse } from 'next/server';
import { Post } from '../../../../../types';

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
  
export const GET = async(req: Request, {params}: {params : {slug: string}}) => {

    const {slug} = params;
    // api/posts/react-navigation
    // slug en params
    // -> db -> post

    return NextResponse.json(POST, {status: 200})
}