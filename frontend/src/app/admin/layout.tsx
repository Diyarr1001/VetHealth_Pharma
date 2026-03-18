import Link from "next/link";
import { LayoutDashboard, Package, MessageSquare, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed h-screen z-50">
        <div className="p-6 border-b border-slate-200">
          <Link href="/admin" className="flex items-center gap-2 font-bold text-xl text-primary font-heading">
            <span className="bg-primary text-white w-8 h-8 rounded-lg flex items-center justify-center">V</span>
            Admin Panel
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-primary transition-colors font-medium">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-primary transition-colors font-medium">
            <Package size={20} /> Products
          </Link>
          <Link href="/admin/inquiries" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-primary transition-colors font-medium">
            <MessageSquare size={20} /> Inquiries
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-200">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors font-medium">
            <LogOut size={20} /> Exit to Site
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 overflow-auto min-h-screen">
        {children}
      </main>
    </div>
  );
}
