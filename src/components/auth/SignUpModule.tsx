"use client";
import { useState } from "react";
import { useFormik, FormikProps } from "formik";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import Link from "next/link";
import SignUpForm from "./SignUpForm";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SignUpModule() {
  const [isCreator, setIsCreator] = useState(false);
  const router = useRouter();
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <CardDescription>
            Enter your details to create a new account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs value={isCreator ? "creator" : "user"} className="w-full">
            <TabsList className="grid grid-cols-2 gap-2">
              <TabsTrigger
                value="user"
                onClick={() => setIsCreator(false)}
                className="px-4 py-2 text-sm font-medium"
              >
                User
              </TabsTrigger>
              <TabsTrigger
                value="creator"
                onClick={() => setIsCreator(true)}
                className="px-4 py-2 text-sm font-medium"
              >
                Creator
              </TabsTrigger>
            </TabsList>
            <TabsContent value="user" className="mt-4">
              <SignUpForm isCreator={isCreator} />
            </TabsContent>
            <TabsContent value="creator" className="mt-4">
              <SignUpForm isCreator={isCreator} />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="text-center text-sm flex gap-2 ">
          Already have an account?{" "}
          <Link className="font-medium text-blue-600 hover:underline" href="/login">
            Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
