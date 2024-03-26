import PageContainer from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import React from "react";

export default function Login() {
  return (
    <PageContainer>
      <div>
        <h1 className="text-4xl font-bold text-center mb-10">
          Login or Register
        </h1>
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <Button>
            <Github className="mr-3" />
            Signin with Github
          </Button>
          <Button>
            <Mail className="mr-3" />
            Signin with Github
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
