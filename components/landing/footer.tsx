import Link from "next/link";
import { Shield } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] pt-16 pb-12">
      {/* Gradient top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/icon.png"
                alt="CleanLabel"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-lg font-bold text-white tracking-tight">
                Clean<span className="text-emerald-400">Label</span>
              </span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
              AI-powered food transparency. Know exactly what you&apos;re
              eating.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Product</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Connect</h4>
            <ul className="space-y-3">
              {["Twitter", "Instagram"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/support"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} CleanLabel. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Made with care for your health.
          </p>
        </div>
      </div>
    </footer>
  );
}
