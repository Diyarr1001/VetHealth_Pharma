"use client";

import { useEffect, useState } from "react";
import { Package, Plus, Search, Tag, Database, X, CheckCircle } from "lucide-react";

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  animalTypes: string[];
  imageUrl?: string;
  category: { id: string, name: string } | null;
  createdAt: string;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<{id: string, name: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    price: 0,
    categoryId: "",
    animalTypes: "Cattle, Poultry",
    imageUrl: ""
  });

  const fetchProducts = () => {
    fetch("http://127.0.0.1:8000/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  };

  const fetchCategories = () => {
    fetch("http://127.0.0.1:8000/api/categories")
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        if (data.length > 0) {
          setFormData(prev => ({ ...prev, categoryId: data[0].id }));
        }
      })
      .catch(err => console.error("Failed to fetch categories:", err));
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const handleSubmitProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const isEdit = !!editingId;
      const url = isEdit ? `http://127.0.0.1:8000/api/products/${editingId}` : "http://127.0.0.1:8000/api/products";
      const method = isEdit ? "PUT" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          animalTypes: formData.animalTypes.split(",").map(t => t.trim())
        })
      });
      if (response.ok) {
        setIsAdding(false);
        setEditingId(null);
        fetchProducts(); // Refresh
        setFormData({ name: "", slug: "", description: "", price: 0, categoryId: "", animalTypes: "Cattle, Poultry", imageUrl: "" });
      } else {
        alert(`Failed to ${isEdit ? "update" : "create"} product`);
      }
    } catch (err) {
      console.error(err);
      alert("Error contacting API");
    }
  };

  const handleEdit = (product: Product) => {
    setFormData({
      name: product.name,
      slug: product.slug || "",
      description: product.description || "",
      price: product.price || 0,
      categoryId: product.category?.id || (categories.length > 0 ? categories[0].id : ""),
      animalTypes: product.animalTypes.join(", "),
      imageUrl: product.imageUrl || ""
    });
    setEditingId(product.id);
    setIsAdding(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/products/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        fetchProducts();
      } else {
        alert("Failed to delete product");
      }
    } catch(err) {
      console.error(err);
      alert("Error deleting product");
    }
  };

  const resetForm = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormData({ name: "", slug: "", description: "", price: 0, categoryId: categories.length > 0 ? categories[0].id : "", animalTypes: "Cattle, Poultry", imageUrl: "" });
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-heading">Product Catalog</h1>
          <p className="text-slate-500">Manage your entire veterinary medication and supplement inventory.</p>
        </div>
        {!isAdding && (
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input type="text" placeholder="Search products..." className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-64 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
            </div>
            <button onClick={() => setIsAdding(true)} className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-violet-700 text-white rounded-lg shadow-sm font-bold transition-colors">
              <Plus size={16} /> Add Product
            </button>
          </div>
        )}
      </div>

      {isAdding ? (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 max-w-2xl mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold font-heading text-slate-800">{editingId ? "Edit Product" : "Add New Product"}</h2>
            <button onClick={resetForm} className="text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmitProduct} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Product Name</label>
                <input required type="text" className="w-full border border-slate-200 rounded-lg p-2" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Slug (URL friendly)</label>
                <input required type="text" className="w-full border border-slate-200 rounded-lg p-2" placeholder="e.g. ad1t-solution" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/ /g, '-')})} />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Short Description</label>
              <textarea required className="w-full border border-slate-200 rounded-lg p-2 h-20" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Price ($/₹)</label>
                <input required type="number" step="0.01" className="w-full border border-slate-200 rounded-lg p-2" value={Number.isNaN(formData.price) ? "" : formData.price} onChange={e => setFormData({...formData, price: e.target.value === "" ? 0 : parseFloat(e.target.value)})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                <select 
                  required 
                  className="w-full border border-slate-200 rounded-lg p-2 bg-white" 
                  value={formData.categoryId} 
                  onChange={e => setFormData({...formData, categoryId: e.target.value})}
                >
                  {categories.length === 0 && <option value="" disabled>No categories available</option>}
                  {categories.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Target Species (comma separated)</label>
              <input required type="text" className="w-full border border-slate-200 rounded-lg p-2" value={formData.animalTypes} onChange={e => setFormData({...formData, animalTypes: e.target.value})} />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
              <input type="text" className="w-full border border-slate-200 rounded-lg p-2" placeholder="https://images.unsplash.com/..." value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} />
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button type="button" onClick={resetForm} className="px-5 py-2 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg font-medium transition-colors">Cancel</button>
              <button type="submit" className="px-5 py-2 bg-primary hover:bg-violet-700 text-white rounded-lg font-bold transition-colors flex items-center gap-2">
                <CheckCircle size={16} /> {editingId ? "Update Product" : "Publish Product"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-slate-500">Loading product database...</div>
          ) : products.length === 0 ? (
            <div className="p-16 text-center flex flex-col items-center">
              <Database size={48} className="mb-4 text-slate-200" />
              <h3 className="text-lg font-bold text-slate-700">No Products Found</h3>
              <p className="text-slate-500 mb-6">Your inventory is currently empty.</p>
              <button onClick={() => setIsAdding(true)} className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-violet-700 text-white rounded-lg shadow-sm font-bold transition-colors">
                <Plus size={16} /> Create First Product
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider font-bold text-slate-500">
                    <th className="p-4">SKU / Product Info</th>
                    <th className="p-4">Pricing</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Target Species</th>
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
                            <div className="font-bold text-slate-800 text-base">{product.name}</div>
                            <p className="text-xs text-slate-500 max-w-xs">{product.description}</p>
                            <div className="text-xs font-mono text-slate-400 mt-1">/{product.slug}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <span className="font-bold text-slate-700 text-lg">${product.price?.toFixed(2) || "0.00"}</span>
                      </td>
                      <td className="p-4 align-middle">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-50 text-violet-700 text-xs font-bold rounded-full border border-violet-100">
                          <Tag size={12} /> {product.category?.name || 'Uncategorized'}
                        </span>
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {product.animalTypes.map(type => (
                            <span key={type} className="inline-block bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded border border-slate-200">
                              {type}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex gap-2">
                          <button onClick={() => handleEdit(product)} className="text-primary hover:text-violet-700 text-sm font-bold bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-colors">Edit</button>
                          <button onClick={() => handleDelete(product.id)} className="text-destructive hover:text-red-700 text-sm font-bold bg-destructive/10 hover:bg-destructive/20 px-3 py-1.5 rounded-lg transition-colors">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
