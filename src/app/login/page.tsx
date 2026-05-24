"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";
import { Eye, EyeOff, Loader2, Lock } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin/dashboard";
  const reason = searchParams.get("reason");
  const { setUser } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  const loginMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Login failed");
      return data.data;
    },
    onSuccess: (data) => {
      setUser({
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        role: data.user.role,
        sessionId: "",
      });
      toast.success(`Welcome back, ${data.user.name}!`);
      router.push(from);
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    loginMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-[#21c55e] font-sans flex items-center justify-center p-4">
      {/* Background texture */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMzAgMzBtLTI4IDBhMjgsMjggMCAxLDAgNTYsMGEyOCwyOCAwIDEsMCAtNTYsMCIgc3Ryb2tlPSIjM2QyYjEwIiBzdHJva2Utd2lkdGg9IjAuMyIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-30" />

      <div className="relative w-full max-w-sm">
        {/* Card */}
        <div className="bg-[#fff] border border-[#fff] rounded-2xl p-8 shadow-2xl shadow-black/50">
          {/* Logo */}
          <div className="text-center mb-8">
            <div
              className="w-14 h-14 bg-green-400/10 border border-green-400/30 rounded-2xl 
              flex items-center justify-center mx-auto mb-4"
            >
              <Lock className="text-[#085208]" size={24} />
            </div>
            <h1 className="font-sans text-[#085208] text-2xl font-bold">
              Vicky's Cuisine
            </h1>
            <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">
              Staff Portal
            </p>
          </div>

          {reason === "inactivity" && (
            <div className="bg-amber-900/20 border border-amber-600/30 rounded-lg px-3 py-2 mb-5 text-center">
              <p className="text-amber-400 text-xs">
                Session expired due to inactivity. Please log in again.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#085208] text-xs uppercase tracking-wider mb-1.5 font-medium">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="staff@vickyscuisine.com"
                autoComplete="email"
                className="w-full bg-cream-50 border border-cream-200 rounded-xl
                  pl-3 pr-4 py-3 text-sm text-green-900 placeholder-cream-500
                  focus:border-green-400 focus:ring-2 focus:ring-green-100 
                  focus:outline-none focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-[#085208] text-xs uppercase tracking-wider mb-1.5 font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="w-full bg-cream-50 border border-cream-200 rounded-xl
                  pl-3 pr-4 py-3 text-sm text-green-900 placeholder-cream-500
                  focus:border-green-400 focus:ring-2 focus:ring-green-100 
                  focus:outline-none focus:bg-white transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#085208] hover:text-[#085208]/40"
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full bg-green-500 hover:bg-green-600 active:scale-[0.99]
              disabled:bg-cream-200 disabled:text-cream-400 disabled:cursor-not-allowed
              text-white font-bold py-4 rounded-2xl transition-all duration-200
              flex items-center justify-center gap-2 text-sm shadow-sm hover:shadow-md"
            >
              {loginMutation.isPending ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-gray-300">
            <a
              href="/"
              className="block text-center text-[#085208] hover:text-gray-600 text-xs transition-colors"
            >
              ← Back to customer ordering
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
