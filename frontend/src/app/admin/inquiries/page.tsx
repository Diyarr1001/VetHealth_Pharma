"use client";

import { useEffect, useState } from "react";
import { MessageSquare, Clock, Filter, Phone, Mail } from "lucide-react";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  type: string;
  company: string | null;
  message: string;
  status: string;
  createdAt: string;
}

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/inquiries")
      .then(res => res.json())
      .then(data => {
        setInquiries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-heading">Inbound Inquiries</h1>
          <p className="text-slate-500">Customer requests, bulk orders, and consultation forms.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 bg-white shadow-sm font-medium">
          <Filter size={16} /> Filter
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-slate-500">Loading incoming messages...</div>
        ) : inquiries.length === 0 ? (
          <div className="p-16 text-center flex flex-col items-center">
            <MessageSquare size={48} className="mb-4 text-slate-200" />
            <h3 className="text-lg font-bold text-slate-700">Inbox Zero</h3>
            <p className="text-slate-500">No forms have been submitted yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider font-bold text-slate-500">
                  <th className="p-4">Sender Profile</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Message Context</th>
                  <th className="p-4">Received</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {inquiries.map(inquiry => (
                  <tr key={inquiry.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 align-top">
                      <div className="font-bold text-slate-800">{inquiry.name}</div>
                      <div className="flex items-center gap-2 mt-2">
                        <Mail size={12} className="text-slate-400"/>
                        <a href={`mailto:${inquiry.email}`} className="text-xs text-primary hover:underline">{inquiry.email}</a>
                      </div>
                      {inquiry.phone && (
                        <div className="flex items-center gap-2 mt-1">
                          <Phone size={12} className="text-slate-400"/>
                          <span className="text-xs text-slate-600">{inquiry.phone}</span>
                        </div>
                      )}
                      {inquiry.company && <div className="text-xs font-semibold text-primary mt-2 bg-primary/10 w-fit px-2 py-0.5 rounded-full">{inquiry.company}</div>}
                    </td>
                    <td className="p-4 align-top">
                      <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-md border border-slate-200">
                        {inquiry.type}
                      </span>
                    </td>
                    <td className="p-4 align-top max-w-[300px]">
                      <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        {inquiry.message}
                      </div>
                    </td>
                    <td className="p-4 align-top text-sm text-slate-500 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} /> {new Date(inquiry.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="p-4 align-top">
                      <span className={`inline-block px-2 py-1 text-xs font-bold rounded-md ${
                        inquiry.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {inquiry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
