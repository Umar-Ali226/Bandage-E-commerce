"use client";

import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { useParams } from "next/navigation"; // Hook to get params in client components
import { FaHeart } from "react-icons/fa";
import TopHeader from "@/components/TopHeader";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNavTwo from "@/components/MobNavTwo";

// Initialize Sanity Client
const sanity = sanityClient({
  projectId: "itewl73m",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

// Configure Image Builder
const builder = imageUrlBuilder(sanity);

function urlFor(source: { asset: { _ref: string } }) {
  return builder.image(source);
}

interface Product {
  _id: string;
  title: string;
  price: number;
  isNew: boolean;
  description: string;
  discountPercentage?: number;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
  quantity?: number;
}

export default function Products() {
  const params = useParams(); // Use this hook to access params
  const id = params.id; // Get the `id` from params
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && _id == "${id}"][0]`;
      const result = await sanity.fetch(query);
      setProduct(result);
    };
    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return (
      <h2 className="text-2xl font-bold text-center my-32">Product Not Found</h2>
    );
  }

    // Add item to cart function
    const addToCart = (product: Product) => {
      const cart: Product[] = JSON.parse(localStorage.getItem('cart') || "[]");
      const existingProduct = cart.find((item) => item._id === product._id);
  
      if (existingProduct) {
        if (existingProduct.quantity !== undefined) {
          existingProduct.quantity += 1; // Increase quantity if product already in cart
        } else {
          existingProduct.quantity = 1; // Initialize quantity if undefined
        }
      } else {
        cart.push({ ...product, quantity: 1 }); // Add new product to cart
      }
  
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${product.title} has been added to the cart!`);
    };

  const truncateDescription = (description: string): string => {
    return description.length > 350 ? description.substring(0, 350) + "..." : description;
  };

  return (
        <main>
          <div className="hidden sm:flex"><TopHeader/></div>
          <Header />
          <MobileNavTwo />
          <div className="w-full bg-textgrayOne mt-3 h-[60rem] sm:h-[45rem] md:h-[36rem]">
            <div className="container mx-auto">
              {/* Breadcrumb */}
              <div className="flex justify-center sm:justify-normal items-center font-semibold text-sm space-x-3 ml-[0rem] md:ml-[1rem] lg:ml-[3.5rem] xl:ml-[5.5rem] 2xl:ml-[8.5rem] mb-2 pt-7 pb-6">
                <span className="text-[#252B42]">Home</span>
                <span>
                  <Image
                    src="/images/icons/shoprightarrow-icon.png"
                    width={8.62}
                    height={16}
                    alt="Rightarrow-icon"
                  />
                </span>
                <Link href="/shop">
                  <span className="text-[#252B42]">Shop</span>
                </Link>
                <span>
                  <Image
                    src="/images/icons/shoprightarrow-icon.png"
                    width={8.62}
                    height={16}
                    alt="Rightarrow-icon"
                  />
                </span>
                <span className="text-[#737373]">Product Details</span>
              </div>
    
              {/* Product Details */}
              <div className="container mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-normal">
                {/* Product Image */}
                <div className="ml-[0rem] md:ml-[1rem] lg:ml-[3.5rem] xl:ml-[5.5rem] 2xl:ml-[8.5rem] relative">
                  <Image
                    src={urlFor({ asset: { _ref: product.productImage?.asset?._ref } }).url() || "/placeholder.png"}
                    alt={product.title || "Product Image"}
                    className="w-[22rem] sm:w-[35rem] md:w-[45rem] lg:w-[25rem] rounded-sm"
                    width={400}
                    height={400}
                  />
                </div>
    
                {/* Product Info */}
                <div className="flex flex-col space-y-3 max-w-md ml-5">
                  <h1 className="text-[1.5rem] font-bold text-textColor">
                    {product.title || "Product Title"}
                  </h1>
                  {/* Star Rating */}
                  <div className="flex items-center gap-x-2">
                    {[...Array(4)].map((_, index) => (
                      <Image
                        key={index}
                        src="/images/icons/star-1.png"
                        width={22}
                        height={22}
                        alt="Star"
                        className="w-[1.3rem]"
                      />
                    ))}
                    <Image
                      src="/images/icons/star-2.png"
                      width={22}
                      height={22}
                      alt="Half Star"
                      className="w-[1.3rem]"
                    />
                  </div>
                  <p className="text-[#737373] text-sm font-semibold">10 Reviews</p>
    
                  {/* Price and Availability */}
                  <p className="font-semibold text-[1.5rem]">${product.price || "0.00"}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-[#737373] text-sm font-semibold">Availability:</span>
                    <span className="text-[#23A6F0] text-sm font-semibold">In Stock</span>
                  </div>
    
                  {/* Description */}
                  <p className="text-[#737373] text-sm">
                    {truncateDescription(product.description)}
                  </p>
    
                  {/* Action Buttons */}
                  <div className="flex space-x-4 mt-4">
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 hover:bg-blue-700"
                  >
                    Add To Cart
                  </button>
                    <div className="flex space-x-2 items-center">
                      <button className="p-2 border rounded-full">
                        <FaHeart />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      );
}
