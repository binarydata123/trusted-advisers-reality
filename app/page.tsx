"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

type IconName = "arrow" | "award" | "calendar" | "check" | "gift" | "menu" | "phone" | "shield" | "user";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, string> = {
    arrow: "M5 12h14m-6-6 6 6-6 6",
    award: "m12 15 2.5 5L17 17l4 .5-3-3 1-4-3.5 2-3.5-2 1 4-3 3-4-.5 2.5 3-2.5Z",
    calendar: "M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13H4V6a1 1 0 0 1 1-1Z",
    check: "m5 12 4 4L19 6",
    gift: "M20 12v8H4v-8m2-4h12v4H6V8Zm6 0v12M12 8H8.5a2.5 2.5 0 1 1 2.5-2.5V8Zm0 0h3.5A2.5 2.5 0 1 0 13.5 5.5V8Z",
    menu: "M4 6h16M4 12h16M4 18h16",
    phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z",
    user: "M20 21a8 8 0 0 0-16 0m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
  };
  return <svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" className={className}><path d={paths[name]} /></svg>;
}

function Photo({ src, className = "" }: { src: string; className?: string }) {
  const isHeroPhoto = src === "/trusted-advisers.png";
  return <div className={`${isHeroPhoto ? "!bg-contain bg-no-repeat !h-auto aspect-square" : "bg-cover"} bg-center ${className}`} style={{ backgroundImage: `url("${src}")` }} />;
}

function SiteFooter() {
  return (
    <footer className="site-footer border-t border-slate-800 bg-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div>
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/logo/Trusted%20adviser%20logo%20final%2030Sept19-01.png"
                alt="Trusted Advisers Realty"
                width={200}
                height={90}
                className="h-20 auto object-contain"
                priority
              />
            </a>
            <div className="mt-5 max-w-xs space-y-1 text-sm leading-6 text-slate-400"><p className="font-semibold text-slate-200">Trusted Advisers Realty Group Inc., Real Estate Brokerage</p><p>Direct: (555) 019-9832 | Office: (555) 019-4100</p><a href="mailto:services@trustedadvisersrealty.com" className="block break-words text-gold hover:underline">services@trustedadvisersrealty.com</a></div>
            <div className="mt-5 flex gap-2"><a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 font-bold transition hover:border-accent hover:bg-accent hover:text-white">f</a><a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold transition hover:border-accent hover:bg-accent hover:text-white">in</a><a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-accent hover:bg-accent hover:text-white">◎</a><a href="#" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold transition hover:border-accent hover:bg-accent hover:text-white">▶</a></div>
          </div>
          <div><h3 className="text-sm font-bold uppercase tracking-widest text-white">Explore</h3><nav className="mt-5 space-y-3 text-sm"><a href="#search" className="block transition hover:text-white">Find a Property</a><a href="#sell-options" className="block transition hover:text-white">Sell or List</a><a href="#about-us" className="block transition hover:text-white">About Us</a><a href="#blog" className="block transition hover:text-white">Real Estate Blog</a></nav></div>
          <div><h3 className="text-sm font-bold uppercase tracking-widest text-white">Get Support</h3><nav className="mt-5 space-y-3 text-sm"><a href="#valuation" className="block transition hover:text-white">Get a Valuation</a><a href="#referral" className="block transition hover:text-white">Refer &amp; Earn $500</a><a href="tel:18005550199" className="block transition hover:text-white">Call (800) 555-0199</a><a href="mailto:services@trustedadvisersrealty.com" className="block break-words transition hover:text-white">Email Our Team</a></nav></div>
          <div><h3 className="text-sm font-bold uppercase tracking-widest text-white">Stay in the Know</h3><p className="mt-5 text-sm leading-6 text-slate-400">Get helpful market updates and home-selling tips in your inbox.</p><form onSubmit={(event) => event.preventDefault()} className="mt-4 flex"><input type="email" required placeholder="Your email address" aria-label="Your email address" className="min-w-0 flex-1 rounded-l-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-accent" /><button type="submit" className="rounded-r-lg bg-accent px-4 text-sm font-bold text-white transition hover:bg-red-700">Join</button></form></div>
        </div>
        <div className="grid gap-6 border-b border-white/10 py-8 lg:grid-cols-[1fr_2fr]"><div><h3 className="text-sm font-bold text-white">Legal &amp; Privacy</h3><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs"><a href="#privacy-policy" className="hover:text-white">Privacy Policy</a><a href="#terms" className="hover:text-white">Terms of Use</a><a href="#accessibility" className="hover:text-white">Accessibility</a><a href="#contact" className="hover:text-white">Contact</a></div></div><div className="space-y-3 text-xs leading-5 text-slate-400"><details id="privacy-policy" className="rounded-lg border border-white/10 bg-white/[0.03] p-3"><summary className="cursor-pointer font-semibold text-slate-200">Privacy Policy</summary><p className="mt-2">We use information you submit only to respond to your request, provide real estate services, and improve your experience. We do not sell your personal information.</p></details><details id="terms" className="rounded-lg border border-white/10 bg-white/[0.03] p-3"><summary className="cursor-pointer font-semibold text-slate-200">Terms of Use</summary><p className="mt-2">Website content is provided for general information and does not constitute legal, financial, or real estate advice. Please verify details with a qualified adviser.</p></details><details id="accessibility" className="rounded-lg border border-white/10 bg-white/[0.03] p-3"><summary className="cursor-pointer font-semibold text-slate-200">Accessibility Statement</summary><p className="mt-2">We are committed to making this website accessible. If you need assistance, please contact our team.</p></details><details className="rounded-lg border border-white/10 bg-white/[0.03] p-3"><summary className="cursor-pointer font-semibold text-slate-200">Real Estate Legal Disclosure</summary><div className="mt-2 space-y-2"><p>Copyright Real Estate REALTOR® Association of Alberta and REALTOR® Association of Edmonton. All rights reserved. REALTOR® Association of Alberta &amp; Edmonton assumes no responsibility for the accuracy of any information given. Data comes from reliable sources but is not guaranteed by Trusted Advisers Realty Group Inc.</p><p>The trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA). The trademarks MLS®, Multiple Listing Service® and associated logos are owned by CREA and identify the quality of services provided by CREA members.</p></div></details></div></div>
        <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-[11px] leading-5 text-slate-400 shadow-inner"><p>Copyright 2026 by the REALTORS® Association of Edmonton. All rights reserved. REALTORS® Association of Edmonton assumes no responsibility for the accuracy of any information shown. Data is deemed reliable but is not guaranteed accurate by the REALTORS® Association of Edmonton. Data was last updated 2026.10.26 12:00 AM EST.</p><p className="mt-3">The trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service®, and the associated logos are owned by CREA and identify the quality of services provided by CREA members.</p></div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Trusted Advisers Realty Group. All rights reserved.</span><span>Trusted Advisers Realty Group Inc., Real Estate Brokerage · Direct: (555) 019-9832 · <a href="mailto:services@trustedadvisersrealty.com" className="text-gold hover:underline">services@trustedadvisersrealty.com</a></span></div>
      </div>
    </footer>
  );
}

const features = ["Any Location Guaranteed", "Any Condition Guaranteed", "Any Price Guaranteed"];
const articles = [
  ["Guide", "Cash Offer vs. Listing: Which Real Estate Strategy Wins in 2026?", "Compare the instant speed and zero-repair ease of direct cash offers against maximizing value through traditional market exposure.", "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800"],
  ["Tips", "5 High-ROI Upgrades to Boost Your Home’s Valuation Instantly", "Discover minor cosmetic improvements and structural fixes that yield the highest equity return before putting your home up for sale.", "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"],
  ["Rewards", "How Our $500 Real Estate Referral Rewards Program Works", "Learn how easy it is to earn a $500 commission bonus by connecting friends, family, or neighbors with our verified home buyers.", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"],
  ["Market", "What Today’s Buyers Should Know Before Making an Offer", "A practical look at inspections, financing, contingencies, and the details that help buyers move with confidence.", "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800"],
  ["Planning", "How to Prepare Your Home for a Successful Listing", "Simple preparation steps that help your home show beautifully and attract serious buyers from the first showing.", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"],
  ["Local Guide", "The Homeowner’s Guide to a Smooth Closing", "Understand the final steps, documents, and timelines involved in a smooth and stress-free real estate closing.", "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&q=80&w=800"],
];

const testimonials = [
  ["Rohan Mehta", "Property Investor", "Trusted Advisers brought complete clarity to my investment journey. Their transparent approach and market knowledge gave me the confidence to make the right decision."],
  ["Amanpreet Singh", "Delighted Home Seller", "My experience was smooth and completely stress-free. The detailed guidance and support made every step simple and well-organized."],
  ["Harpreet Gill", "Happy New Homeowner", "The entire process was seamless and professional. I felt supported from the first conversation through the final closing."],
  ["Sarah Williams", "First-Time Buyer", "The team listened carefully, answered every question, and helped me find a home that truly matched my goals and budget."],
  ["Daniel Carter", "Home Seller", "Clear communication, honest advice, and a great result. I would confidently recommend Trusted Advisers to anyone buying or selling."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referralAmount, setReferralAmount] = useState(500);
  const [testimonialIndex, setTestimonialIndex] = useState(1);
  const [testimonialStarted, setTestimonialStarted] = useState(false);
  const [testimonialPhase, setTestimonialPhase] = useState<"idle" | "zoom-out" | "slide" | "zoom-in">("idle");
  useEffect(() => {
    const slider = document.querySelector<HTMLElement>("#blog .grid");
    if (!slider) return;
    const autoSlide = window.setInterval(() => {
      const card = slider.querySelector<HTMLElement>("article");
      if (!card) return;
      const gap = Number.parseFloat(getComputedStyle(slider).columnGap || "32") || 32;
      const nextPosition = slider.scrollLeft + card.offsetWidth + gap;
      const isAtEnd = nextPosition + slider.clientWidth >= slider.scrollWidth - 8;
      slider.scrollTo({ left: isAtEnd ? 0 : nextPosition, behavior: "smooth" });
    }, 4500);
    return () => window.clearInterval(autoSlide);
  }, []);
  useEffect(() => {
    let slideTimer: number | undefined;
    let settleTimer: number | undefined;
    const testimonialTimer = window.setInterval(() => {
      setTestimonialStarted(true);
      setTestimonialPhase("zoom-out");
      slideTimer = window.setTimeout(() => {
        setTestimonialPhase("slide");
        settleTimer = window.setTimeout(() => {
          setTestimonialIndex((current) => (current + 1) % testimonials.length);
          setTestimonialPhase("zoom-in");
          settleTimer = window.setTimeout(() => setTestimonialPhase("idle"), 750);
        }, 260);
      }, 450);
    }, 4500);
    return () => {
      window.clearInterval(testimonialTimer);
      if (slideTimer) window.clearTimeout(slideTimer);
      if (settleTimer) window.clearTimeout(settleTimer);
    };
  }, []);
  useEffect(() => {
    const referralSection = document.getElementById("referral");
    if (!referralSection) return;
    let counterTimer: number | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let amount = 1;
      setReferralAmount(amount);
      counterTimer = window.setInterval(() => {
        amount += 10;
        if (amount >= 500) {
          amount = 500;
          window.clearInterval(counterTimer);
        }
        setReferralAmount(amount);
      }, 24);
    }, { threshold: 0.35 });
    observer.observe(referralSection);
    return () => {
      observer.disconnect();
      if (counterTimer) window.clearInterval(counterTimer);
    };
  }, []);
  const submitForm = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); event.currentTarget.reset(); };
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="bg-navy px-4 py-2.5 text-xs text-slate-300"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 md:flex-row"><div className="flex items-center gap-5"><a href="tel:18005550199" className="flex items-center gap-2 hover:text-white"><Icon name="phone" className="h-3.5 w-3.5 text-gold" /> Call Us Now</a><span className="text-slate-600">|</span><a href="#valuation" className="hover:text-white">Get Home Valuation</a></div><div className="flex items-center gap-4"><span className="text-slate-400">Follow Us:</span><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Instagram">◎</a><span className="text-slate-600">|</span><a href="#" className="flex items-center gap-1 hover:text-white"><Icon name="user" className="h-3.5 w-3.5" /> Client Portal</a></div></div></div>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"><a href="#" className="">

        <Image
          src="/logo/Trusted%20adviser%20logo%20final%2030Sept19-01.png"
          alt="Trusted Advisers Realty"
          width={200}
          height={90}
          className="h-20 auto object-contain"
          priority
        />

      </a><nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex"><a href="#" className="font-semibold text-blue">HOME</a><a href="#search" className="hover:text-blue">BUY</a><a href="#sell-options" className="hover:text-blue">SELL &amp; LIST</a><a href="#about-us" className="hover:text-blue">ABOUT US</a><a href="#blog" className="hover:text-blue">BLOG</a><a href="#referral" className="hover:text-blue">REFER &amp; EARN</a></nav><a href="#valuation" className="hidden rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-red-700 sm:inline-flex">Instant Offer</a><button type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded-md p-2 text-slate-600 lg:hidden"><Icon name="menu" className="h-6 w-6" /></button></div>{menuOpen && <nav className="space-y-1 border-t border-slate-200 bg-white px-4 pb-5 pt-2 lg:hidden"><a onClick={closeMenu} href="#" className="block rounded-md bg-slate-50 px-3 py-2 font-semibold text-blue">HOME</a><a onClick={closeMenu} href="#search" className="block rounded-md px-3 py-2">BUY</a><a onClick={closeMenu} href="#sell-options" className="block rounded-md px-3 py-2">SELL &amp; LIST</a><a onClick={closeMenu} href="#about-us" className="block rounded-md px-3 py-2">ABOUT US</a><a onClick={closeMenu} href="#blog" className="block rounded-md px-3 py-2">BLOG</a><a onClick={closeMenu} href="#referral" className="block rounded-md px-3 py-2">REFER &amp; EARN</a><a onClick={closeMenu} href="#valuation" className="mt-3 block rounded-lg bg-accent px-4 py-2.5 text-center font-semibold text-white">Instant Offer</a></nav>}</header>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-navy to-slate-900 py-16 text-white lg:py-24"><div className="absolute inset-0 opacity-10 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" /><div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8"><div className="space-y-6 text-center lg:col-span-7 lg:text-left"><div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-400"><Icon name="shield" className="h-4 w-4 text-accent" /> Trusted Real Estate Solutions</div><h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">WE BUY HOUSES!<br /><span className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">Refer and Earn $500</span></h1><p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300 lg:mx-0">Whether you want a hassle-free cash offer or traditional market listing, we guarantee the best terms, location flexibility, and speed.</p><div className="grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3 lg:mx-0">{features.map((feature) => <div key={feature} className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-medium text-slate-200 lg:justify-start"><Icon name="check" className="h-5 w-5 shrink-0 text-emerald-400" />{feature}</div>)}</div><div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row lg:justify-start"><a href="#valuation" className="flex items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 font-bold shadow-lg shadow-red-900/40 transition hover:bg-red-700"><span>Get Instant Offer</span><Icon name="arrow" className="h-5 w-5" /></a><a href="#sell-options" className="rounded-xl border border-slate-700 bg-slate-800 px-8 py-4 text-center font-semibold transition hover:bg-slate-700">Explore Selling Options</a></div></div><div className="flex flex-col items-center lg:col-span-5">
        {/* Naya Wrapper Div (Rounded corners + Shadow yaha add kiye gaye hain) */}
        <div className="w-full max-w-lg overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-2 ring-white/20 ring-offset-2 ring-offset-slate-900 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.8)]">

          <Photo
            src="/trusted-advisers.png"
            className="h-[420px] w-full bg-slate-800"
          />

          <div className="w-full border-t border-slate-300/20 bg-slate-400/30 px-4 py-2.5 text-center backdrop-blur-md">
            <h3 className="font-bold text-white">Justin Iyizoba</h3>
            <p className="text-xs text-slate-200">Bsc|Msc {"{Economics}"}</p>
          </div>

        </div>
      </div></div></section>
      <section id="search" className="relative z-20 mx-auto -mt-6 max-w-6xl px-4 py-12 sm:px-6"><div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"><div className="mb-6 text-center"><h2 className="text-2xl font-bold uppercase tracking-wide text-slate-900">Property Search</h2><p className="mt-1 text-sm text-slate-500">Find your next residential or commercial property in seconds</p></div><form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">{[["Location / City", "Where do you want to live?"], ["Type of Home", "Single Family"], ["Min Price", "No Min"], ["Max Price", "No Max"], ["Bedrooms", "Any Beds"], ["Bathrooms", "Any Baths"]].map(([label, value]) => <label key={label} className="text-xs font-bold uppercase text-slate-600">{label}<select className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm font-normal normal-case text-slate-800 outline-none focus:ring-2 focus:ring-blue"><option>{value}</option><option>Downtown</option><option>Suburbs</option><option>Waterfront</option></select></label>)}<button className="rounded-lg bg-blue px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue/90 lg:col-span-6">SEARCH PROPERTIES <span className="ml-2">→</span></button></form></div></section>
      <section className="process-section border-y border-blue-100 bg-blue-50/60 py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mx-auto mb-12 max-w-2xl text-center"><span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Simple. Fast. Reliable.</span><h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">A Better Way to Sell Your Home</h2><p className="mt-3 text-sm leading-6 text-slate-600">From your first conversation to closing day, our advisers make every step clear and stress-free.</p></div><div className="relative grid gap-6 md:grid-cols-3 md:gap-8"><div className="process-line absolute left-[16%] right-[16%] top-12 hidden h-px bg-gradient-to-r from-blue-200 via-accent/50 to-blue-200 md:block" />{[["01", "Tell Us About Your Home", "Share a few details about your property and your goals with our team."], ["02", "Get Your Best Option", "We review your situation and present a transparent cash offer or listing plan."], ["03", "Close on Your Terms", "Choose your timeline and move forward with confidence and zero pressure."]].map(([number, title, body]) => <div key={number} className="process-card group relative rounded-2xl border border-blue-100 bg-white p-7 shadow-sm"><div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-lg font-extrabold text-white shadow-lg shadow-navy/20 transition duration-200 group-hover:scale-110 group-hover:bg-accent">{number}</div><h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue">{title}</h3><p className="text-sm leading-relaxed text-slate-600">{body}</p><div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue opacity-0 transition-opacity duration-200 group-hover:opacity-100">Your next step <Icon name="arrow" className="h-4 w-4" /></div></div>)}</div><div className="mt-10 text-center"><a href="#valuation" className="inline-flex items-center rounded-xl bg-navy px-6 py-3 text-sm font-bold text-white shadow-lg shadow-navy/20 transition hover:-translate-y-1 hover:bg-slate-800">Start Your Home Journey <Icon name="arrow" className="ml-2 h-4 w-4" /></a></div></div></section>
      <section id="sell-options" className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mx-auto mb-12 max-w-2xl text-center"><span className="text-xs font-bold uppercase tracking-widest text-accent">Your Choice, Your Advantage</span><h2 className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">Two Ways to Reach Your Real Estate Goals</h2><p className="mt-3 text-slate-500">Whether speed or maximum market exposure matters most, our advisers build the right path for you.</p></div><div className="grid gap-8 lg:grid-cols-2"><div className="rounded-2xl border border-red-100 bg-red-50/60 p-8"><div className="mb-5 inline-flex rounded-xl bg-accent p-3 text-white"><Icon name="arrow" /></div><h3 className="text-2xl font-extrabold text-slate-900">Sell Directly to Us</h3><p className="mt-3 text-slate-600">Get a fair, no-obligation cash offer and sell your home as-is without repairs, staging, or open houses.</p><ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">{["Fast, flexible closing timeline", "No agent commissions or hidden fees", "We buy homes in any condition", "Private, convenient process"].map((item) => <li key={item} className="flex gap-2"><Icon name="check" className="h-5 w-5 shrink-0 text-accent" />{item}</li>)}</ul><a href="#valuation" className="mt-8 inline-flex rounded-lg bg-accent px-5 py-3 text-sm font-bold text-white hover:bg-red-700">Get a Cash Offer <Icon name="arrow" className="ml-2 h-4 w-4" /></a></div><div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-8"><div className="mb-5 inline-flex rounded-xl bg-blue p-3 text-white"><Icon name="award" /></div><h3 className="text-2xl font-extrabold text-slate-900">List With Our Team</h3><p className="mt-3 text-slate-600">Maximize your home’s value with professional marketing, local expertise, and a strategic listing plan.</p><ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">{["Professional photography and marketing", "Expert pricing and negotiation", "Access to qualified buyers", "Dedicated adviser from start to close"].map((item) => <li key={item} className="flex gap-2"><Icon name="check" className="h-5 w-5 shrink-0 text-blue" />{item}</li>)}</ul><a href="#valuation" className="mt-8 inline-flex rounded-lg bg-blue px-5 py-3 text-sm font-bold text-white hover:bg-blue/90">Talk to an Adviser <Icon name="arrow" className="ml-2 h-4 w-4" /></a></div></div></div></section>
      <section id="about-us" className="border-t border-slate-200 bg-slate-50 py-20"><div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div className="relative"><Photo src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000" className="h-[430px] rounded-2xl shadow-lg" /><div className="absolute -bottom-6 -right-4 rounded-xl bg-navy px-7 py-5 text-white shadow-xl sm:right-6"><div className="text-3xl font-extrabold">15+</div><div className="text-xs uppercase tracking-widest text-slate-300">Years of Experience</div></div></div><div><span className="text-xs font-bold uppercase tracking-widest text-accent">About s</span><h2 className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">Real Advice. Real Results. Real People.</h2><p className="mt-5 leading-relaxed text-slate-600">We are a people-first real estate brokerage built around clear communication and practical solutions. Our experienced advisers help homeowners, buyers, and investors make confident decisions in every market.</p><div className="mt-7 space-y-5">{[["Transparent Guidance", "No hidden fees, strict ethics, and zero pressure at any step."], ["Certified Excellence", "Top-rated brokers with decades of combined local market mastery."]].map(([title, body]) => <div key={title} className="flex gap-3"><div className="rounded-xl bg-amber-100 p-2.5 text-gold"><Icon name="award" /></div><div><h4 className="font-bold text-slate-900">{title}</h4><p className="mt-1 text-sm text-slate-500">{body}</p></div></div>)}</div><a href="#valuation" className="mt-8 inline-flex rounded-xl bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-slate-800">Meet Our Advisers <Icon name="arrow" className="ml-2 h-4 w-4" /></a></div></div></section>
      <section id="blog" className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 flex flex-col justify-between md:flex-row md:items-end"><div><span className="text-xs font-bold uppercase tracking-widest text-accent">Market Insights &amp; Advice</span><h2 className="mt-1 text-3xl font-extrabold text-slate-900 sm:text-4xl">Latest Real Estate Articles</h2></div><p className="mt-2 max-w-md text-sm text-slate-500 md:mt-0">Stay updated with the latest market trends, home valuation tips, and selling strategies.</p></div><div className="grid gap-8 md:grid-cols-3">{articles.map(([tag, title, body, image]) => <article key={title} className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition hover:shadow-md"><div><div className="relative"><Photo src={image} className="h-48 w-full" /><span className="absolute left-3 top-3 rounded-full bg-navy px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">{tag}</span></div><div className="p-6"><div className="mb-2 flex items-center gap-2 text-xs text-slate-400"><Icon name="calendar" className="h-3.5 w-3.5" /> Oct 2026 • Trusted Advisers</div><h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3><p className="text-xs leading-relaxed text-slate-600">{body}</p></div></div><a href="#valuation" className="px-6 pb-6 text-xs font-bold text-blue hover:underline">Read Full Article →</a></article>)}</div></div></section>
      <section id="referral" className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-navy to-slate-900 py-16 text-white"><div className="relative z-10 mx-auto max-w-5xl px-4 text-center"><div className="mb-4 inline-flex rounded-full bg-amber-500/20 p-3 text-amber-400"><Icon name="gift" className="h-8 w-8" /></div><h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Refer and Earn ${referralAmount}</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">Refer family, friends, and clients to Canada &amp; US Real Estate Service. Know someone who wants to buy or sell? Send them our way!</p><a href="#valuation" className="mt-8 inline-flex rounded-xl bg-amber-500 px-8 py-4 font-extrabold text-slate-950 shadow-lg transition hover:scale-105 hover:bg-amber-600">Submit a Referral Today</a></div></section>
      <section id="valuation" className="bg-slate-100 py-20"><div className="mx-auto max-w-4xl px-4 sm:px-6"><div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl sm:p-12"><div className="mb-8 text-center"><span className="text-xs font-bold uppercase tracking-widest text-accent">Get In Touch</span><h2 className="mt-1 text-3xl font-extrabold text-slate-900">Send Referrals and Feedback</h2><p className="mt-2 text-sm text-slate-500">Fill out the brief form below and an agent will reach back immediately.</p></div><form onSubmit={submitForm} className="space-y-5"><div className="grid gap-4 sm:grid-cols-3">{[["Your Name *", "text", "John Doe"], ["Email Address *", "email", "john@example.com"], ["Phone Number *", "tel", "(555) 000-0000"]].map(([label, type, placeholder]) => <label key={label} className="text-xs font-semibold uppercase text-slate-700">{label}<input required type={type} placeholder={placeholder} className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-normal normal-case text-slate-800 outline-none focus:ring-2 focus:ring-blue" /></label>)}</div><label className="block text-xs font-semibold uppercase text-slate-700">Message / Referral Details *<textarea required rows={4} placeholder="Please state property address, listing interest, or referral details here..." className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-normal normal-case text-slate-800 outline-none focus:ring-2 focus:ring-blue" /></label>{submitted && <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">Thank you! Your message/referral has been submitted successfully. Our team will contact you shortly.</div>}<div className="pt-2 text-center"><button type="submit" className="w-full rounded-xl bg-accent px-12 py-4 text-base font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-red-700 sm:w-auto">Send Message Now</button></div></form></div></div></section>
      <footer className="border-t border-slate-800 bg-navy py-12 text-xs text-slate-400"><div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8"><div className="flex flex-col items-center justify-between gap-4 border-b border-slate-800 pb-8 md:flex-row"><div className="flex items-center gap-3"><div className="rounded-lg bg-white p-2 text-lg font-bold text-navy"><span className="text-accent">T</span>A</div><div><span className="block text-lg font-extrabold tracking-tight text-white">TRUSTED ADVISERS</span><span className="block text-[10px] font-semibold uppercase tracking-widest text-accent">REALTY GROUP</span></div></div><div className="text-center md:text-right"><p className="font-medium text-slate-300">Trusted Advisers Realty Group Inc., Real Estate Brokerage</p><p>Direct: (555) 019-9832 | Office: (555) 019-4100</p><p>Email: <a href="mailto:services@trustedadvisersrealty.com" className="text-gold hover:underline">services@trustedadvisersrealty.com</a></p></div></div><div className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-[11px] leading-relaxed"><p>Copyright Real Estate REALTOR® Association of Alberta and REALTOR® Association of Edmonton. All rights reserved. REALTOR® Association of Alberta &amp; Edmonton assumes no responsibility for the accuracy of any information given. Data comes from reliable sources but is not guaranteed accuracy by Trusted Advisers Realty Group Inc.</p><p>The trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and identify real estate professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by CREA and identify the quality of services provided by real estate professionals who are members of CREA.</p></div><div className="pt-4 text-center text-[11px] text-slate-500">© {new Date().getFullYear()} Trusted Advisers Realty Group. All rights reserved.</div></div></footer>
      <section id="testimonials" className="bg-slate-100 py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 text-center"><span className="text-xs font-bold uppercase tracking-widest text-accent">Our Reviews</span><h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Customer Testimonials &amp; Reviews</h2><p className="mx-auto mt-3 max-w-2xl text-sm text-slate-500">Real stories from homeowners, buyers, and investors who trusted our advisers.</p></div><div className="grid items-center gap-6">{[-1, 0, 1].map((offset) => { const index = (testimonialIndex + offset + testimonials.length) % testimonials.length; const [name, role, quote] = testimonials[index]; return <article key={`${name}-${testimonialIndex}`} className={`testimonial-card rounded-2xl border border-slate-200 bg-white p-7 shadow-md md:col-span-1 ${testimonialPhase === "slide" ? "testimonial-sliding" : ""} ${testimonialStarted && (testimonialPhase === "idle" || testimonialPhase === "zoom-in") && offset === 0 ? "testimonial-active" : ""}`}><div className="text-xl tracking-[0.15em] text-amber-400">★★★★★</div><p className="mt-5 min-h-28 text-sm leading-6 text-slate-600">{quote}</p><div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">{name.charAt(0)}</div><div><h3 className="font-bold text-slate-900">{name}</h3><p className="text-xs text-slate-500">{role}</p></div></div></article>; })}</div><div className="mt-10 flex justify-center gap-2" aria-label="Testimonial slides">{testimonials.map((testimonial, index) => <button key={testimonial[0]} type="button" aria-label={`Show testimonial ${index + 1}`} onClick={() => { setTestimonialStarted(true); setTestimonialPhase("zoom-out"); window.setTimeout(() => { setTestimonialPhase("slide"); window.setTimeout(() => { setTestimonialIndex(index); setTestimonialPhase("zoom-in"); }, 260); }, 450); }} className={`h-2.5 rounded-full transition-all ${testimonialIndex === index ? "w-7 bg-accent" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`} />)}</div></div></section>
      <SiteFooter />
    </main>
  );
}
