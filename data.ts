export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Royal Cavendish Select",
    description: "Hand-picked, individually polished Cavendish bananas. Each fruit is inspected for perfect curvature and golden hue.",
    price: 12.99,
    originalPrice: 16.99,
    image: "/images/banana-premium.jpg",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 2847,
    category: "premium",
  },
  {
    id: 2,
    name: "Organic Heritage Bunch",
    description: "Sustainably grown organic bananas from heritage farms. Rich, creamy flavor with notes of honey and vanilla.",
    price: 9.99,
    image: "/images/banana-organic.jpg",
    badge: "Organic",
    rating: 4.8,
    reviews: 1523,
    category: "organic",
  },
  {
    id: 3,
    name: "Golden Gift Collection",
    description: "A curated gift box of 12 premium polished bananas, wrapped in tissue paper. Perfect for special occasions.",
    price: 34.99,
    originalPrice: 44.99,
    image: "/images/banana-bundle.jpg",
    badge: "Gift Set",
    rating: 5.0,
    reviews: 892,
    category: "gifts",
  },
  {
    id: 4,
    name: "Emerald Plantain Reserve",
    description: "Premium green plantains, perfect for cooking. Firm texture and subtle sweetness for gourmet recipes.",
    price: 8.49,
    image: "/images/banana-green.jpg",
    rating: 4.7,
    reviews: 634,
    category: "specialty",
  },
  {
    id: 5,
    name: "Artisan Banana Crisps",
    description: "Slow-dried banana chips crafted from our premium Cavendish selection. A luxurious healthy snack.",
    price: 14.99,
    image: "/images/banana-dried.jpg",
    badge: "New",
    rating: 4.6,
    reviews: 412,
    category: "snacks",
  },
  {
    id: 6,
    name: "The Connoisseur's Dozen",
    description: "12 individually numbered bananas from a single premium bunch. Certificate of origin included.",
    price: 49.99,
    originalPrice: 59.99,
    image: "/images/banana-premium.jpg",
    badge: "Limited",
    rating: 5.0,
    reviews: 156,
    category: "premium",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Food Critic, NY Times",
    avatar: "SM",
    text: "I never thought I'd write a review about bananas, but Golden Peel changed everything. The polish, the curvature, the flavor — absolute perfection.",
    rating: 5,
  },
  {
    id: 2,
    name: "Chef Marco Bellini",
    role: "Michelin Star Chef",
    avatar: "MB",
    text: "These are the only bananas I use in my restaurant. The consistency and quality are unmatched. My banana flambé has never been better.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Park",
    role: "Wellness Influencer",
    avatar: "JP",
    text: "Golden Peel bananas are a game-changer for my morning smoothies. You can truly taste the difference that premium polishing makes.",
    rating: 5,
  },
];

export const stats = [
  { label: "Bananas Polished", value: "2M+" },
  { label: "Happy Customers", value: "150K+" },
  { label: "Countries Served", value: "42" },
  { label: "Quality Rating", value: "99.8%" },
];
