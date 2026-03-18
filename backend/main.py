from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from prisma import Prisma
import asyncio

app = FastAPI(
    title="VetHealth Pharma API",
    description="Backend API for VetHealth Pharma Website",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

prisma = Prisma()

@app.on_event("startup")
async def startup():
    await prisma.connect()

@app.on_event("shutdown")
async def shutdown():
    await prisma.disconnect()

# --- Pydantic Models ---

class InquiryCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    type: str
    company: Optional[str] = None
    message: str

class ProductCreate(BaseModel):
    name: str
    slug: str
    description: str
    price: float
    composition: Optional[str] = None
    dosage: Optional[str] = None
    benefits: Optional[str] = None
    useCases: Optional[str] = None
    animalTypes: List[str]
    categoryId: str
    imageUrl: Optional[str] = None
    pdfUrl: Optional[str] = None

# --- Routes ---

@app.get("/")
def read_root():
    return {"message": "Welcome to VetHealth Pharma API"}

# Products
@app.get("/api/products")
async def get_products(category_slug: Optional[str] = None, animal: Optional[str] = None, search: Optional[str] = None):
    query = {}
    if category_slug:
        query["category"] = {"is": {"slug": category_slug}}
    if animal:
        query["animalTypes"] = {"has": animal}
    if search:
        query["OR"] = [
            {"name": {"contains": search, "mode": "insensitive"}},
            {"description": {"contains": search, "mode": "insensitive"}}
        ]
        
    products = await prisma.product.find_many(
        where=query,
        include={"category": True}
    )
    return products

@app.get("/api/products/{slug}")
async def get_product(slug: str):
    product = await prisma.product.find_unique(
        where={"slug": slug},
        include={"category": True}
    )
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@app.post("/api/products")
async def create_product(product: ProductCreate):
    new_product = await prisma.product.create(
        data={
            "name": product.name,
            "slug": product.slug,
            "description": product.description,
            "price": product.price,
            "composition": product.composition,
            "dosage": product.dosage,
            "benefits": product.benefits,
            "useCases": product.useCases,
            "animalTypes": {"set": product.animalTypes},
            "categoryId": product.categoryId,
            "imageUrl": product.imageUrl,
            "pdfUrl": product.pdfUrl
        }
    )
    return new_product

# Categories
@app.get("/api/categories")
async def get_categories():
    categories = await prisma.category.find_many()
    return categories

# Blog Posts
@app.get("/api/posts")
async def get_posts(category: Optional[str] = None):
    query = {}
    if category and category != 'All':
        query["category"] = category
        
    posts = await prisma.post.find_many(where=query, order={"createdAt": "desc"})
    return posts

@app.get("/api/posts/{slug}")
async def get_post(slug: str):
    post = await prisma.post.find_unique(where={"slug": slug})
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

# Inquiries (Forms)
@app.post("/api/inquiries")
async def create_inquiry(inquiry: InquiryCreate):
    new_inquiry = await prisma.inquiry.create(
        data={
            "name": inquiry.name,
            "email": inquiry.email,
            "phone": inquiry.phone,
            "type": inquiry.type,
            "company": inquiry.company,
            "message": inquiry.message,
            "status": "Pending"
        }
    )
    # Here we would also send an email notification to admin
    return {"message": "Inquiry submitted successfully", "id": new_inquiry.id}

@app.get("/api/inquiries")
async def get_inquiries():
    inquiries = await prisma.inquiry.find_many(order={"createdAt": "desc"})
    return inquiries
