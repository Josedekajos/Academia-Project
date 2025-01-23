"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <motion.header
      className="bg-purple-600 text-white"
      initial={{ backgroundColor: "#4A5568" }}
      animate={{ backgroundColor: "#6B46C1" }}
      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="/">Academia</Link>
          </motion.div>
          <div className="hidden md:flex space-x-4">
            <NavLink href="/" isActive={isActive("/")}>
              Home
            </NavLink>
            <NavLink href="/dashboard" isActive={isActive("/dashboard")}>
              Dashboard
            </NavLink>
            <NavLink href="/about" isActive={isActive("/about")}>
              About
            </NavLink>
            <NavLink href="/groups" isActive={isActive("/groups")}>
              Groups
            </NavLink>
            <NavLink href="/login" isActive={isActive("/login")}>
              Login
            </NavLink>
            <NavLink href="/chat" isActive={isActive("/chat")}>
              Chat
            </NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <NavLink href="/" isActive={isActive("/")}>
              Home
            </NavLink>
            <NavLink href="/dashboard" isActive={isActive("/dashboard")}>
              Dashboard
            </NavLink>
            <NavLink href="/about" isActive={isActive("/about")}>
              About
            </NavLink>
            <NavLink href="/groups" isActive={isActive("/groups")}>
              Groups
            </NavLink>
            <NavLink href="/login" isActive={isActive("/login")}>
              Login
            </NavLink>
            <NavLink href="/chat" isActive={isActive("/chat")}>
              Chat
            </NavLink>
          </div>
        )}
      </nav>
    </motion.header>
  )
}

const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <Link href={href} className={`hover:text-purple-200 ${isActive ? "font-bold" : ""}`}>
      {children}
    </Link>
  </motion.div>
)

export default Header

