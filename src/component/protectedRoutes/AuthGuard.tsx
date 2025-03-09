"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store"; 
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";
import { toast } from "react-toastify";

interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (!token) {
      router.push("/auth/login"); // Redirect to login if not authenticated
      toast.error("You need to login first");
    }
  }, [token, router]);

  if (!token) {
    return null; // Avoid rendering the protected content while redirecting
  }

  return <>{children}</>;
}