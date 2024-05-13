import { FormikProps, useFormik } from "formik";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUpForm = ({ isCreator }: { isCreator: boolean }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      const signupEndpoint = isCreator
        ? "https://trapane-back.vercel.app/api/creator/signup"
        : "https://trapane-back.vercel.app/api/patron/signup";

      const res = await fetch(signupEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.username,
          email: values.email,
          password: values.password,
          profilePic:
            "https://static.vecteezy.com/system/resources/thumbnails/030/504/836/small_2x/avatar-account-flat-isolated-on-transparent-background-for-graphic-and-web-design-default-social-media-profile-photo-symbol-profile-and-people-silhouette-user-icon-vector.jpg",
        }),
      });
      const data = await res.json();
      if (res.ok) {
        router.push(isCreator ? `/creator/${values.username}` : "/login");
      }
      console.log(values);
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  console.log(typeof formik);
  return (
    <div className="space-y-2">
      <form onSubmit={formik.handleSubmit}>
        <div className="space-y-2 flex flex-col gap-3">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="Enter a username"
            required
            value={formik.values.username}
            onChange={formik.handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="m@example.com"
            required
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
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
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </Button>
          </div>
        </div>
        <div className="space-y-2 pb-4">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              required
              type={showConfirmPassword ? "text" : "password"}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            <Button
              type="button"
              variant="secondary"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
            </Button>
          </div>
        </div>
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};
export default SignUpForm;
