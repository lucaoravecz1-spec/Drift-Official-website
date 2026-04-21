import { Suspense } from "react";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <Suspense fallback={
        <div className="w-full max-w-md">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-white/10 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-white/10 rounded w-1/2 mx-auto"></div>
              <div className="space-y-3 mt-8">
                <div className="h-12 bg-white/10 rounded-xl"></div>
                <div className="h-12 bg-white/10 rounded-xl"></div>
                <div className="h-12 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      }>
        <LoginForm />
      </Suspense>
    </div>
  );
}