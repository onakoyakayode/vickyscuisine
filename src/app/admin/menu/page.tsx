"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Search,
  Pencil,
  ChevronDown,
  Plus,
  Trash2,
  Star,
  ImageIcon,
  RefreshCw,
  UtensilsCrossed,
  AlertTriangle,
  X,
  Check,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────

type MenuItemRow = {
  id: string;
  name: string;
  slug: string;
  priceNGN: number;
  description: string | null;
  isAvailable: boolean;
  isFeatured: boolean;
  imageUrl?: string;
  publicId?: string;
  categoryId?: string;
};

type CategoryRow = {
  id: string;
  name: string;
  slug: string;
  items: MenuItemRow[];
};

type MenuApiResponse = {
  success: true;
  categories: CategoryRow[];
  updatedAt: string;
};

type ItemForm = {
  name: string;
  priceNGN: string;
  categoryId: string;
  isFeatured: boolean;
  imageUrl: string;
  publicId: string;
};

// ── API helpers ───────────────────────────────────────────────────────────────

async function fetchMenu(): Promise<MenuApiResponse> {
  const res = await fetch("/api/menu?available=false");
  const json = await res.json();
  if (!json.success) throw new Error(json.error);
  return json;
}

async function patchItem(
  id: string,
  data: Partial<MenuItemRow> & { imageUrl?: string; publicId?: string },
) {
  const res = await fetch(`/api/menu/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error);
  return json;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

async function createItem(data: Record<string, unknown>) {
  const res = await fetch("/api/menu/menu-item", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error);
  return json;
}

async function deleteItem(id: string) {
  const res = await fetch(`/api/menu/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error);
  return json;
}

async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch("/api/upload", { method: "POST", body: formData });
  return res.json();
}

const BLANK_FORM: ItemForm = {
  name: "",
  priceNGN: "",
  categoryId: "",
  isFeatured: false,
  imageUrl: "",
  publicId: "",
};

// ── Toast ─────────────────────────────────────────────────────────────────────

function Toast({ msg, ok }: { msg: string; ok: boolean }) {
  return (
    <div
      className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-5 py-3.5
        rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.18)] text-sm font-medium
        backdrop-blur-sm border animate-slide-up
        ${
          ok
            ? "bg-[#1A0F05]/95 text-[#E8B96A] border-[#C8963E]/30"
            : "bg-red-950/95 text-red-300 border-red-500/30"
        }`}
    >
      <span
        className={`w-2 h-2 rounded-full shrink-0 ${ok ? "bg-[#C8963E]" : "bg-red-400"}`}
      />
      {msg}
    </div>
  );
}

// ── Toggle ────────────────────────────────────────────────────────────────────

function Toggle({
  checked,
  onChange,
  disabled,
}: {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onChange}
      disabled={disabled}
      className={`relative inline-flex items-center h-6 w-11 rounded-full
        transition-colors duration-300 focus:outline-none
        ${checked ? "bg-[#C8963E]" : "bg-[#1A0F05]/20"}`}
    >
      <span
        className={`inline-block w-4 h-4 bg-white rounded-full shadow-sm transform
          transition-transform duration-300
          ${checked ? "translate-x-6" : "translate-x-1"}`}
      />
    </button>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <p className="text-[11px] font-sans font-semibold text-gray-400 tracking-[1px] uppercase mb-2">
        {label}
      </p>
      <p className="font-sans text-2xl font-bold text-gray-900">{value}</p>
      {sub && <p className="text-xs text-gray-500 mt-1">{sub}</p>}
    </div>
  );
}

// ── Shared Image Upload Field ─────────────────────────────────────────────────

function ImageUploadField({
  imageUrl,
  uploading,
  onClear,
  onUpload,
  optional,
}: {
  imageUrl: string;
  uploading: boolean;
  onClear: () => void;
  onUpload: (file: File) => Promise<void>;
  optional?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] font-sans font-bold text-gray-600 uppercase tracking-[1.5px] mb-1.5">
        Image{" "}
        {optional ? (
          <span className="text-gray-400 normal-case tracking-normal font-normal">
            (optional — keeps existing if unchanged)
          </span>
        ) : (
          "*"
        )}
      </label>

      {imageUrl ? (
        <div className="relative rounded-xl overflow-hidden h-36 group">
          <img
            src={imageUrl}
            alt="Preview"
            className="w-full h-full object-cover"
          />
          {/* Hover overlay */}
          <div
            className="absolute inset-0 bg-white flex items-center justify-center gap-2
                          opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <label
              className="bg-white text-gray-500 text-[11px] font-semibold px-3 py-1.5
                              rounded-lg cursor-pointer hover:bg-[#FDF8F2] transition-colors"
            >
              Change
              <input
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) onUpload(file);
                }}
              />
            </label>
            <button
              onClick={onClear}
              className="bg-red-500 text-white text-[11px] font-semibold px-3 py-1.5
                         rounded-lg hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          </div>
          {/* Upload spinner overlay */}
          {uploading && (
            <div className="absolute inset-0 bg-[#1A0F05]/60 flex flex-col items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span className="text-[11px] text-white">Uploading…</span>
            </div>
          )}
        </div>
      ) : (
        <label
          className="flex flex-col items-center justify-center h-28 rounded-xl border-2 border-dashed
                     border-[#C8963E]/30 bg-white cursor-pointer hover:border-gray-300
                     hover:bg-gray-100 transition-all gap-2 group"
        >
          {uploading ? (
            <>
              <div className="w-5 h-5 border-2 border-[#C8963E]/30 border-t-[#C8963E] rounded-full animate-spin" />
              <span className="text-[11px] text-gray-400">Uploading…</span>
            </>
          ) : (
            <>
              <ImageIcon
                size={20}
                className="text-gray-400 group-hover:text-gray-500 transition-colors"
              />
              <span className="text-[11px] text-gray-400">
                Click to upload image
              </span>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onUpload(file);
            }}
          />
        </label>
      )}
    </div>
  );
}

// ── Shared Modal Form Body ────────────────────────────────────────────────────

function ItemFormBody({
  form,
  setForm,
  categories,
  uploading,
  onUpload,
  imageOptional,
}: {
  form: ItemForm;
  setForm: (f: ItemForm) => void;
  categories: CategoryRow[];
  uploading: boolean;
  onUpload: (file: File) => Promise<void>;
  imageOptional?: boolean;
}) {
  return (
    <div className="p-7 space-y-4 overflow-y-auto max-h-[65vh] font-sans">
      {/* Name */}
      <div>
        <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-[1.5px] mb-1.5">
          Item Name *
        </label>
        <input
          placeholder="e.g. Jollof Rice & Chicken"
          className="w-full px-3.5 py-2.5 text-[13px] border border-[#C8963E]/20 rounded-xl
                     focus:outline-none focus:border-gray-200 focus:ring-2 focus:ring-[#C8963E]/10
                     bg-white text-gray-500 font-medium  placeholder:text-gray-400"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      {/* Price */}
      <div>
        <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-[1.5px] mb-1.5">
          Price (₦) *
        </label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[13px] text-gray-600 font-medium">
            ₦
          </span>
          <input
            placeholder="0"
            type="number"
            className="w-full pl-7 pr-3.5 py-2.5 text-[13px] border border-[#C8963E]/20 rounded-xl
                      focus:outline-none focus:border-gray-200 focus:ring-2 focus:ring-[#C8963E]/10
                     bg-white text-gray-500 font-medium  placeholder:text-gray-400"
            value={form.priceNGN}
            onChange={(e) => setForm({ ...form, priceNGN: e.target.value })}
          />
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-[1.5px] mb-1.5">
          Category *
        </label>
        <div className="relative">
          <select
            className="w-full px-3.5 py-2.5 text-[13px] border border-[#C8963E]/20 rounded-xl
                       focus:outline-none focus:border-gray-200 focus:ring-2 focus:ring-[#C8963E]/10
                       bg-white text-gray-500 font-medium appearance-none cursor-pointer"
            value={form.categoryId}
            onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
          >
            <option value="">Select a category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9B8272] pointer-events-none"
          />
        </div>
      </div>

      {/* Image */}
      <ImageUploadField
        imageUrl={form.imageUrl}
        uploading={uploading}
        onClear={() => setForm({ ...form, imageUrl: "", publicId: "" })}
        onUpload={onUpload}
        optional={imageOptional}
      />

      {/* Featured toggle */}
      <div
        className="flex items-center justify-between p-3.5 rounded-xl bg-white
                   border border-[#C0AB99]/12 cursor-pointer select-none"
        onClick={() => setForm({ ...form, isFeatured: !form.isFeatured })}
      >
        <div className="flex items-center gap-2.5">
          <Star
            size={14}
            className={
              form.isFeatured
                ? "text-[#E8B96A] fill-[#E8B96A]"
                : "text-[#C0AB99]"
            }
          />
          <div>
            <p className="text-[13px] font-medium text-[#1A0F05]">
              Featured item
            </p>
            <p className="text-[10.5px] text-[#9B8272]">Show on homepage</p>
          </div>
        </div>
        <div
          className={`relative w-11 h-6 rounded-full transition-colors duration-300
            ${form.isFeatured ? "bg-[#C8963E]" : "bg-[#E0D5C5]"}`}
        >
          <span
            className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300
              ${form.isFeatured ? "translate-x-6" : "translate-x-1"}`}
          />
        </div>
      </div>
    </div>
  );
}

// ── Modal Shell ───────────────────────────────────────────────────────────────

function ModalHeader({
  title,
  sub,
  onClose,
}: {
  title: string;
  sub: string;
  onClose: () => void;
}) {
  return (
    <div className="bg-[#1A0F05] px-7 py-5 flex items-center justify-between">
      <div>
        <h2 className="font-sans text-[18px] font-bold text-white">{title}</h2>
        <p className="text-[11px] text-white/40 mt-0.5">{sub}</p>
      </div>
      <button
        onClick={onClose}
        className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center
                   text-gray-300 hover:text-white hover:bg-white/15 transition-all"
      >
        <X size={15} />
      </button>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function AdminMenuPage() {
  const qc = useQueryClient();

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);
  const [expandedCats, setExpandedCats] = useState<Set<string>>(new Set());
  const [togglingId, setTogglingId] = useState<string | null>(null);

  // Modals
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItemRow | null>(null);

  // Separate form state per modal
  const [addForm, setAddForm] = useState<ItemForm>(BLANK_FORM);
  const [editForm, setEditForm] = useState<ItemForm>(BLANK_FORM);
  const [addUploading, setAddUploading] = useState(false);
  const [editUploading, setEditUploading] = useState(false);

  const showToast = (msg: string, ok = true) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3500);
  };

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["menu-admin"],
    queryFn: fetchMenu,
    refetchInterval: 60000,
  });

  const mutation = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<MenuItemRow> & { imageUrl?: string; publicId?: string };
    }) => patchItem(id, data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["menu-admin"] });
      qc.invalidateQueries({ queryKey: ["menu"] });
    },
  });

  const categories = data?.categories ?? [];

  const totalItems = categories.reduce((acc, c) => acc + c.items.length, 0);
  const availableItems = categories.reduce(
    (acc, c) => acc + c.items.filter((i) => i.isAvailable).length,
    0,
  );
  const featuredItems = categories.reduce(
    (acc, c) => acc + c.items.filter((i) => i.isFeatured).length,
    0,
  );

  // ── Upload handler factory ──────────────────────────────────

  // function makeUploader(
  //   form: ItemForm,
  //   setForm: (f: ItemForm) => void,
  //   setUploading: (b: boolean) => void,
  // ) {
  //   return async (file: File) => {
  //     setUploading(true);
  //     try {
  //       const res = await uploadImage(file);
  //       const imageUrl = res.url || res.secure_url || res.data?.secure_url;
  //       const publicId = res.public_id || res.publicId || res.data?.public_id;
  //       if (!imageUrl) throw new Error("No URL returned from server");
  //       setForm({ ...form, imageUrl, publicId: publicId ?? "" });
  //       showToast("Image uploaded successfully");
  //     } catch (err: unknown) {
  //       showToast(err instanceof Error ? err.message : "Upload failed", false);
  //     } finally {
  //       setUploading(false);
  //     }
  //   };
  // }

  function makeUploader(
    setForm: React.Dispatch<React.SetStateAction<ItemForm>>,
    setUploading: (b: boolean) => void,
  ) {
    return async (file: File) => {
      setUploading(true);
      try {
        const res = await uploadImage(file);
        const imageUrl = res.url || res.secure_url || res.data?.secure_url;
        const publicId = res.public_id || res.publicId || res.data?.public_id;
        if (!imageUrl) throw new Error("No URL returned from server");
        // 👇 functional update — always works off latest state
        setForm((prev) => ({ ...prev, imageUrl, publicId: publicId ?? "" }));
        showToast("Image uploaded successfully");
      } catch (err: unknown) {
        showToast(err instanceof Error ? err.message : "Upload failed", false);
      } finally {
        setUploading(false);
      }
    };
  }

  // ── Open edit modal pre-filled ──────────────────────────────

  function openEdit(item: MenuItemRow, catId: string) {
    setSelectedItem(item);
    setEditForm({
      name: item.name,
      priceNGN: String(item.priceNGN),
      categoryId: catId,
      isFeatured: item.isFeatured,
      imageUrl: item.imageUrl ?? "",
      publicId: item.publicId ?? "",
    });
    setShowEditModal(true);
  }

  // ── Save edit ───────────────────────────────────────────────

  async function saveEdit() {
    if (!selectedItem) return;
    if (!editForm.name || !editForm.priceNGN || !editForm.categoryId)
      return showToast("Fill all required fields", false);
    const price = parseFloat(editForm.priceNGN);
    if (isNaN(price)) return showToast("Invalid price", false);

    try {
      await mutation.mutateAsync({
        id: selectedItem.id,
        data: {
          name: editForm.name,
          slug: slugify(editForm.name),
          priceNGN: price,
          categoryId: editForm.categoryId,
          isFeatured: editForm.isFeatured,
          ...(editForm.imageUrl
            ? { imageUrl: editForm.imageUrl, publicId: editForm.publicId }
            : {}),
        },
      });
      setShowEditModal(false);
      showToast("Item updated successfully");
    } catch (err: unknown) {
      showToast(err instanceof Error ? err.message : "Update failed", false);
    }
  }

  // ── Toggle availability ─────────────────────────────────────

  async function toggleAvailability(item: MenuItemRow) {
    setTogglingId(item.id);
    try {
      await mutation.mutateAsync({
        id: item.id,
        data: { isAvailable: !item.isAvailable },
      });
      showToast(item.isAvailable ? "Marked unavailable" : "Marked available");
    } finally {
      setTogglingId(null);
    }
  }

  function toggleCat(slug: string) {
    setExpandedCats((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  }

  const visibleCategories = categories
    .filter((c) => activeFilter === "all" || c.slug === activeFilter)
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((c) => c.items.length > 0);

  // ── Render ──────────────────────────────────────────────────

  return (
    <>
      <div className="min-h-screen font-sans">
        {/* ── HEADER ──────────────────────────────────────────── */}
        <header className="sticky top-0 z-40 bg-[#f9fafb] backdrop-blur-md border-b border-[#1A0F05]/08 px-6 md:px-10 py-4">
          <div className="flex items-center justify-between w-full max-w-screen mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#1A0F05] rounded-xl flex items-center justify-center">
                <UtensilsCrossed size={16} className="text-[#E8B96A]" />
              </div>
              <div>
                <h1 className="font-sans text-[18px] font-bold text-[#1A0F05] leading-none">
                  Menu Management
                </h1>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  {data?.updatedAt
                    ? `Last updated ${new Date(data.updatedAt).toLocaleTimeString()}`
                    : "Vicky's Cuisine Admin"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => refetch()}
                disabled={isFetching}
                className="w-9 h-9 rounded-xl border border-[#C8963E]/20 bg-white flex items-center justify-center
                           text-gray-600 hover:text-[#C8963E] hover:border-gray-300/40 transition-all
                           shadow-[0_1px_4px_rgba(26,15,5,0.06)]"
                title="Refresh"
              >
                <RefreshCw
                  size={14}
                  className={isFetching ? "animate-spin" : ""}
                />
              </button>

              <button
                onClick={() => {
                  setAddForm(BLANK_FORM);
                  setShowAddModal(true);
                }}
                className="flex items-center gap-2 bg-[#1A0F05] text-white text-[13px] font-semibold
                           px-4 py-2.5 rounded-xl hover:bg-[#2D1A0A] transition-all
                           shadow-[0_4px_16px_rgba(26,15,5,0.2)] hover:shadow-[0_6px_20px_rgba(26,15,5,0.28)]
                           hover:-translate-y-0.5"
              >
                <Plus size={14} />
                Add Item
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-full mx-auto px-6 md:px-10 py-8 space-y-8 bg-[#f9fafb]">
          {/* ── STATS ─────────────────────────────────────────── */}
          {!isLoading && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard
                label="Total Items"
                value={totalItems}
                sub="across all categories"
              />
              <StatCard
                label="Categories"
                value={categories.length}
                sub="active sections"
              />
              <StatCard
                label="Available"
                value={availableItems}
                sub={`${totalItems - availableItems} unavailable`}
              />
              <StatCard
                label="Featured"
                value={featuredItems}
                sub="shown on homepage"
              />
            </div>
          )}

          {/* ── SEARCH & FILTERS ──────────────────────────────── */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9B8272]"
              />
              <input
                type="text"
                placeholder="Search menu items…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-[13px] bg-white border border-[#C8963E]/15
                           rounded-xl focus:outline-none focus:border-[#C8963E]/50 focus:ring-2
                           focus:ring-[#C8963E]/10 text-[#1A0F05] placeholder:text-[#C0AB99]
                           shadow-[0_1px_4px_rgba(26,15,5,0.05)] transition-all"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-xl text-[12px] font-semibold transition-all border
                  ${
                    activeFilter === "all"
                      ? "bg-[#1A0F05] text-white border-[#1A0F05] shadow-[0_2px_8px_rgba(26,15,5,0.2)]"
                      : "bg-white text-[#7B6252] border-[#C8963E]/15 hover:border-[#C8963E]/40"
                  }`}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => setActiveFilter(c.slug)}
                  className={`px-4 py-2 rounded-xl text-[12px] font-semibold transition-all border
                    ${
                      activeFilter === c.slug
                        ? "bg-[#C8963E] text-white border-[#C8963E] shadow-[0_2px_8px_rgba(200,150,62,0.3)]"
                        : "bg-white text-[#7B6252] border-[#C8963E]/15 hover:border-[#C8963E]/40"
                    }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* ── LOADING ───────────────────────────────────────── */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <div className="w-10 h-10 border-2 border-[#C8963E]/20 border-t-[#C8963E] rounded-full animate-spin" />
              <p className="text-[13px] text-[#9B8272]">Loading menu…</p>
            </div>
          )}

          {/* ── CATEGORY ACCORDIONS ───────────────────────────── */}
          {!isLoading && (
            <div className="space-y-3">
              {visibleCategories.length === 0 ? (
                <div className="text-center py-20 text-[#9B8272] text-[13px]">
                  No items match your search.
                </div>
              ) : (
                visibleCategories.map((cat) => {
                  const isOpen = expandedCats.has(cat.slug);
                  const availCount = cat.items.filter(
                    (i) => i.isAvailable,
                  ).length;

                  return (
                    <div
                      key={cat.slug}
                      className="bg-white rounded-2xl border border-[#C8963E]/12
                                 shadow-[0_2px_12px_rgba(26,15,5,0.04)] overflow-hidden"
                    >
                      {/* Accordion header */}
                      <button
                        onClick={() => toggleCat(cat.slug)}
                        className="w-full flex items-center justify-between px-6 py-4
                                   hover:bg-[#FDF8F2] transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FDF3E3] to-[#F5E0B8]
                                          flex items-center justify-center shadow-[0_2px_8px_rgba(200,150,62,0.12)]"
                          >
                            <UtensilsCrossed
                              size={13}
                              className="text-[#C8963E]"
                            />
                          </div>
                          <div className="text-left">
                            <p className="text-[14px] font-semibold text-[#1A0F05]">
                              {cat.name}
                            </p>
                            <p className="text-[11px] text-[#9B8272]">
                              {cat.items.length} items · {availCount} available
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-semibold text-[#C8963E] bg-[#C8963E]/08 px-2.5 py-1 rounded-full">
                            {cat.items.length}
                          </span>
                          <ChevronDown
                            size={16}
                            className={`text-[#9B8272] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </div>
                      </button>

                      {/* Items */}
                      {isOpen && (
                        <div className="border-t border-[#C8963E]/08 animate-fade-in">
                          {/* Column headers */}
                          <div className="grid grid-cols-12 px-6 py-2.5 bg-[#FDF8F2]/60 border-b border-[#C8963E]/06">
                            <span className="col-span-4 text-[10px] font-semibold text-[#9B8272] uppercase tracking-[1.5px]">
                              Item
                            </span>
                            <span className="col-span-2 text-[10px] font-semibold text-[#9B8272] uppercase tracking-[1.5px]">
                              Price
                            </span>
                            <span className="col-span-2 text-[10px] font-semibold text-[#9B8272] uppercase tracking-[1.5px]">
                              Image
                            </span>
                            <span className="col-span-2 text-[10px] font-semibold text-[#9B8272] uppercase tracking-[1.5px]">
                              Live
                            </span>
                            <span className="col-span-2 text-[10px] font-semibold text-[#9B8272] uppercase tracking-[1.5px] text-right">
                              Actions
                            </span>
                          </div>

                          {cat.items.map((item, idx) => (
                            <div
                              key={item.id}
                              className={`grid grid-cols-12 items-center px-6 py-4 gap-3
                                transition-colors hover:bg-[#FDF8F2]/60
                                ${idx !== cat.items.length - 1 ? "border-b border-[#C8963E]/06" : ""}`}
                            >
                              {/* Name */}
                              <div className="col-span-4 flex items-center gap-2 min-w-0">
                                {item.isFeatured && (
                                  <Star
                                    size={11}
                                    className="text-[#E8B96A] fill-[#E8B96A] shrink-0"
                                  />
                                )}
                                <span className="text-[13px] font-medium text-[#1A0F05] truncate">
                                  {item.name}
                                </span>
                              </div>

                              {/* Price */}
                              <div className="col-span-2">
                                <span className="text-[13px] font-semibold text-[#1A0F05]">
                                  {formatCurrency(item.priceNGN)}
                                </span>
                              </div>

                              {/* Image thumbnail */}
                              <div className="col-span-2">
                                {item.imageUrl ? (
                                  <div className="w-9 h-9 rounded-lg overflow-hidden border border-[#C8963E]/15 shadow-sm">
                                    <img
                                      src={item.imageUrl}
                                      alt={item.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ) : (
                                  <div
                                    className="w-9 h-9 rounded-lg bg-[#F5EDE0] border border-[#C8963E]/10
                                                flex items-center justify-center"
                                    title="No image — click Edit to add one"
                                  >
                                    <ImageIcon
                                      size={13}
                                      className="text-[#C8963E]/40"
                                    />
                                  </div>
                                )}
                              </div>

                              {/* Availability toggle */}
                              <div className="col-span-2 flex items-center gap-2">
                                <Toggle
                                  checked={item.isAvailable}
                                  onChange={() => toggleAvailability(item)}
                                  disabled={togglingId === item.id}
                                />
                                <span
                                  className={`text-[10px] font-semibold hidden sm:block
                                    ${item.isAvailable ? "text-[#C8963E]" : "text-[#C0AB99]"}`}
                                >
                                  {item.isAvailable ? "Live" : "Off"}
                                </span>
                              </div>

                              {/* Actions */}
                              <div className="col-span-2 flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => openEdit(item, cat.id)}
                                  className="w-8 h-8 rounded-lg bg-[#F5EDE0] text-[#7B6252] flex items-center justify-center
                                             hover:bg-[#EDD9BF] hover:text-[#C8963E] transition-all hover:scale-105 active:scale-95"
                                  title="Edit item"
                                >
                                  <Pencil size={12} />
                                </button>
                                <button
                                  onClick={() => {
                                    setSelectedItem(item);
                                    setShowDeleteModal(true);
                                  }}
                                  className="w-8 h-8 rounded-lg bg-red-50 text-red-400 flex items-center justify-center
                                             hover:bg-red-100 hover:text-red-500 transition-all hover:scale-105 active:scale-95"
                                  title="Delete item"
                                >
                                  <Trash2 size={12} />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          )}
        </main>

        {/* ══════════════════════════════════════════════════════
            ADD MODAL
        ══════════════════════════════════════════════════════ */}
        {showAddModal && (
          <div className="fixed inset-0 bg-[#1A0F05]/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-3xl w-full max-w-[440px] shadow-[0_32px_80px_rgba(26,15,5,0.25)] overflow-hidden flex flex-col">
              <ModalHeader
                title="Add Menu Item"
                sub="Fill in the details below"
                onClose={() => {
                  setShowAddModal(false);
                  setAddForm(BLANK_FORM);
                }}
              />

              <ItemFormBody
                form={addForm}
                setForm={setAddForm}
                categories={categories}
                uploading={addUploading}
                onUpload={makeUploader(setAddForm, setAddUploading)}
              />

              <div className="px-7 pb-7 flex gap-3">
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setAddForm(BLANK_FORM);
                  }}
                  className="flex-1 py-3 rounded-xl border border-[#C8963E]/20 text-[13px] font-semibold
                             text-[#7B6252] hover:bg-[#FDF8F2] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    if (
                      !addForm.name ||
                      !addForm.priceNGN ||
                      !addForm.categoryId
                    )
                      return showToast("Fill all required fields", false);
                    if (!addForm.imageUrl)
                      return showToast("Please upload an image", false);
                    try {
                      await createItem({
                        name: addForm.name,
                        slug: slugify(addForm.name),
                        priceNGN: Number(addForm.priceNGN),
                        categoryId: addForm.categoryId,
                        isFeatured: addForm.isFeatured,
                        imageUrl: addForm.imageUrl,
                        publicId: addForm.publicId,
                      });
                      qc.invalidateQueries({ queryKey: ["menu-admin"] });
                      setShowAddModal(false);
                      setAddForm(BLANK_FORM);
                      showToast("Item added successfully");
                    } catch (err: unknown) {
                      showToast(
                        err instanceof Error
                          ? err.message
                          : "Failed to add item",
                        false,
                      );
                    }
                  }}
                  className="flex-1 py-3 rounded-xl bg-[#C8963E] text-white text-[13px] font-semibold
                             hover:bg-[#B07D32] transition-all shadow-[0_4px_16px_rgba(200,150,62,0.3)]
                             hover:shadow-[0_6px_20px_rgba(200,150,62,0.4)] hover:-translate-y-0.5"
                >
                  Save Item
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════
            EDIT MODAL — pre-filled, image optional
        ══════════════════════════════════════════════════════ */}
        {showEditModal && selectedItem && (
          <div className="fixed inset-0 bg-[#1A0F05]/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-3xl w-full max-w-[440px] shadow-[0_32px_80px_rgba(26,15,5,0.25)] overflow-hidden flex flex-col">
              <ModalHeader
                title="Edit Menu Item"
                sub={`Editing: ${selectedItem.name}`}
                onClose={() => setShowEditModal(false)}
              />

              <ItemFormBody
                form={editForm}
                setForm={setEditForm}
                categories={categories}
                uploading={editUploading}
                onUpload={makeUploader(setEditForm, setEditUploading)}
                imageOptional
              />

              <div className="px-7 pb-7 flex gap-3">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 py-3 rounded-xl border border-[#C8963E]/20 text-[13px] font-semibold
                             text-[#7B6252] hover:bg-[#FDF8F2] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEdit}
                  disabled={mutation.isPending}
                  className="flex-1 py-3 rounded-xl bg-[#C8963E] text-white text-[13px] font-semibold
                             hover:bg-[#B07D32] transition-all shadow-[0_4px_16px_rgba(200,150,62,0.3)]
                             hover:shadow-[0_6px_20px_rgba(200,150,62,0.4)] hover:-translate-y-0.5
                             disabled:opacity-60 disabled:cursor-not-allowed
                             flex items-center justify-center gap-2"
                >
                  {mutation.isPending ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Saving…
                    </>
                  ) : (
                    <>
                      <Check size={14} />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════
            DELETE CONFIRMATION MODAL
        ══════════════════════════════════════════════════════ */}
        {showDeleteModal && selectedItem && (
          <div className="fixed inset-0 bg-[#1A0F05]/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-3xl w-full max-w-[380px] shadow-[0_32px_80px_rgba(26,15,5,0.25)] overflow-hidden">
              {/* Red accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-red-400 via-red-500 to-red-400" />

              <div className="p-8 text-center">
                <div
                  className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-5
                                shadow-[0_4px_16px_rgba(239,68,68,0.12)]"
                >
                  <AlertTriangle size={28} className="text-red-400" />
                </div>

                <h3
                  className="font-playfair text-[20px] font-bold text-[#1A0F05] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Delete this item?
                </h3>

                {/* Item preview card */}
                <div
                  className="flex items-center gap-3 bg-[#FDF8F2] border border-[#C8963E]/12
                                rounded-xl p-3.5 my-5 text-left"
                >
                  {selectedItem.imageUrl ? (
                    <img
                      src={selectedItem.imageUrl}
                      alt={selectedItem.name}
                      className="w-12 h-12 rounded-lg object-cover shrink-0 shadow-sm"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-[#F5EDE0] flex items-center justify-center shrink-0">
                      <UtensilsCrossed
                        size={16}
                        className="text-[#C8963E]/50"
                      />
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-[#1A0F05] truncate">
                      {selectedItem.name}
                    </p>
                    <p className="text-[11.5px] text-[#9B8272]">
                      {formatCurrency(selectedItem.priceNGN)}
                    </p>
                    {selectedItem.isFeatured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#C8963E] mt-0.5">
                        <Star
                          size={9}
                          className="fill-[#E8B96A] text-[#E8B96A]"
                        />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-[12.5px] text-[#7B6252] leading-relaxed mb-7">
                  This will permanently remove the item from your menu.{" "}
                  <strong className="text-[#1A0F05]">
                    This cannot be undone.
                  </strong>
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="flex-1 py-3 rounded-xl border border-[#C8963E]/20 text-[13px] font-semibold
                               text-[#7B6252] hover:bg-[#FDF8F2] transition-colors"
                  >
                    Keep Item
                  </button>
                  <button
                    onClick={async () => {
                      try {
                        await deleteItem(selectedItem.id);
                        qc.invalidateQueries({ queryKey: ["menu-admin"] });
                        setShowDeleteModal(false);
                        showToast(`"${selectedItem.name}" deleted`);
                      } catch (err: unknown) {
                        showToast(
                          err instanceof Error ? err.message : "Delete failed",
                          false,
                        );
                      }
                    }}
                    className="flex-1 py-3 rounded-xl bg-red-500 text-white text-[13px] font-semibold
                               hover:bg-red-600 transition-all hover:-translate-y-0.5
                               shadow-[0_4px_12px_rgba(239,68,68,0.25)]
                               hover:shadow-[0_6px_16px_rgba(239,68,68,0.35)]"
                  >
                    Yes, Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TOAST ───────────────────────────────────────────── */}
        {toast && <Toast msg={toast.msg} ok={toast.ok} />}
      </div>
    </>
  );
}
