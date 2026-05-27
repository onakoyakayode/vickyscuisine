// // components/Navbar.tsx

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// interface NavbarProps {
//   active?: string;
//   transparent?: boolean;
//   buttonText?: string;
//   buttonHref?: string;
//   onButtonClick?: () => void;
// }

// const links = [
//   { label: "Home", href: "/" },
//   { label: "Menu", href: "/menu" },
//   { label: "Events & Bulk", href: "/events" },
//   { label: "Food Packs", href: "/order" },
//   { label: "About", href: "/about" },
// ];

// export default function Navbar({
//   active,
//   transparent = false,
//   buttonText = "Order Now",
//   buttonHref,
//   onButtonClick,
// }: NavbarProps) {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <nav
//       className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between
//       px-6 md:px-16 py-4 backdrop-blur-md border-b transition-all
//       ${
//         transparent
//           ? "bg-transparent border-[#085208]/20"
//           : "bg-[#FDF9F4]/92 border-[#085208]/10"
//       }`}
//     >
//       <Link href="/">
//         <Image
//           src="/logo.jpg"
//           alt="Vicky's Cuisine Logo"
//           width={55}
//           height={32}
//           className="inline-block mr-2 drop-shadow-lg rounded-full"
//         />
//       </Link>

//       <ul className="hidden md:flex gap-8 list-none">
//         {links.map((l) => (
//           <li key={l.href}>
//             <Link
//               href={l.href}
//               className={`text-sm font-semibold transition-colors ${
//                 active === l.href
//                   ? "text-[#C8963E] border-b-2 border-[#C8963E] pb-0.5"
//                   : transparent && !scrolled
//                     ? "text-white hover:text-[#C8963E]"
//                     : "text-[#085208] hover:text-[#C8963E]"
//               }`}
//             >
//               {l.label}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {buttonHref ? (
//         <Link
//           href={buttonHref}
//           className={`text-sm font-sans font-semibold px-5 py-2.5 rounded-lg transition-colors shadow
//           ${
//             transparent
//               ? "bg-white text-[#085208] hover:bg-transparent hover:border hover:border-white hover:text-white"
//               : "bg-white text-[#085208] hover:bg-[#21c55e] hover:text-white"
//           }`}
//         >
//           {buttonText}
//         </Link>
//       ) : (
//         <button
//           onClick={onButtonClick}
//           className={`text-sm font-sans font-semibold px-5 py-2.5 rounded-lg transition-colors shadow
//           ${
//             transparent
//               ? "bg-white text-[#085208] hover:bg-transparent hover:border hover:border-white hover:text-white"
//               : "bg-white text-[#085208] hover:bg-[#21c55e] hover:text-white"
//           }`}
//         >
//           {buttonText}
//         </button>
//       )}
//     </nav>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  active?: string;
  transparent?: boolean;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
}

const links = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Events & Bulk", href: "/events" },
  { label: "Food Packs", href: "/order" },
  { label: "About", href: "/about" },
];

export default function Navbar({
  active,
  transparent = false,
  buttonText = "Order Now",
  buttonHref,
  onButtonClick,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isLight = !transparent || scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between
          px-4 sm:px-6 md:px-16 py-3 sm:py-4 backdrop-blur-md border-b transition-all duration-300
          ${
            isLight
              ? "bg-[#FDF9F4]/95 border-[#085208]/10 shadow-sm"
              : "bg-transparent border-[#085208]/20"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 z-10">
          <Image
            src="/logo.jpg"
            alt="Vicky's Cuisine Logo"
            width={48}
            height={48}
            className="inline-block drop-shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-6 lg:gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-semibold transition-colors ${
                  active === l.href
                    ? "text-[#C8963E] border-b-2 border-[#C8963E] pb-0.5"
                    : isLight
                      ? "text-[#085208] hover:text-[#C8963E]"
                      : "text-white hover:text-[#C8963E]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA button */}
        <div className="hidden md:block">
          {buttonHref ? (
            <Link
              href={buttonHref}
              className={`text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow
                ${
                  isLight
                    ? "bg-[#085208] text-white hover:bg-[#21c55e]"
                    : "bg-white text-[#085208] hover:bg-transparent hover:border hover:border-white hover:text-white"
                }`}
            >
              {buttonText}
            </Link>
          ) : (
            <button
              onClick={onButtonClick}
              className={`text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow
                ${
                  isLight
                    ? "bg-[#085208] text-white hover:bg-[#21c55e]"
                    : "bg-white text-[#085208] hover:bg-transparent hover:border hover:border-white hover:text-white"
                }`}
            >
              {buttonText}
            </button>
          )}
        </div>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          {buttonHref ? (
            <Link
              href={buttonHref}
              className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all shadow
                ${
                  isLight
                    ? "bg-[#085208] text-white"
                    : "bg-white text-[#085208]"
                }`}
            >
              {buttonText}
            </Link>
          ) : (
            <button
              onClick={onButtonClick}
              className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all shadow
                ${
                  isLight
                    ? "bg-[#085208] text-white"
                    : "bg-white text-[#085208]"
                }`}
            >
              {buttonText}
            </button>
          )}

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md transition-colors
              ${isLight ? "text-[#085208]" : "text-white"}`}
          >
            <span
              className={`block w-5 h-0.5 rounded-full transition-all duration-300 origin-center
                ${isLight ? "bg-[#085208]" : "bg-white"}
                ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full transition-all duration-300
                ${isLight ? "bg-[#085208]" : "bg-white"}
                ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full transition-all duration-300 origin-center
                ${isLight ? "bg-[#085208]" : "bg-white"}
                ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#FDF9F4] shadow-2xl
            flex flex-col pt-20 px-6 pb-8 transition-transform duration-300
            ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <p className="text-xs font-bold text-[#C8963E] uppercase tracking-widest mb-6">
            Navigation
          </p>
          <ul className="flex flex-col gap-1 flex-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors
                    ${
                      active === l.href
                        ? "bg-[#085208]/10 text-[#085208]"
                        : "text-[#1A0F05] hover:bg-[#085208]/5 hover:text-[#085208]"
                    }`}
                >
                  {active === l.href && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8963E]" />
                  )}
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-200 pt-6 mt-4">
            <p className="text-xs text-gray-400 text-center">
              Vicky&apos;s Cuisine · Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
