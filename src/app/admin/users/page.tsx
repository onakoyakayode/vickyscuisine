"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { formatDateTime } from "@/lib/utils";
import { useAuthStore } from "@/store/authStore";
import { Plus, Pencil, UserX, UserCheck, X, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

type Role = "SUPERADMIN" | "ADMIN" | "CASHIER";

interface UserForm {
  name: string;
  email: string;
  password: string;
  role: Role;
}

export default function UsersPage() {
  const qc = useQueryClient();
  const { user: me } = useAuthStore();
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState<UserForm>({ name: "", email: "", password: "", role: "CASHIER" });

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("/api/users");
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
      return json.data.users;
    },
  });

  const createMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
      return json.data.user;
    },
    onSuccess: () => {
      toast.success("User created");
      qc.invalidateQueries({ queryKey: ["users"] });
      setShowModal(false);
      resetForm();
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<UserForm> & { isActive?: boolean } }) => {
      const res = await fetch(`/api/users/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
    },
    onSuccess: () => {
      toast.success("User updated");
      qc.invalidateQueries({ queryKey: ["users"] });
      setShowModal(false);
      setEditId(null);
      resetForm();
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const resetForm = () => setForm({ name: "", email: "", password: "", role: "CASHIER" });

  const openEdit = (user: Record<string, unknown>) => {
    setEditId(user.id as string);
    setForm({ name: user.name as string, email: user.email as string, password: "", role: user.role as Role });
    setShowModal(true);
  };

  const handleSubmit = () => {
    if (editId) {
      const payload: Partial<UserForm> = { name: form.name, email: form.email, role: form.role };
      if (form.password) payload.password = form.password;
      updateMutation.mutate({ id: editId, data: payload });
    } else {
      createMutation.mutate();
    }
  };

  const isSaving = createMutation.isPending || updateMutation.isPending;

  return (
    <div className="p-4 md:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#fdf9ec] font-display text-xl font-bold">Users</h1>
          <p className="text-[#5a4020] text-xs mt-0.5">Staff account management</p>
        </div>
        {me?.role === "SUPERADMIN" && (
          <button
            onClick={() => { resetForm(); setEditId(null); setShowModal(true); }}
            className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#e4c87a] text-[#1a1208] 
              font-semibold px-4 py-2 rounded-lg text-sm transition-all"
          >
            <Plus size={15} />
            Add User
          </button>
        )}
      </div>

      <div className="bg-[#1a1208] border border-[#3d2b10] rounded-xl overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-[#5a4020]">Loading…</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#3d2b10]">
                  {["Name", "Email", "Role", "Status", "Last Session", ""].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-[#5a4020] text-xs uppercase tracking-wider font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a1e0a]">
                {data?.map((user: Record<string, unknown>) => {
                  const session = user.activeSession as { createdAt: string; ip: string } | null;
                  return (
                    <tr key={user.id as string} className="hover:bg-[#2a1e0a] transition-colors">
                      <td className="px-4 py-3">
                        <p className="text-[#fdf9ec] font-medium">{user.name as string}</p>
                      </td>
                      <td className="px-4 py-3 text-[#8a6e3a]">{user.email as string}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wider
                          ${user.role === "SUPERADMIN" ? "bg-purple-900/30 text-purple-400" :
                            user.role === "ADMIN" ? "bg-blue-900/30 text-blue-400" :
                            "bg-[#3d2b10] text-[#8a6e3a]"}`}>
                          {user.role as string}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${user.isActive ? "text-green-400 border-green-600/30" : "text-red-400 border-red-600/30"}`}>
                          {user.isActive ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[#5a4020] text-xs">
                        {session ? (
                          <>
                            {formatDateTime(session.createdAt).date}
                            <br />
                            <span className="text-[#3a2510]">IP: {session.ip}</span>
                          </>
                        ) : "No active session"}
                      </td>
                      <td className="px-4 py-3">
                        {me?.role === "SUPERADMIN" && user.id !== me.id && (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => openEdit(user)}
                              className="text-[#8a6e3a] hover:text-[#c9a84c] transition-colors"
                            >
                              <Pencil size={14} />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`${user.isActive ? "Deactivate" : "Reactivate"} ${user.name}?`)) {
                                  updateMutation.mutate({ id: user.id as string, data: { isActive: !user.isActive } });
                                }
                              }}
                              className={`transition-colors ${user.isActive ? "text-[#8a6e3a] hover:text-red-400" : "text-[#8a6e3a] hover:text-green-400"}`}
                            >
                              {user.isActive ? <UserX size={14} /> : <UserCheck size={14} />}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1208] border border-[#3d2b10] rounded-2xl p-6 w-full max-w-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-[#c9a84c] font-display font-semibold">
                {editId ? "Edit User" : "Add User"}
              </h2>
              <button onClick={() => setShowModal(false)} className="text-[#5a4020] hover:text-[#fdf9ec]">
                <X size={18} />
              </button>
            </div>
            {[
              { label: "Name", key: "name", type: "text", placeholder: "Full name" },
              { label: "Email", key: "email", type: "email", placeholder: "email@example.com" },
              { label: editId ? "New Password (leave blank to keep)" : "Password", key: "password", type: "password", placeholder: "••••••••" },
            ].map((f) => (
              <div key={f.key}>
                <label className="text-[#5a4020] text-xs uppercase tracking-wider mb-1.5 block">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key as keyof UserForm]}
                  onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                  className="w-full bg-[#0d0904] border border-[#3d2b10] rounded-lg px-3 py-2.5 
                    text-[#fdf9ec] text-sm focus:border-[#c9a84c] focus:outline-none"
                />
              </div>
            ))}
            <div>
              <label className="text-[#5a4020] text-xs uppercase tracking-wider mb-1.5 block">Role</label>
              <select
                value={form.role}
                onChange={(e) => setForm((p) => ({ ...p, role: e.target.value as Role }))}
                className="w-full bg-[#0d0904] border border-[#3d2b10] rounded-lg px-3 py-2.5 
                  text-[#fdf9ec] text-sm focus:border-[#c9a84c] focus:outline-none"
              >
                <option value="CASHIER">Cashier</option>
                <option value="ADMIN">Admin</option>
                <option value="SUPERADMIN">Superadmin</option>
              </select>
            </div>
            <button
              onClick={handleSubmit}
              disabled={isSaving}
              className="w-full bg-[#c9a84c] hover:bg-[#e4c87a] text-[#1a1208] font-bold py-2.5 
                rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {isSaving ? <Loader2 size={16} className="animate-spin" /> : editId ? "Save Changes" : "Create User"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
