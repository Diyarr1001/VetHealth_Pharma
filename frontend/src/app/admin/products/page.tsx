"use client";

import { useEffect, useState } from "react";
import { Package, Plus, Search, Tag, Database } from "lucide-react";

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  animalTypes: string[];
  category: { name: string };
  createdAt: string;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
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
          <h1 className="text-3xl font-bold font-heading">Product Catalog</h1>
          <p className="text-slate-500">Manage your entire veterinary medication and supplement inventory.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input type="text" placeholder="Search variants..." className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-64 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-violet-700 text-white rounded-lg shadow-sm font-bold transition-colors">
            <Plus size={16} /> Add Product
          </button>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-slate-500">Loading product database...</div>
        ) : products.length === 0 ? (
          <div className="p-16 text-center flex flex-col items-center">
            <Database size={48} className="mb-4 text-slate-200" />
            <h3 className="text-lg font-bold text-slate-700">No Products Found</h3>
            <p className="text-slate-500 mb-6">Your inventory is currently empty.</p>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-violet-700 text-white rounded-lg shadow-sm font-bold transition-colors">
              <Plus size={16} /> Create First Product
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider font-bold text-slate-500">
                  <th className="p-4">SKU / Product Info</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Target Species</th>
                  <th className="p-4">Date Added</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.map(product => (
                  <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 align-top">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-400">
                          <Package size={20} />
                        </div>
                        <div>
                          <div className="font-bold text-slate-800 text-lg">{product.name}</div>
                          <p className="text-xs text-slate-500 max-w-xs truncate">{product.description}</p>
                          <div className="text-xs font-mono text-slate-400 mt-1">/{product.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-top">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-50 text-violet-700 text-xs font-bold rounded-full border border-violet-100">
                        <Tag size={12} /> {product.category?.name || 'Uncategorized'}
                      </span>
                    </td>
                    <td className="p-4 align-top">
                      <div className="flex flex-wrap gap-1 max-w-[200px]">
                        {product.animalTypes.map(type => (
                          <span key={type} className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded border border-slate-200">
                            {type}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 align-top text-sm text-slate-500 whitespace-nowrap">
                      {new Date(product.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4 align-top">
                      <button className="text-primary hover:text-violet-700 text-sm font-bold bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-colors">Edit</button>
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
