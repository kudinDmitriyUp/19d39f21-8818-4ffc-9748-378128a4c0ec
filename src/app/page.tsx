"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import AboutMetric from '@/components/sections/about/AboutMetric';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Sparkles, Zap, Shirt, Pocket, Leaf, Users, Award, Globe, TrendingUp, Star, HelpCircle, Instagram, Facebook, Twitter } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="floatingGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763757122798-pef0pfex.jpg"
          brandName="Stellar Threads"
          navItems={[
            { name: "Shop", id: "shop" },
            { name: "Collection", id: "collection" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Shop Now", href: "shop" }}
          buttonClassName="px-6 py-2 rounded-full"
          buttonTextClassName="font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Elevate Your Wardrobe"
          description="Discover curated clothing collections designed for modern style and comfort. Premium fabrics, timeless designs, and contemporary fashion for every occasion."
          tag="New Collection"
          tagIcon={Sparkles}
          buttons={[
            { text: "Explore Collection", href: "collection" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763757123533-s6v70kzf.jpg"
          imageAlt="Premium clothing collection showcase"
          frameStyle="card"
          containerClassName="text-center"
          titleClassName="text-5xl md:text-7xl font-bold tracking-tight"
          descriptionClassName="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
        />
      </div>

      <div id="collection" data-section="collection">
        <FeatureCardFour
          title="Our Collections"
          description="Explore handpicked pieces that define contemporary style and comfort"
          tag="Featured"
          tagIcon={Zap}
          features={[
            {
              title: "Casual Essentials",
              description: "Versatile everyday pieces that transition seamlessly from day to night",
              icon: Shirt
            },
            {
              title: "Premium Denim",
              description: "Expertly crafted denim with perfect fit and timeless appeal",
              icon: Pocket
            },
            {
              title: "Seasonal Trends",
              description: "Stay ahead with our curated seasonal collections and fashion-forward designs",
              icon: Sparkles
            },
            {
              title: "Sustainable Fashion",
              description: "Eco-conscious pieces made from premium sustainable materials",
              icon: Leaf
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          buttons={[{ text: "View All", href: "shop" }]}
          containerClassName="py-16"
          cardClassName="p-8 rounded-2xl"
          cardTitleClassName="text-2xl font-bold mb-3"
          cardDescriptionClassName="text-base leading-relaxed"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Why Choose Stellar Threads - Quality, Style, and Sustainability Define Everything We Create"
          metrics={[
            { icon: Users, label: "Satisfied Customers", value: "50K+" },
            { icon: Award, label: "Collections Launched", value: "25+" },
            { icon: Globe, label: "Countries Shipped", value: "45" },
            { icon: TrendingUp, label: "Years of Expertise", value: "8" }
          ]}
          containerClassName="py-16"
          metricsContainerClassName="gap-6 md:gap-8"
          metricCardClassName="p-8 rounded-2xl"
          metricValueClassName="text-5xl font-bold"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from people who love their Stellar Threads pieces"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Fashion Enthusiast",
              company: "Lifestyle Blogger",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763757125437-kwzpt2r8.jpg",
              imageAlt: "Sarah wearing Stellar Threads collection"
            },
            {
              id: "2",
              name: "Emily Chen",
              role: "Creative Director",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763757126138-6l9s4asd.jpg",
              imageAlt: "Emily in premium fashion outfit"
            },
            {
              id: "3",
              name: "Jessica Martinez",
              role: "Business Owner",
              company: "Wellness Brand",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763757126824-n6dxtn3l.jpg",
              imageAlt: "Jessica styling Stellar Threads"
            },
            {
              id: "4",
              name: "Amanda Williams",
              role: "Marketing Manager",
              company: "Tech Company",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763757127357-17u6vhi3.jpg",
              imageAlt: "Amanda in stylish clothing"
            },
            {
              id: "5",
              name: "Rachel Adams",
              role: "Freelance Designer",
              company: "Creative Works",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763757128258-e1i9rizp.jpg",
              imageAlt: "Rachel wearing premium fashion"
            },
            {
              id: "6",
              name: "Lisa Thompson",
              role: "Content Creator",
              company: "Fashion Media",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763757129221-tqwflrew.jpg",
              imageAlt: "Lisa in contemporary outfit"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          containerClassName="py-16"
          uniformGridCustomHeightClasses="min-h-100 2xl:min-h-110"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our collections, sizing, shipping, and returns"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What sizes do you offer?",
              content: "We offer sizes XS through 3XL in most styles. Refer to our detailed size chart on each product page for accurate measurements and fit recommendations."
            },
            {
              id: "2",
              title: "Do you offer international shipping?",
              content: "Yes, we ship to over 45 countries worldwide. Shipping rates and delivery times vary by location. You can calculate shipping costs at checkout."
            },
            {
              id: "3",
              title: "What is your return policy?",
              content: "We offer a 30-day money-back guarantee on all items. Items must be unworn and in original condition with tags attached. Free returns shipping on your first return."
            },
            {
              id: "4",
              title: "Are your materials sustainable?",
              content: "We're committed to sustainability. Many collections feature organic cotton, recycled materials, and eco-friendly production methods. Check product descriptions for specific material information."
            },
            {
              id: "5",
              title: "How often do you release new collections?",
              content: "New collections launch seasonally - typically in spring, summer, fall, and winter. We also feature limited edition drops throughout the year. Subscribe to our newsletter for early access."
            },
            {
              id: "6",
              title: "Do you offer gift wrapping?",
              content: "Yes, we offer complimentary gift wrapping for all orders. Select the gift wrap option during checkout to receive your order beautifully packaged."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
          containerClassName="py-16"
          accordionClassName="gap-4"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Have questions about our collections or need styling advice? We'd love to hear from you. Reach out and we'll respond within 24 hours."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "subject", type: "text", placeholder: "Subject", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Tell us how we can help you...", rows: 5, required: true }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763757132430-n3mwwals.jpg"
          imageAlt="Stellar Threads design studio"
          mediaPosition="right"
          buttonText="Send Message"
          containerClassName="py-16"
          formCardClassName="p-8 rounded-3xl"
          titleClassName="text-3xl font-bold mb-4"
          descriptionClassName="text-base opacity-80 mb-8"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Stellar Threads"
          columns={[
            {
              title: "Shop",
              items: [
                { label: "Collections", href: "collection" },
                { label: "New Arrivals", href: "shop" },
                { label: "Sale", href: "shop" },
                { label: "Sizing Guide", href: "faq" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Sustainability", href: "about" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Shipping Info", href: "faq" },
                { label: "Returns", href: "faq" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Follow us on Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Follow us on Facebook" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Follow us on Twitter" }
          ]}
          copyrightText="© Stellar Threads, Inc. 2025. All rights reserved."
          containerClassName="border-t border-opacity-10"
          logoTextClassName="font-bold text-2xl"
          socialContainerClassName="flex gap-4 flex-wrap"
          columnsClassName="grid grid-cols-2 md:grid-cols-4 gap-8"
        />
      </div>
    </ThemeProvider>
  );
}