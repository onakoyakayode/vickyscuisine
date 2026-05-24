"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/authStore";
import { Loader2, Save, Lock } from "lucide-react";
import toast from "react-hot-toast";

export default function SettingsPage() {
  const { user } = useAuthStore();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changePwMutation = useMutation({
    mutationFn: async () => {
      if (newPassword !== confirmPassword) throw new Error("Passwords do not match");
      if (newPassword.length < 8) throw new Error("Password must be at least 8 characters");
      const res = await fetch(`/api/users/${user?.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: newPassword }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
    },
    onSuccess: () => {
      toast.success("Password changed successfully");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    },
    onError: (e: Error) => toast.error(e.message),
  });

  return (
    <div className="p-4 md:p-6 space-y-5 max-w-xl">
      <div>
        <h1 className="text-[#fdf9ec] font-display text-xl font-bold">Settings</h1>
        <p className="text-[#5a4020] text-xs mt-0.5">System configuration</p>
      </div>

      {/* Account Info */}
      <div className="bg-[#1a1208] border border-[#3d2b10] rounded-xl p-5 space-y-3">
        <h2 className="text-[#c9a84c] font-display font-semibold text-sm">My Account</h2>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-[#5a4020] text-xs mb-1">Name</p>
            <p className="text-[#fdf9ec]">{user?.name}</p>
          </div>
          <div>
            <p className="text-[#5a4020] text-xs mb-1">Email</p>
            <p className="text-[#fdf9ec]">{user?.email}</p>
          </div>
          <div>
            <p className="text-[#5a4020] text-xs mb-1">Role</p>
            <span className="text-xs font-bold text-[#c9a84c] bg-[#c9a84c]/10 px-2 py-0.5 rounded uppercase">
              {user?.role}
            </span>
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-[#1a1208] border border-[#3d2b10] rounded-xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Lock size={15} className="text-[#c9a84c]" />
          <h2 className="text-[#c9a84c] font-display font-semibold text-sm">Change Password</h2>
        </div>
        <div className="space-y-3">
          {[
            { label: "New Password", value: newPassword, setter: setNewPassword },
            { label: "Confirm New Password", value: confirmPassword, setter: setConfirmPassword },
          ].map((f) => (
            <div key={f.label}>
              <label className="text-[#5a4020] text-xs uppercase tracking-wider mb-1.5 block">{f.label}</label>
              <input
                type="password"
                value={f.value}
                onChange={(e) => f.setter(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#0d0904] border border-[#3d2b10] rounded-lg px-3 py-2.5 
                  text-[#fdf9ec] text-sm focus:border-[#c9a84c] focus:outline-none"
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => changePwMutation.mutate()}
          disabled={changePwMutation.isPending || !newPassword || !confirmPassword}
          className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#e4c87a] text-[#1a1208] 
            font-semibold px-4 py-2.5 rounded-lg text-sm transition-all disabled:opacity-50"
        >
          {changePwMutation.isPending ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
          Update Password
        </button>
      </div>

      {/* System Info */}
      <div className="bg-[#1a1208] border border-[#3d2b10] rounded-xl p-5 space-y-3">
        <h2 className="text-[#c9a84c] font-display font-semibold text-sm">System Info</h2>
        <div className="text-sm space-y-2">
          {[
            ["Session Timeout", "30 minutes of inactivity"],
            ["Auth Method", "JWT (httpOnly cookie)"],
            ["Single Session", "Enabled — one device per user"],
            ["Audit Logging", "All actions logged"],
            ["Notification Flow", "WhatsApp API → SMS → wa.me deep link"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between">
              <span className="text-[#5a4020]">{k}</span>
              <span className="text-[#8a6e3a] text-right">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
