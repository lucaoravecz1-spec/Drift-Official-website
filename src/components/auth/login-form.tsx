"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const registered = searchParams.get("registered");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
        callbackURL: "/",
      });

      if (error?.code) {
        toast.error("Invalid email or password. Please make sure you have already registered an account and try again.");
        setIsLoading(false);
        return;
      }

      toast.success("Welcome back!");
      router.push("/");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <Link href="/" className="flex items-center justify-center gap-3 mb-8">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/20251117_2025_Black-Logo-Design_remix_01kaa8z5p2etgs2pb6tmgsdd6n-1763852170951.png?width=8000&height=8000&resize=contain"
          alt="Drift AI Logo"
          width={40}
          height={40}
          className="brightness-0 invert"
        />
        <span className="text-3xl font-display font-normal text-white tracking-tight">Drift</span>
      </Link>

      {/* Card */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-normal text-white mb-2">Welcome back</h1>
          <p className="text-white/60">Sign in to your account</p>
        </div>

        {registered && (
          <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-2xl">
            <p className="text-sm text-accent text-center">Account created successfully! Please sign in.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="off"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors pr-12"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              checked={formData.rememberMe}
              onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
              className="w-4 h-4 bg-white/5 border border-white/20 rounded focus:ring-accent focus:ring-offset-0 focus:ring-2 text-accent"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-white/60">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-black font-medium py-3 px-6 rounded-full transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-white/60 text-sm">
            Don't have an account?{" "}
            <Link href="/register" className="text-accent hover:text-accent/80 font-medium transition-colors">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
