"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Crown, Headphones, Package, Shield, ShoppingCart, Truck } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/1203777/pexels-photo-1203777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="A minimalist Batman logo on a metallic roll-up door in daylight, Shilin District, Taipei."
          brandName="AmazonStore"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Shop Everything You Need"
          description="Discover millions of products with fast delivery, secure payments, and unbeatable prices. Your one-stop shopping destination."
          tag="Amazon Style Shopping"
          tagIcon={ShoppingCart}
          buttons={[
            {
              text: "Start Shopping",
              href: "products"
            },
            {
              text: "Browse Categories",
              href: "categories"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5632407/pexels-photo-5632407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern e-commerce platform"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Our Store"
          description={[
            "We're committed to providing you with the best shopping experience possible. From electronics to fashion, home goods to books, we've got everything you need.",
            "Our mission is to make online shopping easy, secure, and enjoyable for everyone. Join millions of satisfied customers who trust us for their shopping needs."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Why Choose Us"
          description="Discover what makes our platform the preferred choice for millions of shoppers worldwide"
          features={[
            {
              title: "Fast & Free Delivery",
              description: "Get your orders delivered quickly with our extensive logistics network and free shipping options",
              icon: Truck
            },
            {
              title: "Secure Payments",
              description: "Shop with confidence using our encrypted payment system and buyer protection guarantee",
              icon: Shield
            },
            {
              title: "Wide Selection",
              description: "Browse millions of products across hundreds of categories from trusted sellers",
              icon: Package
            },
            {
              title: "24/7 Support",
              description: "Our customer service team is always ready to help with any questions or concerns",
              icon: Headphones
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Products"
          description="Discover our top-selling items and trending products across all categories"
          tag="Best Sellers"
          products={[
            {
              id: "1",
              name: "Premium Smartphone",
              price: "$699.99",
              imageSrc: "https://images.pexels.com/photos/214488/pexels-photo-214488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium smartphone"
            },
            {
              id: "2",
              name: "Wireless Headphones",
              price: "$199.99",
              imageSrc: "https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Wireless headphones"
            },
            {
              id: "3",
              name: "Laptop Computer",
              price: "$999.99",
              imageSrc: "https://images.pexels.com/photos/34502067/pexels-photo-34502067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Laptop computer"
            },
            {
              id: "4",
              name: "Smart Watch",
              price: "$299.99",
              imageSrc: "https://images.pexels.com/photos/4492217/pexels-photo-4492217.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Smart watch"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Membership Plans"
          description="Choose the perfect membership plan to enhance your shopping experience"
          plans={[
            {
              id: "basic",
              badge: "Basic",
              badgeIcon: Package,
              price: "Free",
              subtitle: "Perfect for occasional shoppers",
              features: [
                "Standard delivery",
                "Basic customer support",
                "Access to deals"
              ]
            },
            {
              id: "prime",
              badge: "Most Popular",
              badgeIcon: Crown,
              price: "$12.99/mo",
              subtitle: "Best value for frequent shoppers",
              features: [
                "Free 2-day delivery",
                "Priority customer support",
                "Exclusive deals & discounts",
                "Streaming services included"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Hear from millions of satisfied customers who love shopping with us"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Prime Member",
              company: "Tech Enthusiast",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Owner",
              company: "Small Business",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7447131/pexels-photo-7447131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Regular Customer",
              company: "Fashion Lover",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Prime Member",
              company: "Electronics Expert",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7697287/pexels-photo-7697287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="Join thousands of brands and millions of customers who choose our platform"
          logos={[
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1032109/pexels-photo-1032109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Need Help Shopping?"
          description="Our customer service team is here to help you find exactly what you're looking for. Reach out anytime!"
          imageSrc="https://images.pexels.com/photos/8422706/pexels-photo-8422706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Customer service representative"
          inputPlaceholder="Enter your email"
          buttonText="Contact Us"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Shop",
              items: [
                {
                  label: "All Categories",
                  href: "categories"
                },
                {
                  label: "Best Sellers",
                  href: "bestsellers"
                },
                {
                  label: "New Arrivals",
                  href: "new"
                }
              ]
            },
            {
              title: "Account",
              items: [
                {
                  label: "Sign In",
                  href: "signin"
                },
                {
                  label: "Create Account",
                  href: "signup"
                },
                {
                  label: "Order History",
                  href: "orders"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Help Center",
                  href: "help"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Shipping Info",
                  href: "shipping"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | AmazonStore"
        />
      </div>
    </ThemeProvider>
  );
}