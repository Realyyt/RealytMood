import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return <SignUp path="/sign-up" signInFallbackRedirectUrl="/sign-in" />;
}
