import { FormikProps, useFormik } from "formik";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = ({ isCreator }: { isCreator: boolean }) => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const loginEndpoint = isCreator
        ? "https://trapane-back.vercel.app/api/creator/login"
        : "https://trapane-back.vercel.app/api/patron/login";

      const res = await fetch(loginEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem(
          isCreator ? "creatorToken" : "patronToken",
          data.token
        );
        router.push(isCreator ? `/creator/${data.name}` : "/");
      }
      console.log(values);
    },
  });
  return (
    <div className="space-y-2">
      <form onSubmit={formik.handleSubmit} className="gap-3 flex flex-col">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="m@example.com"
          required
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link
              className="text-sm font-medium text-gray-500 hover:underline dark:text-gray-400"
              href="#"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative pb-2">
            <Input
              id="password"
              required
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <Button
              type="button"
              variant="secondary"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-[44%] -translate-y-1/2"
            >
              {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
            </Button>
          </div>
        </div>
        <Button className="w-full" type="submit">
          Login
        </Button>
      </form>
      <div className="flex gap-5 pt-3">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Don't have an account?
        </p>
        <Link
          className="text-sm font-medium  hover:underline text-blue-600 hover:font-bold "
          href="/signup"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};
export default LoginForm;
