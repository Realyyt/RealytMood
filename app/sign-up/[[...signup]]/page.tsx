import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <SignUp
      path="/sign-up"
      routing="path"
      fallbackRedirectUrl="/new-user"
      signInFallbackRedirectUrl="/new-user"
    />
  );
}

