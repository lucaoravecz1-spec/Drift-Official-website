"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { Eye, EyeOff, Loader2 } from "lucide-react";

type ErrorTypes = Partial<Record<keyof typeof authClient.$ERROR_CODES, string>>;
const errorCodes = {
  USER_ALREADY_EXISTS: "Email already registered. Please sign in instead.",
} satisfies ErrorTypes;

const getErrorMessage = (code: string) => {
  if (code in errorCodes) {
    return errorCodes[code as keyof typeof errorCodes];
  }
  return "Registration failed. Please try again.";
};

export default function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    // Validate password length
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await authClient.signUp.email({
        email: formData.email,
        name: formData.name,
        password: formData.password,
      });

      if (error?.code) {
        toast.error(getErrorMessage(error.code));
        setIsLoading(false);
        return;
      }

      toast.success("Account created successfully!");
      router.push("/login?registered=true");
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
          <h1 className="text-3xl font-display font-normal text-white mb-2">Create account</h1>
          <p className="text-white/60">Get started with Drift AI</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              placeholder="John Doe"
            />
          </div>

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
            <p className="text-xs text-white/40 mt-1">Must be at least 8 characters</p>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                autoComplete="off"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors pr-12"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
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
                Creating account...
              </>
            ) : (
              "Create account"
            )}
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-white/60 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-accent hover:text-accent/80 font-medium transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
