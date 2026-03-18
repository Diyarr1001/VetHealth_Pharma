import { Package, MessageSquare, Activity } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold font-heading mb-8">System Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
            <Package size={28} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Products Database</p>
            <h3 className="text-2xl font-bold">Manage</h3>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center">
            <MessageSquare size={28} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Active Inquiries</p>
            <h3 className="text-2xl font-bold">Review</h3>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center">
            <Activity size={28} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">API Server Status</p>
            <h3 className="text-2xl font-bold text-emerald-600">Online</h3>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4 font-heading">Quick Shortcuts</h2>
          <div className="space-y-3">
            <Link href="/admin/products" className="block p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors pointer group">
              <h4 className="font-bold text-primary group-hover:text-primary">View Products Catalog</h4>
              <p className="text-sm text-slate-500">Edit, remove, or list new veterinarian solutions.</p>
            </Link>
            <Link href="/admin/inquiries" className="block p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors pointer group">
              <h4 className="font-bold text-emerald-600">Review Partner Inquiries</h4>
              <p className="text-sm text-slate-500">Read inbound requests from dealers, clinics, and farmers.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
